import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Checkbox,
  Divider,
} from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";

import { HerbContext } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
/>;
const Settings = ({ isDarkMode }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, []);

  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      right="0"
      bottom="0"
      width="max(400px,30%)"
      height="75%"
      backgroundColor="white"
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
            "linear-gradient(to right, rgba(120, 9, 9, 0.2), #f5f3f4)",
          borderRadius: "10px",
          pointerEvents: "none",
        }}
      />
      <Box
        p="4px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px", marginTop: "70px" }} // Add borderRadius style
      >
        {loading ? (
          <ColorRing />
        ) : (
          <Button
            size="md"
            onClick={() => navigate("/addproduct")}
            sx={{
              width: "50%",
              background:
                "linear-gradient(to right, rgba(100, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
              color: "red",
              "&:hover": { color: "white" },
            }}
          >
            Add-Product
          </Button>
        )}
      </Box>
      <Box
        p="4px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px", marginTop: "70px" }} // Add borderRadius style
      >
        {loading ? (
          <ColorRing />
        ) : (
          <Button
            className="w-100 mb-4"
            size="md"
            onClick={() => navigate("/products")}
            sx={{
              width: "50%",
              background:
                "linear-gradient(to right, rgba(100, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
              color: "red",
              "&:hover": { color: "white" },
            }}
          >
            Products
          </Button>
        )}
      </Box>{" "}
      <Box
        p="4px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px", marginTop: "70px" }} // Add borderRadius style
      >
        {loading ? (
          <ColorRing />
        ) : (
          <Button
            className="w-100 mb-4"
            size="md"
            onClick={() => navigate("/users")}
            sx={{
              width: "50%",
              background:
                "linear-gradient(to right, rgba(100, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
              color: "red",
              "&:hover": { color: "white" },
            }}
          >
            Users
          </Button>
        )}
      </Box>
      <Box
        p="4px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px", marginTop: "70px" }} // Add borderRadius style
      >
        {loading ? (
          <ColorRing />
        ) : (
          <Button
            className="w-100 mb-4"
            size="md"
            onClick={() => navigate("/orders")}
            sx={{
              width: "50%",
              background:
                "linear-gradient(to right, rgba(100, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
              color: "red",
              "&:hover": { color: "white" },
            }}
          >
            Orders
          </Button>
        )}
      </Box>
      <Box
        p="4px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="75%"
        backgroundColor="#F2F2F2"
        sx={{ borderRadius: "5px", marginTop: "70px" }} // Add borderRadius style
      >
        {loading ? (
          <ColorRing />
        ) : (
          <Button
            className="w-100 mb-4"
            size="md"
            onClick={() => navigate("/newsletter")}
            sx={{
              width: "50%",
              background:
                "linear-gradient(to right, rgba(100, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
              color: "red",
              "&:hover": { color: "white" },
            }}
          >
            Newsletter
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Settings;
