import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { Box, Typography, InputBase, Button } from "@mui/material";
const ForgotPass = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { token } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    password: "",
    retypepassword: "",
  });

  const handleSubmit = async () => {
    if (!data.password || data.password !== data.retypepassword)
      return alert("Passwords do not match");

    const response = await axios.post(baseUrl + "/users/changepassword", {
      token,
      password: data.password,
    });

    console.log("getData changepass~ response", response);

    if (response.data.success) {
      alert("Password changed successfully");
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
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
          placeholder="password"
          id="form1"
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
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
          placeholder="retype-password"
          id="form1"
          type="text"
          name="retypepassword"
          value={data.retypepassword}
          onChange={handleChange}
        />
      </Box>

      <Button
        className="w-100 mb-4"
        size="md"
        onClick={handleSubmit}
        sx={{
          width: "75%",
          background:
            "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
          marginTop: "10px",
        }}
      >
        <Typography mt="10px"> Submit</Typography>
      </Button>
    </Box>
  );
};

export default ForgotPass;
