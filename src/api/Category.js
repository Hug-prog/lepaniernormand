import { API } from ".";
import { GET_CATEGORIES } from "../constants/categories";

export const getCategories = () => {
  return dispatch => {
    API.get("/api/categories")
      .then(res => dispatch({ type: GET_CATEGORIES, payload: res.data }))
      .catch(err => console.log(err));
  };
};

/*export const getCategoryById = (id) => {
  API.get("/api/categories" + id)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};*/

//export const addCategory = (category,role) =>{}
