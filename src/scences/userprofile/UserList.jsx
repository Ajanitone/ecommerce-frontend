import React, { useState, useContext, useEffect,useRef } from "react";
import { Box,  InputBase, Button ,Popover} from "@mui/material";
import { HerbContext } from "../../context/Context";
import { useNavigate,  } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import profilePicture from "../../assets/angele-kamp-kcvRHtAyuig-unsplash.jpg";
import axios from "axios";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { styled } from "@mui/system";
import ScrollTop from "../../components/ScrollTop"

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



const UserList = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const id = state.user._id;
  console.log("users", state.users);
  const [isHovered, setIsHovered] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };

  const handleEdit = (user) => {
    setEditedUser(user);
  };

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    setLoading(true);
    const response = await axios.delete(baseUrl + "/users/delete/" + id, {
      withCredentials: true,
    });
    console.log("^handleDelete ~ response", response);

    if (response.data.success) setLoading(false);
    setErrorMessage("User deleted  ");
    setErrorPopoverOpen(true); // Open the error Popover
    dispatchState({
      type: "removeUser",
      payload: id,
    });
  
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
      <ScrollTop isDarkMode={isDarkMode}/>
      <Box>
        {state.users &&
          state.users.map((user) => (
            <Box
              key={user._id}
              className={`home ${isDarkMode ? "dark-mode" : ""}`}
              padding="10px"
              width="75%"
              margin="100px auto"
              textAlign="center"
              display="flex"
              sx={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
                backgroundColor: isDarkMode
                  ? "#000000"
                  : "rgba(242, 38, 19, 0.4)",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
                border: "none",
                position: "relative",
                overflow: "hidden",
              }}
              position="relative"
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)} ref={errorPopoverAnchorRef}
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
                  value={editedUser.firstName || user.firstName}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      firstName: e.target.value,
                    })
                  }
                />
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Lastname"
                  id="form1"
                  type="text"
                  name="lastName"
                  value={editedUser.lastName || user.lastName}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      lastName: e.target.value,
                    })
                  }
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
                  value={editedUser.username || user.username}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      email: e.target.value,
                    })
                  }
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
                  value={editedUser.email || user.email}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      email: e.target.value,
                    })
                  }
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
                  value={editedUser.phone || user.phone}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      phone: e.target.value,
                    })
                  }
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
                  ""
                )}
                {user._id !== id && (
                  <Button
                    title="edit-user"
                    size="md"
                    onClick={() => {
                      handleEdit(user);
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
                ) : (
                  ""
                )}
                {user._id !== id && (
                  <Button
                    title="delete-user"
                    size="md"
                    onClick={() => handleDelete(user._id)}
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
          ))}
      </Box>
    </Box>
  );
};

export default UserList;
