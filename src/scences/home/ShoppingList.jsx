import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { setItems } from "../../state";

const ShoppingList = ({ isDarkMode }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  console.log("items", items);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }
  useEffect(() => {
    getItems();
  }, []);

  const TeaItems = items.filter((item) => item.attributes.category === "Tea");
  const SpicesItems = items.filter(
    (item) => item.attributes.category === "Spices"
  );
  const PepperSauceItems = items.filter(
    (item) => item.attributes.category === "Pepper-sauce"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
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
          sx={isDarkMode ? { color: "green" } : { color: "red" }}
        />
        <Tab
          label="Tea"
          value="Tea"
          sx={isDarkMode ? { color: "white" } : { color: "red" }}
        />
        <Tab
          label="Spices"
          value="Spices"
          sx={isDarkMode ? { color: "white" } : { color: "red" }}
        />
        <Tab
          label="Pepper-sauce"
          value="PepperSauce"
          sx={isDarkMode ? { color: "white" } : { color: "red" }}
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
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Tea" &&
          TeaItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "Spices" &&
          SpicesItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "PepperSauce" &&
          PepperSauceItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
