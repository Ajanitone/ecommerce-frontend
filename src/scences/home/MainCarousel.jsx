import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the dark mode CSS file
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// import all image from assets folder

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);
const MainCarousel = ({ isDarkMode, toggleTheme }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      interval={9000}
      stopOnHover={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={() => {
            onClickHandler();
            // toggleTheme();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            padding: "5px",
            zIndex: "10",
            color: isDarkMode ? "red" : "white",
          }}
          className={`home ${isDarkMode ? "dark-mode" : ""}`}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={() => {
            onClickHandler();
            // toggleTheme();
          }}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: isDarkMode ? "red" : "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="5px"
            textAlign="left"
            backgroundColor={isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.4)"}
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0 auto"}
            margin={isNonMobile ? undefined : "0"}
            maxWidth={isNonMobile ? undefined : "240px"}
            className={isDarkMode ? "dark-mode" : ""}
          >
            <Typography
              color={!isDarkMode ? shades.secondary[300] : "red"}
              className={isDarkMode ? "dark-mode" : ""}
            >
              -- NEW ITEMS
            </Typography>
            <Typography fontSize={isNonMobile ? "3rem" : "20px"}>
              Herbs Of Healing
            </Typography>
            <Button>
              <Typography
                fontWeight="bold"
                color={!isDarkMode ? shades.secondary[400] : "red"}
                sx={{ textDecoration: "underline" }}
                className={isDarkMode ? "dark-mode" : ""}
              >
                Discover More
              </Typography>
            </Button>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
