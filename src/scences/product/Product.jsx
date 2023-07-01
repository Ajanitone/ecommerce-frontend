import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  useMediaQuery,
} from "@mui/material";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { HerbContext } from "../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

import axios from "axios";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { styled } from "@mui/system";
import Item1 from "../../components/Item1";
import { ProductionQuantityLimits } from "@mui/icons-material";
import ScrollTop from "../../components/ScrollTop";
const Product = ({isDarkMode}) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  console.log("products", state.products);
  const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS
  const HoverIcon = styled(EditNoteOutlinedIcon)`
    font-size: 30px;
    transition: color 0.3s; /* Add a transition for a smooth effect */

    &:hover {
      color: red; /* Set the desired color on hover */
    }
  `;
  const HoverIcon1 = styled(DeleteSweepOutlinedIcon)`
    font-size: 30px;
    transition: color 0.3s; /* Add a transition for a smooth effect */

    &:hover {
      color: red; /* Set the desired color on hover */
    }
  `;

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(baseUrl + "/products/listProduct");

      console.log("getData", response);

      if (response.data.success) {
        dispatchState({
          type: "loadProducts",
          payload: response.data.products,
        });
      }
    }
    getData();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    const response = await axios.delete(
      baseUrl + "/products/deleteProduct/" + id,
      {
        withCredentials: true,
      }
    );
    console.log("^handleDelete ~ response", response);

    if (response.data.success)
      dispatchState({
        type: "removeProduct",
        payload: id,
      });
    return;
  };

  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, []);

  return (
    <Box>
      <ScrollTop isDarkMode={isDarkMode}/>
      <Box
        padding="10px"
        width="80%"
        margin="80px auto"
        textAlign="center"
        sx={{
          background: "hsla(1, 0%, 100%, 0.55)",
          backdropFilter: "blur(30px)",
          borderRadius: "5px",
          display: isNonMobile ? "flex" : "block",
          border: "none",
          position: "relative",
          overflow: "hidden",
          padding: "15px 0",
        }}
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        display="flex"
      >
      
        {state.products.map((item) => (
          <Item1
            item={item}
            width={600}
            handleDelete={handleDelete}
            id={item._id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Product;
