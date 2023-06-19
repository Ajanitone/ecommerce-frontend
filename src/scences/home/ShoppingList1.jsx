import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item2 from "../../components/Item2";
import { setItems } from "../../state";
import { HerbContext } from "../../context/Context";
import axios from "axios";
const ShoppingList1 = ({ isDarkMode }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  console.log("items", items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(baseUrl + "/products/listProduct");

      console.log("getData", response);

      if (response.data.success) {
        dispatchState({
          type: "loadProducts",
          payload: response.data.products,
        });
        dispatch(setItems(response.data.products));
      }
    }
    getData();
  }, []);

  const TeaItems = items.filter((item) => item.category === "Tea");
  const SpicesItems = items.filter((item) => item.category === "Spices");
  const PepperSauceItems = items.filter(
    (item) => item.category === "Pepper-sauce"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{ m: "25px", "&.MuiTabs-flexContainer": { flexWrap: "wrap" } }}
      >
        <Tab
          label="ALL"
          value="all"
          sx={!isDarkMode ? { color: "red" } : { color: "green" }}
        />
        <Tab
          label="Tea"
          value="Tea"
          sx={!isDarkMode ? { color: "red" } : { color: "green" }}
        />
        <Tab
          label="Spices"
          value="Spices"
          sx={!isDarkMode ? { color: "red" } : { color: "green" }}
        />
        <Tab
          label="Pepper-sauce"
          value="PepperSauce"
          sx={!isDarkMode ? { color: "red" } : { color: "green" }}
        />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill,300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item2 item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Tea" &&
          TeaItems.map((item) => (
            <Item2 item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Spices" &&
          SpicesItems.map((item) => (
            <Item2 item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "PepperSauce" &&
          PepperSauceItems.map((item) => (
            <Item2 item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList1;
