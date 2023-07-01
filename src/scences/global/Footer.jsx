import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Footer = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    palette: { neutral },
  } = useTheme();
  const copyRight = new Date().getFullYear();


  function sendEmail() {
    let email = 'info@trikaniamusic.de';
    let subject = 'Subject of the email';
    let body = 'Body of the email';
    
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }
  return (
    <Box
      mt="70px"
      p="40px 0"
      sx={{
        backgroundColor: isDarkMode ? "black" : "",
      }}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        padding="15px"
        columnGap="clamp(20px,30px,40px)"
        sx={{
          display: isNonMobile ? "flex" : "block",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
          border: "none",
        }}
      >
        <Box width="clamp(20%,30%,40%)">
          <Button onClick={()=> navigate("/")}>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb="30px"
              color={shades.secondary[500]}
            >
              TrikaniaHerbs
            </Typography>
          </Button>
          <div>
            {" "}
            <p>Berlin {copyRight}</p>
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            {/* <Button
              onClick={() => navigate("/about")}
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
              About Us
            </Button> */}

            <Button
              sx={{
                background: "linear-gradient(to right, #e19aac, #fbfafa) ",

                backdropFilter: "blur(30px)",
                marginTop: "3px",
                marginBottom: "3px",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 200,
                color: "black",
                "&:hover": {
                  background:
                    "linear-gradient(to right, rgba(12, 12, 12, 0.8), #f5f3f4)",
                  color: "red",
                  boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
                },
              }}
              variant="contained"
              size="small"
              type="submit"
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
          </Typography>

          <Button
            mt="70px"
            p="40px 0"
            sx={{
              color: isDarkMode ? "white" : "black",
            }} onClick={() => navigate("/terms")}
          >
            Terms And Conditions
          </Button>
          <Button
            sx={{
              color: isDarkMode ? "white" : "black",
            }}  onClick={() => navigate("/privacy")}
          >
            Privacy Policy
          </Button>
        </Box>

        <Box width="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            {/* <Button
              onClick={() => navigate("/contact")}
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
              Contact Us
            </Button> */}

            <Button
              sx={{
                background: "linear-gradient(to right, #e19aac, #fbfafa) ",
                backdropFilter: "blur(30px)",
                marginTop: "3px",
                marginBottom: "3px",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 200,
                color: "black",
                "&:hover": {
                  background:
                    "linear-gradient(to right, rgba(12, 12, 12, 0.8), #f5f3f4)",
                  color: "red",
                  boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
                },
              }}
              variant="contained"
              size="small"
              type="submit"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Typography>
          <Typography mb="30px">
            
          <a
    href="https://www.google.com/maps/search/?api=1&query=Clayallee%20227%2C%2014195%20Berlin"
    target="_blank"
    rel="noopener noreferrer" style={{color:"black",textDecoration:"none"}}
  >
    Clayallee 227<br />14195 Berlin
  </a>
          </Typography>
          <Button onClick={sendEmail}>
            <Typography mb="10px" p="2px">Email: info@trikaniamusic.de</Typography>
          </Button>
          <Button >
            <a href="tel:+4915228503977" style={{color:"black",textDecoration:"none"}}>
               <Typography mb="10px">Tel: (+49)152-28503977</Typography>
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
