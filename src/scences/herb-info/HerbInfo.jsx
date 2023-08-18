import React from "react";
import Item4 from "../../components/Item4";
import ScrollTop from "../../components/ScrollTop";
import { useMediaQuery} from "@mui/material";
const HerbInfo = ({isDarkMode}) => {


  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <div style={{display:isNonMobile ? "": "flex",justifyContent:isNonMobile ? "": "center", }}>
      HerbInfo
      <Item4 />
      <ScrollTop isDarkMode={isDarkMode}/>
    </div>
  );
};

export default HerbInfo;
