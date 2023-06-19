import { useContext } from "react";

import axios from "axios";
import { HerbContext } from "../../context/Context";
import { ColorRing } from "react-loader-spinner";
import { Box, useMediaQuery } from "@mui/material";

import Item1 from "../../components/Item1";
//search function
function SearchResults() {
  //import global Context
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState, search } = useContext(HerbContext);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleDelete = async (id) => {
    console.log("🚀 ~ handleDelete ~ id", id);

    const response = await axios.delete(
      baseUrl + "/products/deleteProduct/" + id
    );
    console.log("🚀 ~ handleDelete ~ response", response);

    if (response.data.success) {
      dispatchState({
        type: "removeProduct",
        payload: id,
      });
    } else {
      if (response.data.errorId === 1) {
        alert("product not found");
      }
    }
  };

  // filter users array
  const results = state.products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(results);
  // map items to a card
  return (
    <Box
      width="100%"
      height="100%"
      padding="10px 20px"
      marginTop="100px"
      display="flex"
      justifyContent="space-evenly"
      sx={{ display: isNonMobile ? "flex" : "block" }}
    >
      {results.map((item) => (
        <Box
          key={item._id}
          width="100%"
          height="100%"
          padding="10px 20px"
          marginTop="100px"
          display="flex"
          justifyContent="space-evenly"
        >
          <Item1 item={item} handleDelete={handleDelete} width={300} />
        </Box>
      ))}
    </Box>
  );
}

export default SearchResults;
