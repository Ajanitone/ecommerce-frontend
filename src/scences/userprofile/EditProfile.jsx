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

import Logo from "../../logo/TRI_Logo_Herbs_RedBlack+Face.png";
import { HerbContext } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
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
const EditProfile = ({isDarkMode}) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.user._id) navigate("/");
  }, []);

  useEffect(() => {
    if (state.user._id) {
      setData(state.user);
    } else {
      async function getData() {
        let data = await axios.get(
          baseUrl + "/users/profile/" + state.user._id,
          {
            withCredentials: true,
          }
        );
        console.log(data.data);
        setData(data.data.user);
      }
      getData();
    }
  }, []);

  const handleImageChange = (e, setFiledata) => {
    setFiledata({
      url: URL.createObjectURL(e.target.files[0]), // Use e.target instead of e.currentTarget
      file: e.target.files[0], // Use e.target instead of e.currentTarget
    });
  };

  const [fileData, setFiledata] = useState({
    url: "",
    file: null,
  });

  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    street: "",
    zipCode: "",
    city: "",
    country: "",
    image: fileData.file,
    isAdmin: false, // Add the isAdmin field
  });
  const navigate = useNavigate();

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

  const handleSave = async () => {
    setLoading(true);
    const formdata = new FormData();

    formdata.set("isAdmin", data.isAdmin);

    formdata.set("username", data.username);
    formdata.set("firstName", data.firstName);
    formdata.set("lastName", data.lastName);
    formdata.set("street", data.street);
    formdata.set("city", data.city);
    formdata.set("zipCode", data.zipCode);
    formdata.set("country", data.country);
    if (fileData.file) formdata.set("image", fileData.file, "profileImage");

    const config = {
      headers: { "content-type": "multipart/form-data" },
      withCredentials: true,
    };

    try {
      const response = await axios.put(
        baseUrl + "/users/profile",
        formdata,
        config
      );
      console.log("handleSave~ response", response);

      if (response.data.success) {
        setLoading(false);

        dispatchState({
          type: "saveProfile",
          payload: response.data.user,
        });
        navigate("/userprofile");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  // Conditionally render the isAdmin field based on user role
  const renderAdminField = () => {
    if (state.user.isAdmin) {
      return (
        <Checkbox
          label="admin?"
          placeholder="admin"
          id="form1"
          type="checkbox"
          name="isAdmin"
          checked={data.isAdmin}
          onChange={handleChange}
          title="admin?"
        />
      );
    }
    return null; // Render nothing if the user is not an admin
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
        <Typography variant="h3">Edit</Typography>
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
            placeholder="Firstname"
            id="form1"
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            title="firstname"
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
            placeholder="Lastname"
            id="form1"
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            title="lastname"
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
            placeholder="Street"
            id="form1"
            type="text"
            name="street"
            value={data.street}
            onChange={handleChange}
            title="streets"
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
            placeholder="ZipCode"
            id="form1"
            type="text"
            name="zipCode"
            value={data.zipCode}
            onChange={handleChange}
            title="zipcodes"
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
            placeholder="City"
            id="form1"
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            title="city"
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
            placeholder="Country"
            id="form1"
            type="text"
            name="country"
            value={data.country}
            onChange={handleChange}
            title="country"
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
              src={fileData.url || state.user.profileImage || profilePicture}
              alt="Avatar"
              className="my-5  rounded-circle hover-opacity-75 cursor-pointer"
              style={{
    width: "100px",
    aspectRatio: "calc(1 + var(--f))",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "50%",
    "--f": "0.1",
    "--r": "10px",
    "--_f": "calc(100% * var(--f) / (1 + var(--f)))",
    "--_a": "calc(90deg * var(--f))",
    clipPath: "inset(0 var(--_f) 0 0 round var(--r))",
    transform: "perspective(400px) var(--_t, rotateY(var(--_a)))",
    transition: "0.5s",
  }}
  onMouseEnter={(e) => {
    e.target.style.clipPath = "inset(0 0 0 var(--_f)) round var(--r)";
    e.target.style.setProperty(
      "--_t",
      "translateX(calc(-1 * var(--_f))) rotateY(calc(-1 * var(--_a)))"
    );
  }}
  onMouseLeave={(e) => {
    e.target.style.clipPath = "inset(0 var(--_f) 0 0) round var(--r)";
    e.target.style.setProperty("--_t", "");
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
          <Checkbox
            label="admin?"
            placeholder="admin"
            id="form1"
            type="checkbox"
            name="isAdmin"
            checked={data.isAdmin}
            onChange={handleChange}
            title="admin?"
          />
          {renderAdminField()}
          <Divider sx={{ height: 28, m: 1 }} orientation="vertical" flexItem />
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
              Save
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
