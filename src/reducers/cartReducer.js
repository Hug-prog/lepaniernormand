import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  GET_PRODUCT_CART,
} from "../constants/cart";
export default function cartReducer(
  cart = JSON.parse(localStorage.getItem("cart") || "[]"),
  action
) {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      let objectCart = cart.find(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );

      if (objectCart !== undefined) {
        let index = cart.indexOf(objectCart);
        cart = cart.map((cartItem, i) => {
          if (i === index) {
            const newQte = qteChecker(
              cartItem.product.stock,
              cartItem.quantity + action.payload.quantity
            );
            return {
              product: action.payload.product,
              quantity: newQte,
            };
          } else return cartItem;
        });
      } else {
        cart = [...cart, action.payload];
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      return cart;
    case GET_PRODUCT_CART:
      return cart;
    case DELETE_PRODUCT_CART:
      cart = cart.filter((cartItem) => cartItem.product.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(cart));
      return cart;
    default:
      return cart;
  }
}

function qteChecker(maxQte, newQte) {
  if (newQte > maxQte) {
    return maxQte;
  } else {
    return newQte;
  }
}
