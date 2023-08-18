import React, { useState, useContext, useEffect, useRef } from "react";
import { Box, Button, Popover } from "@mui/material";

import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

import axios from "axios";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { styled } from "@mui/system";
import Input from "../../components/Input";
import ScrollTop from "../../components/ScrollTop";

const Newsletter = ({ isDarkMode }) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  console.log("newsletter", state.newsletters);
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };

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
    const response = await axios.delete(baseUrl + "/newsletters/delete/" + id, {
      withCredentials: true,
    });
    console.log("^handleDelete ~ response", response);

    if (response.data.success) {
      setLoading(false);
      dispatchState({
        type: "removeNewsletters",
        payload: id,
      });
      navigate("/newsletter");
      setErrorMessage("Your newsletter was deleted successfully");
    }
    return;
  };

  const handleSave = async (id) => {
    console.log("email,id", email, id);
    setLoading(true);

    const response = await axios.put(
      baseUrl + "/newsletters/edit/" + id,
      { email }, // Send the email in the request body
      { withCredentials: true }
    );

    console.log("handleSave response", response);

    if (response.data.success) {
      setErrorMessage("successful");
      setErrorPopoverOpen(true);
      setLoading(false);
      dispatchState({
        type: "addNewsletter",
        payload: response.data.newsletter,
      });
      navigate("/newsletter");
    }
  };

  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(baseUrl + "/newsletters/list");

      console.log("getData", response);

      if (response.data.success) {
        dispatchState({
          type: "loadNewsletters",
          payload: response.data.newsletters,
        });
      }
    }
    getData();
  }, []);

  function sendEmail() {
    const subject = "Trikania Herb News🌿";
    const recipients = state.newsletters.map((newsletter) => newsletter.email);
    const recipientEmails = recipients.join(","); // Join the recipient emails with commas

    const emailLink = `mailto:${recipientEmails}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(email)}`;
    window.open(emailLink);
  }

  return (
    <Box>
    <ScrollTop isDarkMode={isDarkMode}/>
      <Box>
        {state.newsletters &&
          state.newsletters.map((news) => (
            <Box
              className={`home ${isDarkMode ? "dark-mode" : ""}`}
              padding="10px"
              width="75%"
              margin="100px auto"
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
              ref={errorPopoverAnchorRef}
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
                <Input
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="email"
                  id="form1"
                  type="text"
                  name="email"
                  value={email || news.email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    onClick={() => handleSave(news._id)}
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
                    onClick={() => handleDelete(news._id)}
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
      <Box display="flex" justifyContent="center">
        <Button
          sx={{
            background: "linear-gradient(to right, #e19aac, #fbfafa) ",
            marginTop: "3px",
            marginBottom: "3px",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 500,
            color: "black",
            "&:hover": {
              background:
                "linear-gradient(to right, rgba(12, 12, 12, 0.8), #f5f3f4)",
              color: "red",
            },
          }}
          variant="contained"
          size="large"
          type="submit"
          onClick={sendEmail}
        >
          Send Newsletter
        </Button>
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
  );
};

export default Newsletter;
