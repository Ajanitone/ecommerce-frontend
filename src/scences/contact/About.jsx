import { Typography, Box } from "@mui/material";
import React from "react";
import "./About.css";
import { shades } from "../../theme";
import ScrollTop from "../../components/ScrollTop";

const About = ({ isDarkMode }) => {
  return (
    <div>
       <ScrollTop isDarkMode={isDarkMode}/>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          gap: 5,
          maxWidth: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          color: "black",
          paddingBottom: 20,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          mb={4}
          sx={{
            color: isDarkMode ? "white" : shades.secondary[500],
            fontFamily: "Barlow, sans-serif",
            fontWeight: 500,
          }}
        >
          About us
        </Typography>

        <Typography
          fullWidth
          sx={{
            color: isDarkMode ? "white" : "black",
          }}
        >
          Hi, Welcome to Trikania Herbs.
          <br />
          Our tea is aspired to detox and cleanse the body of as many toxins as
          possible.
          <br />
          I have personally made this blend inspired from an herbal mixture from
          South America. <br />
          Well I love tea... without my tea in the morning I don`t feel
          balanced. <br /> And what is better than knowing that I can start
          every day with something healthy?
          <br />
          And guess what?
          <br />
          It taste Good.
          <br />
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="about-scroller-container">
            <h1 className="about-h1">
              Tea
              {/* <!-- Scroller Start --> */}
              <Box
                className={`home ${
                  isDarkMode ? "about-scroller1" : "about-scroller"
                }`}
              >
                <span>
                  Healthy
                  <br />
                  Benefits
                  <br />
                  Detox
                </span>
              </Box>
              {/* <!-- Scroller End --> */}
            </h1>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
