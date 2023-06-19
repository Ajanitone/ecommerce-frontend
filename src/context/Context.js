import { createContext, useReducer, useState } from "react";

export const HerbContext = createContext();

function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: { ...action.payload },
        };

      case "SET_PROFILE_IMAGE":
        return { ...state, profileImageURL: action.payload };

      case "loadUsers":
        return {
          ...state,
          users: [...action.payload],
        };

      case "logout":
        return reset;

      case "saveProfile":
        return {
          ...state,
          user: { ...action.payload },
        };

      case "removeUser":
        // filter state (user) to remove the deleted user
        const oldUsers = [
          ...state.users.filter((item) => item._id !== action.payload),
        ];
        return {
          ...state,
          users: [...oldUsers],
        };
      case "addProduct":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case "loadProducts":
        return {
          ...state,
          products: [...action.payload],
        };

      case "removeProduct":
        const oldProducts = [
          ...state.products.filter((item) => item._id !== action.payload),
        ];

        return {
          ...state,
          products: [...oldProducts],
        };

      case "editProduct":
        const editProducts = [...state.products];

        const idx = editProducts.findIndex(
          (item) => item._id === action.payload._id
        );

        editProducts[idx] = { ...action.payload };
        console.log("🚀 ~ reducer ~ editProducts", editProducts[idx]);

        return {
          ...state,
          products: [...editProducts],
        };
      case "addToCart":
        return {
          ...state,
          user: {
            ...state.user,
            cart: [...action.payload],
            // cart: [...state.user.cart, action.payload],
          },
        };
      case "deleteFromCart":
        return {
          ...state,
          user: {
            ...state.user,
            cart: [...action.payload],
          },
        };
      // case "addProducts":
      //   return {
      //     ...state,
      //     products: [...state.products, ...action.payload],
      //   };
      case "searchUsers":
        return {
          ...state,
          users: [...action.payload],
        };
      case "addToWishlist":
        return {
          ...state,
          user: {
            ...state.user,
            wishlist: [...state.user.wishlist, action.payload],
          },
        };

      case "deleteFromWishlist":
        return {
          ...state,
          user: {
            ...state.user,
            wishlist: [...action.payload],
          },
        };
      case "searchProducts":
        return {
          ...state,
          products: [...action.payload],
        };

      case "loadOrders":
        return {
          ...state,
          orders: [...action.payload],
        };

      case "removeOrder":
        // filter state (user) to remove the deleted user
        const oldOrders = [
          ...state.orders.filter((item) => item._id !== action.payload),
        ];
        return {
          ...state,
          orders: [...oldOrders],
        };

      default:
        return state;
    }
  };

  const reset = {
    user: {
      email: "",
      phone: "",
      username: "",
      profileImage: "",
      isAdmin: false,
      _id: "",
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      city: "",
      country: "",
    },
    products: [],

    isFetching: false,
    error: false,
    cart: [],
    users: [],
    orders: [],
  };

  const [state, dispatchState] = useReducer(reducer, reset);
  const [search, setSearch] = useState("");
  return (
    <HerbContext.Provider value={{ state, dispatchState, search, setSearch }}>
      {children}
    </HerbContext.Provider>
  );
}

export default ContextProvider;
