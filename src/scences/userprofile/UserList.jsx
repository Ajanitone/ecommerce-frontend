import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, IconButton, InputBase, Button } from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { HerbContext } from "../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import axios from "axios";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { styled } from "@mui/system";
import Input from "../../components/Input";

const UserProfile = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const id = state.user._id;
  console.log("users", state.users);
  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS
  const HoverIcon = styled(EditNoteOutlinedIcon)`
    font-size: 15px;
    transition: color 0.3s; /* Add a transition for a smooth effect */

    &:hover {
      color: red; /* Set the desired color on hover */
    }
  `;
  const HoverIcon1 = styled(DeleteSweepOutlinedIcon)`
    font-size: 15px;
    transition: color 0.3s; /* Add a transition for a smooth effect */

    &:hover {
      color: red; /* Set the desired color on hover */
    }
  `;
  const backgroundColor = isDarkMode ? "#000000" : "rgba(242, 38, 19, 0.4)";

  const navigate = useNavigate();
  const handleDelete = async (id) => {
    setLoading(true);
    const response = await axios.delete(baseUrl + "/users/delete/" + id, {
      withCredentials: true,
    });
    console.log("^handleDelete ~ response", response);

    if (response.data.success) setLoading(false);
    dispatchState({
      type: "logout",
      // payload: id,
    });
    alert("Your account was deleted successfully");
    return;
  };

  useEffect(() => {
    if (!state.user._id) navigate("/");
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(baseUrl + "/users/list", {
        withCredentials: true,
      });

      console.log("userList getData", response);

      // setUsers(response.data.users);
      dispatchState({
        type: "loadUsers",
        payload: response.data.users,
      });
    }
    getData();
  }, []);
  return (
    <Box>
      {state.users &&
        state.users.map((user) => (
          <Box
            className={`home ${isDarkMode ? "dark-mode" : ""}`}
            padding="10px"
            width="75%"
            margin="80px auto"
            textAlign="center"
            display="flex"
            sx={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
              backgroundColor: backgroundColor,
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
              border: "none",
              position: "relative",
              overflow: "hidden",
            }}
            position="relative"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
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

            <Box title="image">
              <img
                src={user.profileImage || profilePicture}
                alt="profile"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              title="name"
              p="2px 4px"
              m="15px auto"
              gap="10px"
              display="flex"
              alignItems="center"
              width="100%"
              backgroundColor="#F2F2F2"
              sx={{ borderRadius: "5px" }}
            >
              <InputBase
                placeholder="Firstname"
                id="form1"
                type="text"
                name="firstName"
                value={user.firstName}
              />{" "}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Lastname"
                id="form1"
                type="text"
                name="lastName"
                value={user.lastName}
              />
            </Box>

            <Box
              title="username"
              p="2px 4px"
              m="15px auto"
              display="flex"
              alignItems="center"
              width="50%"
              backgroundColor="#F2F2F2"
              sx={{ borderRadius: "5px" }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Username"
                id="form1"
                type="text"
                name="username"
                value={user.username}
              />
            </Box>
            <Box
              title="email"
              p="2px 4px"
              m="15px auto"
              display="flex"
              alignItems="center"
              width="50%"
              backgroundColor="#F2F2F2"
              sx={{ borderRadius: "5px" }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="email"
                id="form1"
                type="text"
                name="username"
                value={user.email}
              />
            </Box>
            <Box
              title="phone"
              p="2px 4px"
              m="15px auto"
              display="flex"
              alignItems="center"
              width="50%"
              backgroundColor="#F2F2F2"
              sx={{ borderRadius: "5px" }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="phone"
                id="form1"
                type="text"
                name="username"
                value={user.phone}
              />
            </Box>

            <Box
              display={isHovered ? "block" : "none"}
              // position="absolute"
              // bottom="10%"
              // left="0"
              width="10%"
              padding="2px 5%"
            >
              {loading ? (
                <ColorRing
                  visible={true}
                  height={80}
                  width={80}
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              ) : (
                <Button
                  title="edit-user"
                  size="md"
                  onClick={() => {
                    navigate("/editprofile");
                  }}
                  sx={{
                    width: "75%",
                    background:
                      "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
                    marginTop: "10px",
                    "&:hover": {
                      background:
                        "linear-gradient(to right, rgba(12, 12, 12, 0.8), #f5f3f4)",
                    },
                  }}
                >
                  <HoverIcon />
                </Button>
              )}
            </Box>
            <Box
              display={isHovered ? "block" : "none"}
              width="10%"
              padding="2px 5%"
            >
              {loading ? (
                <ColorRing
                  visible={true}
                  height={80}
                  width={80}
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              ) : <div className="d-flex justify-content-between mx-4 mb-4">
                  <p>Are you sure you want to delete your account?</p>
                </div> ? (
                <Button
                  title="delete-user"
                  size="md"
                  onClick={() => handleDelete(id)}
                  sx={{
                    width: "75%",
                    background:
                      "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
                    marginTop: "10px",
                    "&:hover": {
                      background:
                        "linear-gradient(to right, rgba(12, 12, 12, 0.8), #f5f3f4)",
                    },
                  }}
                >
                  <HoverIcon1 />
                </Button>
              ) : (
                ""
              )}
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default UserProfile;
