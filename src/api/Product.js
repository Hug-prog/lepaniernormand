import { API } from ".";

export const getAllProducts = () => {
  API.get("/api/products")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

export const getProductById = id => {
  API.get("/api/products" + id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
