import {
  GET_PRODUCTS,
  GET_PRODUCTSBYCATEGORIESID,
} from "../constants/products";
export default function productsReducer(products = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      products = action.payload;
      return products;
    case GET_PRODUCTSBYCATEGORIESID:
      products = action.payload;
    default:
      return products;
  }
}
