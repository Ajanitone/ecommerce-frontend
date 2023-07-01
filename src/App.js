import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scences/home/Home";
import ItemDetails2 from "./scences/itemDetails/ItemDetails2";
import Checkout from "./scences/checkout/Checkout";
import Confirmation from "./scences/checkout/Confirmation";
import Navbar from "./scences/global/Navbar";
import CartMenu from "./scences/global/CartMenu";
import Footer from "./scences/global/Footer";
import Register from "./scences/register/Register";
import LogIn from "./scences/login/LogIn";
import UserProfile from "./scences/userprofile/UserProfile";
import ContextProvider from "./context/Context";
import EmailConfirm from "./scences/emailconfirm/EmailConfirm";
import ForgotPass from "./scences/forgotpass/ForgotPass";
import ChangePass from "./scences/changepass/ChangePass";
import EditProfile from "./scences/userprofile/EditProfile";
import Settings from "./scences/global/Settings";
import AddProduct from "./scences/product/AddProduct";
import Product from "./scences/product/Product";
import EditProduct from "./scences/product/EditProduct";
import Wishlist from "./scences/wishlist/Wishlist";

import SearchResults from "./scences/product/SearchProduct";
import Contact from "./scences/contact/Contact";
import UserList from "./scences/userprofile/UserList";
import Orders from "./scences/orders/Orders";
import HerbInfo from "./scences/herb-info/HerbInfo";
import Newsletter from "./scences/newsletter/Newsletter";
import Terms from "./scences/terms/Terms";
import Privacy from "./scences/terms/Privacy"

import About from "./scences/contact/About";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  function Example() {
    useEffect(() => {
      document.title = "TrikaniaHerbs 🌿";
    }, []);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <ContextProvider>
        <BrowserRouter>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <ScrollToTop />
          <Example />
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path="item/:itemId"
              element={<ItemDetails2 isDarkMode={isDarkMode} />}
            />
            <Route
              path="checkout"
              element={<Checkout isDarkMode={isDarkMode} />}
            />
            <Route
              path="checkout/success"
              element={<Confirmation isDarkMode={isDarkMode} />}
            />
            <Route
              path="/register"
              element={<Register isDarkMode={isDarkMode} />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route
              path="/userprofile/"
              element={<UserProfile isDarkMode={isDarkMode} />}
            />
            <Route
              path="/emailconfirm/:token"
              element={<EmailConfirm isDarkMode={isDarkMode} />}
            />
            <Route
              path="/forgotpass/"
              element={<ForgotPass isDarkMode={isDarkMode} />}
            />
            <Route
              path="/changepassword/:token"
              element={<ChangePass isDarkMode={isDarkMode} />}
            />
            <Route
              path="/editprofile"
              element={<EditProfile isDarkMode={isDarkMode} />}
            />
            <Route
              path="/settings"
              element={<Settings isDarkMode={isDarkMode} />}
            />
            <Route
              path="/addproduct"
              element={<AddProduct isDarkMode={isDarkMode} />}
            />
            <Route
              path="/products"
              element={<Product isDarkMode={isDarkMode} />}
            />
            <Route
              path="/edit-product/:id"
              element={<EditProduct isDarkMode={isDarkMode} />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist isDarkMode={isDarkMode} />}
            />
            <Route
              path="/search-product"
              element={<SearchResults isDarkMode={isDarkMode} />}
            />
            <Route
              path="/contact"
              element={
                <Contact isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} />
              }
            />
            <Route
              path="/about"
              element={
                <About isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} />
              }
            />
            <Route
              path="/users"
              element={
                <UserList
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleTheme}
                />
              }
            />
            <Route
              path="/orders"
              element={
                <Orders isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} />
              }
            />
            <Route
              path="/herb-info"
              element={
                <HerbInfo
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleTheme}
                />
              }
            />
            <Route
              path="/newsletter"
              element={
                <Newsletter
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleTheme}
                />
              }
            />
             <Route
              path="/terms"
              element={
                <Terms
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleTheme}
                />
              }
            />
             <Route
              path="/privacy"
              element={
                <Privacy
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleTheme}
                />
              }
            />
          </Routes>
          <CartMenu isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
