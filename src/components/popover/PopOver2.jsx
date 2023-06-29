import React from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  IconButton,
  Popover,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
const PopOver2 = ({ open, handleClose, toggleShow, anchorEl }) => {
  return (
    <Box
      sx={{
        width: "10%",
        // background: "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
        margin: "10px auto",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
      }}
    >
      {/* Implement your popover content here */}
      <Popover
        sx={{
          width: "10%",
          background:
            "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
          margin: "10px auto",
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Popover content */}
        <Typography mt="20px" mb="10px">
          "You are successfully logged out!"
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
      </Popover>
    </Box>
  );
};

export default PopOver2;
