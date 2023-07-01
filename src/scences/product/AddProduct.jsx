import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { HerbContext } from "../../context/Context";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Popover,
} from "@mui/material";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import Logo from "../../logo/TRI_Logo_Herbs_RedBlack+Face.png";
import ScrollTop from "../../components/ScrollTop";

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
/>;

const AddProduct = ({isDarkMode}) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };

  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, []);

  const handleImageChange = (e, setFiledata) => {
    setFiledata({
      url: URL.createObjectURL(e.target.files[0]), // Use e.target instead of e.currentTarget
      file: e.target.files[0], // Use e.target instead of e.currentTarget
    });
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
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",

    image: fileData.file,
  });

  const handleSave = async () => {
    console.log("button pressed");
    setLoading(true);
    const formdata = new FormData();

    formdata.set("name", data.name);
    formdata.set("price", data.price);
    formdata.set("description", data.description);
    formdata.set("category", data.category);
    if (fileData.file) formdata.set("image", fileData.file, "profileImage");

    const config = {
      headers: { "content-type": "multipart/form-data" },
      withCredentials: true,
    };

    const response = await axios.post(
      baseUrl + "/products/addProduct",
      formdata,
      config
    );

    console.log("handleData response", response);

    if (response.data.success) {
      setLoading(false);
      setErrorMessage("Product added");
      setErrorPopoverOpen(true);
      dispatchState({
        type: "addProduct",
        payload: response.data.product,
      });
      navigate("/products");
    }
  };
  return (
    <Box>
     <ScrollTop isDarkMode={isDarkMode}/>
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
        <IconButton>
          <img
            src={Logo}
            alt="web-logo"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
        </IconButton>
        <Typography variant="h3">Add-Product</Typography>
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
            placeholder="name"
            id="form1"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            title="product-name"
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
            placeholder="price"
            id="form1"
            type="text"
            name="price"
            value={data.price}
            onChange={handleChange}
            title="price"
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
            placeholder="category"
            id="form1"
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
            title="category"
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
            placeholder="description"
            id="form1"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            title="streets"
          />
        </Box>
        <Box
          p="2px 2px"
          m="5px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          justifyContent="center"
          sx={{ borderRadius: "5px" }} // Add borderRadius style
        >
          <label htmlFor="fileInput" className="file-input-label">
            <img
              src={fileData.url || profilePicture}
              alt="Avatar"
              className="my-5  rounded-circle hover-opacity-75 cursor-pointer"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "50%",
                boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
                marginTop: "10px",
              }}
              title="image"
            />
            <InputBase
              id="fileInput"
              type="file"
              className="file-input"
              onChange={(e) => handleImageChange(e, setFiledata)}
              title="file"
            />
          </label>
        </Box>
        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          sx={{ borderRadius: "5px" }}
          justifyContent="center"
        >
          {loading ? (
            <ColorRing />
          ) : (
            <Button
              className="w-100 mb-4"
              size="md"
              onClick={handleSave}
              sx={{
                width: "50%",
                background:
                  "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
                marginTop: "10px",
              }}
            >
              Add
            </Button>
          )}
        </Box>
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
    </Box>
  );
};

export default AddProduct;
