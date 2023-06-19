import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const EmailConfirm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    async function getData() {
      const response = await axios.post(baseUrl + "/users/emailconfirm", {
        token,
      });
      console.log("🚀 ~ getData ~ response", response);

      if (response.data.success) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }
    getData();
  }, []);

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
        p="50px 4px"
        m="20px auto"
        display="block"
        width="100%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px" }} // Add borderRadius style
      >
        <Typography>Thank you!</Typography>
        <Typography mt="10px">Your email is getting verified.</Typography>
        <Typography mt="10px">
          Very soon you will be redirected to the start page
        </Typography>
        <Typography mt="20px">Your token is {token}</Typography>
      </Box>
    </Box>
  );
};

export default EmailConfirm;
