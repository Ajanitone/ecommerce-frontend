import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";
import "./Item1.css"
const Item1 = ({ item, width, handleDelete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img className="image"
          alt={item.name}
          src={item.profileImage}
          width="300px"
          height="400px"
          onClick={() => navigate(`/item/${item._id}`)}
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
          }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          width="100%"
          padding="0 25%"
          position="absolute"
          bottom="10%"
          left="0"
        >
          <Box display="flex" justifyContent="space-between">
            {/* BUTTON */}
            <Button
              onClick={() => handleDelete(`${item._id}`)}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                "&:hover": { backgroundColor: "red" },
              }}
            >
              Delete
            </Button>
            <Button
              onClick={() => navigate(`/edit-product/${item._id}`)}
              sx={{
                backgroundColor: shades.primary[300],
                color: "white",
                "&:hover": { color: "red" },
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt="3px">
        <Typography>{item.name}</Typography>
        <Typography>{item.description}</Typography>
        <Typography fontWeight="bold">{item.price} €</Typography>
      </Box>
    </Box>
  );
};

export default Item1;
