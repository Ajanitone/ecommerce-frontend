import React from "react";
import { InputBase, Box } from "@mui/material";
import "./Input.css";
const Input = ({ name, value, id, type, placeholder }) => {
  return (
    <Box class="input_wrapper input-base">
      <InputBase
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
      />
      <span></span>
    </Box>
  );
};

export default Input;
