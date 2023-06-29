import React, { useState, useRef ,useEffect} from "react";
import { Box, Typography, InputBase, Button, Popover } from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import Logo from "../../logo/TRI_Logo_Herbs_RedBlack+Face.png";

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
/>;
const Register = ({ isDarkMode }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validate the form fields
    if (data.username.length < 3) {
      setErrorMessage("Username must be more than 2 characters");
      setErrorPopoverOpen(true);
      return;
    }

    if (!validateEmail(data.email)) {
      setErrorMessage("Invalid email address");
      setErrorPopoverOpen(true);
      return;
    }

    if (data.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      setErrorPopoverOpen(true);
      return;
    }

    if (!validatePhoneNumber(data.phone)) {
      setErrorMessage("Invalid phone number");
      setErrorPopoverOpen(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(baseUrl + "/users/register", data, {
        withCredentials: true,
      });

      if (response.data.success) {
        setErrorMessage("Registration successful");
        setErrorPopoverOpen(true);
        navigate("/login");
      } else {
        // Handle registration failure case
        // You can check for specific error conditions and set appropriate error messages
        if (response.data.errorId === 2) {
          setErrorMessage("Username already exists");
        } else {
          setErrorMessage("Registration failed");
        }
        setErrorPopoverOpen(true);
      }
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  // Email validation helper function
  const validateEmail = (email) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation helper function
  const validatePhoneNumber = (phone) => {
    // Use a regular expression to validate the phone number format
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(phone);
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


 
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleRegister();
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleRegister]);
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
          background:
            "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
          borderRadius: "10px",
          pointerEvents: "none",
        }}
      />
      {/* <IconButton>
        <FilterVintageIcon
          fontSize="large"
          sx={{ color: "rgba(207, 9, 9, 0.4)" }}
        />
      </IconButton> */}
      <img
        src={Logo}
        alt="web-logo"
        style={{ width: "30px", height: "30px", borderRadius: "50%" }}
      />
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

      <Popover
        open={errorPopoverOpen}
        anchorEl={errorPopoverAnchorRef.current}
        onClose={() => setErrorPopoverOpen(false)}
        anchorReference="anchorEl"
        // anchorPosition={{ top: 100, left: 400 }}
        anchorPosition={
          (errorPopoverAnchorRef.current &&
            getAnchorPosition(errorPopoverAnchorRef.current)) ||
          undefined
        }
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "20px" }}>{errorMessage}</div>
      </Popover>
    </Box>
  );
};

export default Register;
