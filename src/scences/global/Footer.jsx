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
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            TrikaniaHerbs
          </Typography>
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
            }}
          >
            Terms And Conditions
          </Button>
          <Button
            sx={{
              color: isDarkMode ? "white" : "black",
            }}
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
            {" "}
            Clayallee 227<br></br>14195 Berlin
          </Typography>
          <Typography mb="30px">Email: info@trikaniamusic.de</Typography>
          <Typography mb="30px"> (+49)152-28503977</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
