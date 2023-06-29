import React, { useState, useContext, useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import axios from "axios";
import Item2 from "../../components/Item2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import { HerbContext } from "../../context/Context";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const ItemDetails2 = () => {
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const { state, dispatchState } = useContext(HerbContext);
  const dispatch = useDispatch();
  console.log("products", state.products);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "/products/listProduct"
      );

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

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        baseUrl + "/products/findone?_id=" + itemId,
        {
          withCredentials: true,
        }
      );
      console.log("🚀 ~ getData ~ response", response);

      if (response.data.success) {
        // if (response.data.product.image) {
        //   response.data.product.image =
        //     "/images/" + response.data.product.image;
        // }

        setData(response.data.product);
      }
    }

    getData();
  }, []);
  console.log("data", data);

  const handleAddToWishlist = async () => {
    if (!state.user._id) {
      alert("You must log in to use the wishlist feature");
      return;
    }

    const response = await axios.post(
      baseUrl + "/users/wishlist/add",
      {
        user: state.user._id,
        product: itemId,
      },
      { withCredentials: true }
    );
    console.log("handleAddToWishlist ~ response", response);

    if (response.data.success)
      dispatchState({
        type: "addToWishlist",
        payload: itemId,
      });
  };

  const handleRemoveFromWishlist = async () => {
    if (!state.user._id)
      return alert("You must be logged in to use the wishlist feature");

    const response = await axios.post(
      baseUrl + "/users/wishlist/delete",
      {
        user: state.user._id,
        product: itemId,
      },
      { withCredentials: true }
    );
    console.log("🚀 ~ handleWishlist ~ response", response);

    if (response.data.success)
      dispatchState({
        type: "deleteFromWishlist",
        payload: response.data.wishlist,
      });
  };
  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={data?.name}
            width="100%"
            height="100%"
            src={`${data?.profileImage}`}
            style={{
              cursor: "pointer",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            {/* <Box>Home/Item</Box>
            <Box>Prev Next</Box> */}
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{data?.name}</Typography>
            <Typography>{data?.price}€</Typography>
            <Typography sx={{ mt: "20px" }}>
              {data.product?.description}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
                "&:hover": { color: "red" },
              }}
              onClick={() => dispatch(addToCart({ item: { ...data, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box m="20px 0 5px 0" display="flex">
              <Box>
                {state.user?.wishlist?.includes(itemId) ? (
                  <FavoriteOutlinedIcon
                    onClick={handleRemoveFromWishlist}
                    sx={{ color: "red" }}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    sx={{ color: "red" }}
                    onClick={handleAddToWishlist}
                  />
                )}
              </Box>
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {data?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && <div>{data?.description}</div>}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {state.products.slice(0, 4).map((item, i) => (
            <Item2 key={`${item.name}-${i}`} item={item} width={300} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails2;
