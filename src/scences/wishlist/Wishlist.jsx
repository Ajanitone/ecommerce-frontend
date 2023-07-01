import { useContext, useEffect, useState } from "react";
import ScrollTop from "../../components/ScrollTop";
import axios from "axios";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { Box, Typography, useTheme, Button } from "@mui/material";
import Item1 from "../../components/Item1";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
function Wishlist() {
  const { state, dispatchState } = useContext(HerbContext);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      if (!state.user._id) {
        // If searchValue is empty or contains only whitespace, return or display an error message
        return;
      }
      const response = await axios.get(
        baseUrl + "/users/wishlist/list/" + state.user._id,
        {
          withCredentials: true,
        }
      );
      console.log("🚀 ~ getData ~ response", response);

      if (response.data.success) setWishlist([...response.data.products]);
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    if (!state.user._id)
      return alert("You must be logged in to use the wishlist feature");

    const response = await axios.post(
      baseUrl + "/users/wishlist/delete",
      {
        user: state.user._id,
        product: id,
      },
      { withCredentials: true }
    );
    console.log("🚀 ~ handleWishlist ~ response", response);

    if (response.data.success) {
      dispatchState({
        type: "deleteFromWishlist",
        payload: response.data.wishlist,
      });

      const oldData = wishlist.filter((item) => item._id !== id);

      setWishlist([...oldData]);
    }
  };
  useEffect(() => {
    if (!state.user._id) navigate("/");
  }, []);

  return (
    <Box>
    <ScrollTop/>
      <Box
        padding="10px"
        width="100%"
        margin="80px auto"
        textAlign="center"
        sx={{
          background: "hsla(0, 0%, 100%, 0.55)",
          backdropFilter: "blur(30px)",
          // backgroundColor: "rgba(201, 38, 19, 0.1)",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
          border: "none",
          // backgroundImage: "linear-gradient(to right, #f8f9fa, #ced4da)",
          position: "relative", // Add position relative
          overflow: "hidden", // Add overflow hidden
        }}
      >
        <Box>
          <Typography
            variant="h5"
            mb="15px"
            sx={{
              color: "red",
              cursor: "pointer",
              "&:hover": { color: "black" },
            }}
          >
            Wishlist
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          {wishlist?.length ? (
            wishlist?.map((item) => (
              <Box display="flex" justifyContent="space-between" key={item._id}>
                <Item1 item={item} width={300} />
                <Box
                  // position="absolute"
                  // top="12%"
                  // left="0"
                  title="delete"
                  width="30%"
                >
                  <ClearOutlinedIcon
                    sx={{
                      color: "black",
                      cursor: "pointer",
                      border: "1px solid black",
                      borderRadius: "50%",
                      "&:hover": { color: "red", border: "1px solid red" },
                    }}
                    onClick={() => handleDelete(item._id)}
                  />
                </Box>
              </Box>
            ))
          ) : (
            <Box>
              <Typography variant="h7">Your wishlist is empty</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Wishlist;
