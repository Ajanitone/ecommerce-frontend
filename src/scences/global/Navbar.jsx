import React, { useState, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  IconButton,
  Typography,
  InputBase,
  useMediaQuery,
  Popover,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import ThemeButton from "../../components/ThemeButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { HerbContext } from "../../context/Context";
import axios from "axios";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ColorRing } from "react-loader-spinner";

import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import MeetingRoomSharpIcon from "@mui/icons-material/MeetingRoomSharp";
import PopOver2 from "../../components/popover/PopOver2";
import Logo from "../../logo/TRI_Logo_Herbs_RedBlack+Face.png";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { dispatchState, state } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const wishList = state.user.wishlist;
  // ---POPUP----DROPDOWN-----MENUState--
  const [success, setSuccess] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [staticModal, setStaticModal] = useState(false);
  const toggleShow = () => setStaticModal(!staticModal);
  const open = Boolean(anchorEl);
  const [searchValue, setSearchValue] = useState({name:"",});
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };
  const handleSearch = async () => {
    if (searchValue.name.trim() === "") {
      // If searchValue is empty or contains only whitespace, return or display an error message
      return;
    }
    setLoading(true);
    const response = await axios.get(baseUrl + `/products/searchProduct/${searchValue.name.trim()}`, {
      withCredentials: true,
    });
  
    console.log("search getData", response);
  
    if (response.data.success) {
      dispatchState({
        type: "loadProducts",
        payload: response.data.products,
      });
    }
    navigate(`/search-product`);
    setSearchValue({ name: "" });
    setLoading(false);
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submitButtonRef = React.createRef();

  const handleClick = () => {
    setAnchorEl(submitButtonRef.current);
  };
  React.useEffect(() => {
    handleClick();
  }, []);

  const handleLogOut = async () => {
    setLoading(true);
    const response = await axios.get(baseUrl + "/users/logout", {
      withCredentials: true,
    });

    if (response.status === 200) {
      // alert("You are logged out");
      setErrorMessage("Logout  successfully");
      setErrorPopoverOpen(true); // Open the error Popover

      setSuccess(true);
      handleClick();
      dispatchState({
        type: "logout",
      });
      setLoading(false);
    } else {
      console.log("error logging in");
    }
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
      sx={{
        "&:hover": { cursor: "pointer", color: shades.secondary[500] },
        display: isNonMobile ? "flex" : "block",
      }}
      ref={errorPopoverAnchorRef}
    >
      <Box
        sx={{
          "&:hover": { cursor: "pointer", color: shades.secondary[500] },
          display: isNonMobile ? "block" : "none",
        }}
        color={!isDarkMode ? shades.primary[500] : undefined}
        title="username"
      >
        <Typography variant="h7">Hi, {state.user.username}</Typography>
      </Box>
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
          display="flex"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": { cursor: "pointer", color: shades.primary[300] },
          }}
          color={!isDarkMode ? shades.secondary[500] : shades.primary[100]}
          title="trikania-herbs"
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "5px",
            }}
          />
          <Typography sx={{ display: isNonMobile ? "block" : "none" }}>
            TrikaniaHerbs
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* <IconButton
            onClick={() => navigate("/search-product")}
            sx={{ color: isDarkMode ? "white" : "black" }}
          >
            <SearchOutlined />
          </IconButton> */}
          <IconButton
            sx={{
              color: isDarkMode ? "white" : "black",
              "&:hover": {
                backgroundColor: shades.secondary[500],
                color: shades.primary[100],
              },
            }}
            onClick={() => navigate("/userprofile")}
            title="user-profile"
          >
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
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": {
                  backgroundColor: shades.secondary[500],
                  color: shades.primary[100],
                },
              }}
              onClick={() => dispatch(setIsCartOpen({}))}
              title="cart"
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <Badge
            badgeContent={wishList?.length}
            color="secondary"
            invisible={wishList?.length === 0}
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
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": {
                  backgroundColor: shades.secondary[500],
                  color: shades.primary[100],
                },
              }}
              onClick={() => navigate("/wishlist")}
              title="wishlist"
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </Badge>
          <IconButton
            sx={{
              color: isDarkMode ? "white" : "black",
              "&:hover": {
                backgroundColor: shades.secondary[500],
                color: shades.primary[100],
              },
            }}
            onClick={() => navigate("/register")}
            title="register"
          >
            <AppRegistrationIcon />
          </IconButton>

          {state.user._id ? (
            <IconButton
              title="logout"
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": {
                  backgroundColor: shades.secondary[500],
                  color: shades.primary[100],
                },
              }}
              onClick={handleLogOut}
              ref={submitButtonRef}
            >
              <MeetingRoomSharpIcon />
            </IconButton>
          ) : (
            <IconButton
              title="login"
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": {
                  backgroundColor: shades.secondary[500],
                  color: shades.primary[100],
                },
              }}
              onClick={() => navigate("/login")}
            >
              <ExitToAppSharpIcon />
            </IconButton>
          )}

          <ThemeButton
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            title="toggle-theme"
          />
          {state.user.isAdmin ? (
            <IconButton
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": {
                  backgroundColor: shades.secondary[500],
                  color: shades.primary[100],
                },
              }}
              onClick={() => navigate("/settings")}
              title="admin"
            >
              <AdminPanelSettingsOutlinedIcon />
            </IconButton>
          ) : (
            ""
          )}
        </Box>
      </Box>
      {/* Search Input */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor="white"
        borderRadius="5px"
        padding="2px 4px"
      >
        <InputBase
          placeholder="Search products"
          value={searchValue.name}
          onChange={(e) => setSearchValue({name:e.target.value})}
          sx={{ ml: 2, flex: 1 }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          title="search"
        />
        <IconButton
          onClick={handleSearch}
          sx={{
            p: "10px",
            color: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? shades.primary[700] : "",
            "&:hover": {
              backgroundColor: shades.secondary[500],
              color: shades.primary[100],
            },
          }}
        >
          <SearchOutlined />
        </IconButton>
      </Box>

      {success && (
        <PopOver2
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
          handleClose={handleClose}
          toggleShow={toggleShow}
        />
      )}
      {success && loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}

      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}

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
  );
};

export default Navbar;
