import React, { useState, useEffect } from "react";

import MainCarousel from "./MainCarousel";
import ShoppingList1 from "./ShoppingList1";
import Subscribe from "./Subscribe";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
      <MainCarousel isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ShoppingList1 isDarkMode={isDarkMode} />
      <Subscribe isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
