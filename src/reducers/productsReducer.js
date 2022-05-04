import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTSBYCATEGORIESID,
} from "../constants/products";
export default function productsReducer(products = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      products = action.payload;
      return products;
    case GET_PRODUCTSBYCATEGORIESID:
      return (products = action.payload);
    case ADD_PRODUCT:
      products = [...products, action.payload];
      return products;
    default:
      return products;
  }
}
