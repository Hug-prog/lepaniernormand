import axios from "axios";
import { API } from ".";
import { ADD_CATEGORY, GET_CATEGORIES } from "../constants/categories";
import { GET_PRODUCTSBYCATEGORIESID } from "../constants/products";

export const getCategories = () => {
  return dispatch => {
    API.get("/api/categories")
      .then(res => dispatch({ type: GET_CATEGORIES, payload: res.data }))
      .catch(err => console.log(err));
  };
};

export const getProductByCategoryId = id => {
  return dispatch => {
    API.get("/api/categories/" + id)
      .then(res =>
        dispatch({ type: GET_PRODUCTSBYCATEGORIESID, payload: res.data })
      )
      .catch(err => console.log(err));
  };
};

export const addCategory = category => {
  return dispatch => {
    axios(process.env.REACT_APP_API_URL + "categories", {
      method: "post",
      data: category,
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then(res => dispatch({ type: ADD_CATEGORY, payload: res.data }))
      .catch(err => console.log(err));
  };
};
