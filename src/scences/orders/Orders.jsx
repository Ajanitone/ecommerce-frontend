import React, { useState, useContext, useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@mui/material";

import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { Popover } from "@mui/material";
import axios from "axios";

import Item3 from "../../components/Item3";
import ScrollTop from "../../components/ScrollTop"

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
/>;
const Orders = ({isDarkMode}) => {
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };
  console.log("orders", state.orders);
  const [isHovered, setIsHovered] = useState(false);

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
      setErrorMessage("Your Order was deleted successfully");
    setErrorPopoverOpen(true);
    dispatchState({
      type: "removeOrder",
      payload: id,
    });
    setLoading(false);
    return;
  };

  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, []);

  return (
    <Box
      padding="10px"
      width="80%"
      margin="100px auto"
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
      ref={errorPopoverAnchorRef}
    >
    <ScrollTop isDarkMode={isDarkMode}/>
      {loading ? (
        <ColorRing />
      ) : (
        <Box>
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
      )}
      <Popover
        open={errorPopoverOpen}
        anchorEl={errorPopoverAnchorRef.current}
        onClose={() => setErrorPopoverOpen(false)}
        anchorReference="anchorEl"
        // anchorPosition={{ top: 100, left: 400 }}
        anchorPosition={
          (errorPopoverAnchorRef.current &&
            getAnchorPosition(errorPopoverAnchorRef.current)) ||
          undefined
        }
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "20px" }}>{errorMessage}</div>
      </Popover>
    </Box>
  );
};

export default Orders;
