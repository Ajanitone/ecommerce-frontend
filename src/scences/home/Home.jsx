import React, { useState } from "react";

import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
      <MainCarousel isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ShoppingList isDarkMode={isDarkMode} />
      <Subscribe isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
