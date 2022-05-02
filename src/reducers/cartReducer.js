import { ADD_PRODUCT_CART, GET_PRODUCT_CART } from "../constants/cart";
export default function cartReducer(
  cart = JSON.parse(localStorage.getItem("cart") || "[]"),
  action
) {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      cart = [...cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(cart));
      return cart;
    case GET_PRODUCT_CART:
      return cart;
    default:
      return cart;
  }
}
