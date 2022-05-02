import { API } from ".";
import { GET_PRODUCTS } from "../constants/products";

export const getAllProducts = () => {
  return dispatch => {
    API.get("/api/products/")
      .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch(err => console.log(err));
  };
};

export const getProductById = id => {
  API.get("/api/products/" + id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
