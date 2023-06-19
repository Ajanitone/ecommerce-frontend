import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, IconButton, InputBase, Button } from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { useDispatch, useSelector } from "react-redux";
import { HerbContext } from "../../context/Context";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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

const LogIn = ({ isDarkMode }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);
  const { dispatchState } = useContext(HerbContext);

  const [data, setData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   setLoading(true);
  //   const response = await axios.post(baseUrl + "/users/login", data, {
  //     withCredentials: true,
  //   });
  //   console.log("handleLogin response:", response, response.data.token);

  //   if (response.data.success) {
  //     dispatchState({
  //       type: "saveProfile",
  //       payload: response.data.user,
  //     });

  //     setLoading(false);
  //     navigate("/");
  //   }
  // };
  const handleLogin = async () => {
    setLoading(true);

    const loginData = {
      emailOrUsername: data.emailOrUsername, // Replace with the correct property name
      password: data.password, // Replace with the correct property name
    };

    try {
      const response = await axios.post(baseUrl + "/users/login", loginData, {
        withCredentials: true,
      });

      console.log("handleLogin response:", response, response.data.token);

      if (response.data.success) {
        dispatchState({
          type: "saveProfile",
          payload: response.data.user,
        });

        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error appropriately
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";
  return (
    <Box
      padding="10px"
      width="80%"
      margin="80px auto"
      textAlign="center"
      sx={{
        background: "hsla(0, 0%, 100%, 0.55)",
        backgroundColor: backgroundColor,
        backdropFilter: "blur(30px)",
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
          background: isDarkMode
            ? "linear-gradient(to right, #1d3557, #f5f3f4)"
            : "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
          borderRadius: "10px",
          pointerEvents: "none",
        }}
      />
      <IconButton>
        <FilterVintageIcon
          fontSize="large"
          sx={{ color: isDarkMode ? "rgba(200, 9, 9, 0.4)" : "white" }}
        />
      </IconButton>
      <Typography variant="h3">Log-in</Typography>
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
          placeholder="Name"
          id="form1"
          type="text"
          name="emailOrUsername"
          value={data.emailOrUsername}
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
          placeholder="Password"
          id="form1"
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </Box>
      {loading ? (
        <ColorRing />
      ) : (
        <Button
          sx={{
            width: "75%",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
            marginBottom: "10px",
          }}
          onClick={handleLogin}
        >
          Log in
        </Button>
      )}
      <Link to="/forgotpass">
        <Button
          sx={{
            width: "75%",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), f5f3f4)",
            marginBottom: "10px",
          }}
        >
          Forgotpass?
        </Button>
      </Link>
      <Box>
        <Box>
          <p className="mx-4 mt-1">New User? Sign up for a new account:</p>
        </Box>
        <Link to="/register">
          <Button
            sx={{
              width: "75%",
              background:
                "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LogIn;
