import { GET_PRODUCTS } from "../constants/products";
export default function productsReducer(products = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      products = action.payload;
      return products;
    default:
      return products;
  }
}
