import { API } from ".";
import { GET_PRODUCTS } from "../constants/products";
import { GET_USER, LIKE_PRODUCT, UNLIKE_PRODUCT } from "../constants/user";

export const getCurrentUser = () => {
  return (dispatch) => {
    API.get("/api/currentuser")
      .then((res) => dispatch({ type: GET_USER, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const getLikedProducts = () => {
  return (dispatch) => {
    API.get("/api/user/likedproducts")
      .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const likeProduct = (id) => {
  return (dispatch) => {
    API.patch(`api/user/like/product/${id}`)
      .then((res) => dispatch({ type: LIKE_PRODUCT, payload: id }))
      .catch((err) => console.log(err));
  };
};

export const unLikeProduct = (id) => {
  return (dispatch) => {
    API.patch(`api/user/unlike/product/${id}`)
      .then((res) => dispatch({ type: UNLIKE_PRODUCT, payload: id }))
      .catch((err) => console.log(err));
  };
};
