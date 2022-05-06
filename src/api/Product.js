import axios from "axios";
import { API } from ".";
import { ADD_PRODUCT, GET_PRODUCTS } from "../constants/products";

export const getAllProducts = () => {
  return dispatch => {
    API.get("/api/products")
      .then(res => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch(err => console.log(err));
  };
};

export const getProductById = id => {
  API.get("/api/products/" + id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

export const addProduct = product => {
  return dispatch => {
    axios
      .post(process.env.REACT_APP_API_URL + "api/products", product, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then(res => dispatch({ type: ADD_PRODUCT, payload: res.data }))
      .catch(err => console.log(err));
  };
};
