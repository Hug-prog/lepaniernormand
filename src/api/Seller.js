import { API } from ".";
import { GET_SELLERBYID, GET_SELLERS } from "../constants/sellers";

export const getSellers = () => {
  return dispatch => {
    API.get("/api/sellers")
      .then(res => dispatch({ type: GET_SELLERS, payload: res.data }))
      .catch(err => console.log(err));
  };
};

export const getSellerById = id => {
  return dispatch => {
    API.get("/api/sellers/" + id)
      .then(res => dispatch({ type: GET_SELLERBYID, payload: res.data }))
      .catch(err => console.log(err));
  };
};
