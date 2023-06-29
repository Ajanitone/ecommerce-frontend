import React from "react";
import {
  Box,
  InputBase,
  Divider,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState, useContext } from "react";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSave = async () => {
    console.log("email", email);
    setLoading(true);

    const response = await axios.post(
      baseUrl + "/newsletters/addnews",
      { email },
      {
        withCredentials: true,
      }
    );

    console.log("handleData response", response);

    if (response.data.success) {
      setLoading(false);
      dispatchState({
        type: "addNewsletter",
        payload: response.data.newsletter,
      });
      navigate("/newsletter");
    }
  };

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton sx={{ "&:hover": { color: "red" } }} onClick={handleSave}>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3"> Subscribe To Our Newsletter</Typography>
      <Typography>The Tea that sets you free 🌿</Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" flexItem />
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <Button
            sx={{
              p: "10px",
              ":hover": {
                cursor: "pointer",
                color: "red",
                backgroundColor: "black",
                fontWeight: 800,
              },
            }}
            onClick={handleSave}
          >
            Subscribe
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Subscribe;
