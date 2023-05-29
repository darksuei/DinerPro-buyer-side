import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : { cartItems: [], shippingAddress: {}, paymentMethod: "" },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      // Initialize the quantity to 1 if the item is not already in the cart
      newItem.quantity = existItem ? existItem.quantity + 1 : 1;
      // newItem.totalPrice = newItem.quantity * newItem.priceTag; // Calculate total price

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    //increase qty item
    case "CART_INCREASE_QUANTITY": {
      const { slug } = action.payload;
      const cartItems = state.cart.cartItems.map((item) => {
        if (item.slug === slug) {
          const updatedItem = {
            ...item,
            quantity: item.quantity + 1,
          };
          return updatedItem;
        }
        return item;
      });

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    //decrease qty

    case "CART_DECREASE_QUANTITY": {
      const { slug } = action.payload;
      const cartItems = state.cart.cartItems.map((item) => {
        if (item.slug === slug) {
          const updatedItem = {
            ...item,
            quantity: item.quantity - 1,
          };
          return updatedItem;
        }
        return item;
      });

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    //calculate totals
    // case "TOTAL_AMOUNT": {
    //   const cartItems = state.cart.cartItems.map((item) => {
    //     const updatedItem = {
    //       ...item,
    //       totalPrice: item.quantity * item.priceTag, // Calculate total price
    //     };
    //     return updatedItem;
    //   });

    //   return { ...state, cart: { ...state.cart, cartItems } };
    // }

    case "CART_RESET":
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: "",
        },
      };

    //clear cart items
    case "CART_CLEAR_ITEMS":
      return { ...state, cart: { ...state.cart, cartItems: [] } };

    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
