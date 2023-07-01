import React from "react";
import Item4 from "../../components/Item4";
import ScrollTop from "../../components/ScrollTop";
const HerbInfo = ({isDarkMode}) => {
  return (
    <div>
      HerbInfo
      <Item4 />
      <ScrollTop isDarkMode={isDarkMode}/>
    </div>
  );
};

export default HerbInfo;
