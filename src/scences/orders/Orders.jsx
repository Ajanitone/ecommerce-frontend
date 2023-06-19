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
import Item3 from "../../components/Item3";
import { ProductionQuantityLimits } from "@mui/icons-material";

const Orders = () => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  console.log("orders", state.orders);
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
      const response = await axios.get(baseUrl + "/orders/list");

      console.log("getData", response);

      if (response.data.success) {
        dispatchState({
          type: "loadOrders",
          payload: response.data.orders,
        });
      }
    }
    getData();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    const response = await axios.delete(baseUrl + "/orders/delete/" + id, {
      withCredentials: true,
    });
    console.log("^handleDelete ~ response", response);

    if (response.data.success)
      dispatchState({
        type: "removeOrder",
        payload: id,
      });
    return;
  };

  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, []);

  return (
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
      {state.orders &&
        state?.orders?.map((item) => (
          <Item3
            item={item}
            width={300}
            handleDelete={handleDelete}
            id={item._id}
          />
        ))}
    </Box>
  );
};

export default Orders;
