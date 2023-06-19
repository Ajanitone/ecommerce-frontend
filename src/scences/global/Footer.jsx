import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button } from "@mui/material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const {
    palette: { neutral },
  } = useTheme();
  const copyRight = new Date().getFullYear();
  return (
    <Box mt="70px" p="40px 0" backgroundColor="#F2F2F2">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
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
            About Us
          </Typography>
          {/* <Typography mb="30px"> Careers</Typography> */}
          {/* <Typography mb="30px"> Our Stores</Typography> */}
          <Button>Terms And Conditions</Button>
          <Button>Privacy Policy</Button>
        </Box>
        {/* <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px"> Help Center</Typography>
          <Typography mb="30px"> Track Your Order</Typography>
          <Typography mb="30px"> Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px"> Returns & Refunds</Typography>
        </Box> */}
        <Box width="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            <Button
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
