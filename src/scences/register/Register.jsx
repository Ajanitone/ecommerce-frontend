import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Checkbox,
} from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

import { HerbContext } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
/>;
const Register = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (state.user._id) {
  //     // Check if the user has admin privileges
  //     if (state.user.isAdmin) {
  //       // User is an admin, handle accordingly
  //     } else {
  //       // User is not an admin, redirect to a different page or show an error message
  //       navigate("/");
  //     }
  //   }
  // }, [state.user._id, state.user.isAdmin, navigate]);

  const [fileData, setFiledata] = useState({
    url: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    file: null,
  });

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post(baseUrl + "/users/register", data, {
        withCredentials: true,
      });
      console.log("handleRegister ~ response", response);

      if (response.data.success) {
        navigate("/login");
      } else {
        if (response.data.errorId === 2)
          alert("Username must be more than 2 characters");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <Box
      padding="10px"
      width="80%"
      margin="80px auto"
      textAlign="center"
      sx={{
        background: "hsla(0, 0%, 100%, 0.55)",
        backdropFilter: "blur(30px)",
        backgroundColor: "rgba(242, 38, 19, 0.4)",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
        border: "none",
        // backgroundImage: "linear-gradient(to right, #2a9d8f, #f4a261)",
        position: "relative", // Add position relative
        overflow: "hidden", // Add overflow hidden
      }}
    >
      {/* Add gradient border pseudo-element */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        sx={{
          content: '""',
          position: "absolute",
          background:
            "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
          borderRadius: "10px",
          pointerEvents: "none",
        }}
      />
      <IconButton>
        <FilterVintageIcon
          fontSize="large"
          sx={{ color: "rgba(207, 9, 9, 0.4)" }}
        />
      </IconButton>
      <Typography variant="h3">Sign-up</Typography>

      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px" }} // Add borderRadius style
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Username"
          id="form1"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          title="username"
        />
      </Box>

      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px" }} // Add borderRadius style
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Email"
          id="form1"
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          title="email"
        />
      </Box>

      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px" }} // Add borderRadius style
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Password"
          id="form1"
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
          title="password"
        />
      </Box>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px" }} // Add borderRadius style
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Phone"
          id="form1"
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          title="phone"
        />
      </Box>

      {loading ? (
        <ColorRing />
      ) : (
        <Button
          className="w-100 mb-4"
          size="md"
          onClick={handleRegister}
          sx={{
            width: "75%",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
            marginTop: "10px",
          }}
          title="register"
        >
          Register
        </Button>
      )}
    </Box>
  );
};

export default Register;
