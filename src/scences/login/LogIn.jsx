import React, { useState, useContext, useRef,useEffect,useCallback } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Popover,
} from "@mui/material";

import { HerbContext } from "../../context/Context";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import Logo from "../../logo/TRI_Logo_Herbs_RedBlack+Face.png";
import ScrollTop from "../../components/ScrollTop"
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
  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };


  const checkTokenValidity = async (token) => {
    try {
      const response = await axios.post(baseUrl + '/users/validateToken', { token });
  
      if (response.data.success) {
        // Token is valid, set the user as logged in
        dispatchState({
          type: 'saveProfile',
          payload: response.data.user,
        });
  
        // Redirect the user to the desired page
        navigate('/');
      } else {
        // Token is invalid, remove it from local storage
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Error during token validation:', error);
      // Handle the error appropriately
    }
  };
  

  const [data, setData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const navigate = useNavigate();



  const handleLogin = useCallback(async () => {
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
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        setErrorMessage("Login success");
        setErrorPopoverOpen(true); // Open the error Popover
        dispatchState({
          type: "saveProfile",
          payload: response.data.user,
        });
  
        setLoading(false);
        navigate("/");
      } else {
        setErrorMessage("Login failed. Please try again.");
        setErrorPopoverOpen(true); // Open the error Popover
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error appropriately
    }
  }, [data, setLoading, setErrorMessage, setErrorPopoverOpen, dispatchState, navigate]);
  
  // Replace the dependencies list with the appropriate dependencies for your component.
  
  

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleLogin]);


  useEffect(() => {
    // Check if the user is already logged in by retrieving the token from local storage
    const token = localStorage.getItem('token');
  
    if (token) {
      // Perform a check with the backend to validate the token
      // If the token is valid, set the user as logged in
      checkTokenValidity(token);
    }
  }, []);
  
  const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";
  return (
    <Box>
    <ScrollTop isDarkMode={isDarkMode}/>
      <Box
        padding="10px"
        width="80%"
        margin="100px auto"
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
        ref={errorPopoverAnchorRef}
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
          {/* <FilterVintageIcon
            fontSize="large"
            sx={{ color: isDarkMode ? "rgba(200, 9, 9, 0.4)" : "white" }}
          /> */}
          <img
            src={Logo}
            alt="web-logo"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
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
          <Popover
            open={errorPopoverOpen}
            anchorEl={errorPopoverAnchorRef.current}
            onClose={() => setErrorPopoverOpen(false)}
            anchorReference="anchorEl"
            // anchorPosition={{ top: 100, left: 400 }}
            anchorPosition={
              (errorPopoverAnchorRef.current &&
                getAnchorPosition(errorPopoverAnchorRef.current)) || {
                top: 100,
                left: 400,
              }
            }
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div style={{ padding: "20px" }}>{errorMessage}</div>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
