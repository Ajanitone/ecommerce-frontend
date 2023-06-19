import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PopOver from "../../components/popover/PopOver";
import { Box, Typography, InputBase, Button } from "@mui/material";
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
const ForgotPass = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [data, setData] = useState({
    emailOrUsername: "",
  });
  const [loading, setLoading] = useState(false);

  const submitButtonRef = React.createRef();
  const handleClick = (event) => {
    if (event && event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  React.useEffect(() => {
    handleClick({ currentTarget: submitButtonRef.current });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await axios.post(baseUrl + "/users/forgotpass", data);
    console.log(" handleSubmit-forgotpass ~ response:", response);

    if (response.data.success) setSuccess(true);
    handleClick({ currentTarget: submitButtonRef.current });
    setLoading(false);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // ---POPUP----DROPDOWN-----MENUState--
  const [anchorEl, setAnchorEl] = useState(null);
  const [staticModal, setStaticModal] = useState(false);
  const toggleShow = () => setStaticModal(!staticModal);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [success, setSuccess] = useState(false);

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
          placeholder="EmailOrUsername"
          id="form1"
          type="text"
          name="emailOrUsername"
          value={data.emailOrUsername}
          onChange={handleChange}
        />
      </Box>

      {loading ? (
        <ColorRing />
      ) : (
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
          ref={submitButtonRef}
        >
          Submit
        </Button>
      )}

      <Typography mt="10px"> Registered? Login:</Typography>
      <Link to="/login">
        <Button
          sx={{
            width: "75%",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
            marginTop: "10px",
          }}
        >
          Login
        </Button>
      </Link>

      {success && (
        <PopOver
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
          handleClose={handleClose}
          toggleShow={toggleShow}
        />
      )}
    </Box>
  );
};

export default ForgotPass;
