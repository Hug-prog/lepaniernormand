import { API } from "..";

export const getAllCategories = () => {
  API.get("/api/categories")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

export const getCategoryById = id => {
  API.get("/api/categories" + id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

//export const addCategory = (category,role) =>{}
