import React, { useState } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import ThemeButton from "../../components/ThemeButton";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        padding="10px"
        borderRadius="10px"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer", color: "black" } }}
          color={!isDarkMode ? shades.secondary[500] : undefined}
          className={`home ${isDarkMode ? "dark-mode" : ""}`}
        >
          TrikaniaHerbs
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: isDarkMode ? "white" : "black" }}>
            <SearchOutlined />
          </IconButton>

          <IconButton sx={{ color: isDarkMode ? "white" : "black" }}>
            <PersonOutline />
          </IconButton>

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "&.MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              sx={{ color: isDarkMode ? "white" : "black" }}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          <IconButton sx={{ color: isDarkMode ? "white" : "black" }}>
            <MenuOutlined />
          </IconButton>
          <ThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
