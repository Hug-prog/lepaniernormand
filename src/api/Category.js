import { API } from ".";
import { GET_CATEGORIES } from "../constants/categories";
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

/*export const getCategoryById = (id) => {
  API.get("/api/categories" + id)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};*/

//export const addCategory = (category,role) =>{}
