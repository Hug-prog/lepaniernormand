import axios from "axios";
import { API } from ".";
import {
  ADD_SELLER,
  DELETE_SELLER,
  GET_SELLERBYID,
  GET_SELLERS,
} from "../constants/sellers";

export const getSellers = () => {
  return (dispatch) => {
    API.get("/api/sellers")
      .then((res) => dispatch({ type: GET_SELLERS, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const getSellerById = (id) => {
  return (dispatch) => {
    API.get("/api/sellers/" + id)
      .then((res) => dispatch({ type: GET_SELLERBYID, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const addSeller = (seller) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}api/sellers`, seller, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => dispatch({ type: ADD_SELLER, payload: res.data }))
      .catch((err) => console.log(err));
  };
};

export const deleteSeller = (id) => {
  return (dispatch) => {
    API.delete(`/api/sellers/${id}`).then((res) =>
      dispatch({ type: DELETE_SELLER, payload: res.data }).catch((err) =>
        console.log(err)
      )
    );
  };
};
