import React from "react";
import { Box, Typography, InputBase, Button, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
const PopOver = ({ open, handleClose, toggleShow }) => {
  return (
    <div>
      {/* Implement your popover content here */}
      {open && (
        <Box
          sx={{
            width: "75%",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
            margin: "10px auto",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {/* Popover content */}
          <Typography mt="5px" mb="10px">
            "We have sent you an email with instructions about how to change
            your password"
          </Typography>

          <Button>
            <IconButton
              sx={{
                fontSize: "10px",
                background:
                  "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
              }}
              onClick={handleClose}
            >
              <CloseIcon
                sx={{
                  fontSize: "10px",
                  color: "black",
                  background:
                    "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
                }}
              />
            </IconButton>
          </Button>
        </Box>
      )}
      {/* <button onClick={toggleShow}>Toggle Popover</button> */}
    </div>
  );
};

export default PopOver;
