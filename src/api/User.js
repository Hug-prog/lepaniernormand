import { API } from ".";
import { GET_USER } from "../constants/user";

export const getCurrentUser = () => {
  return (dispatch) => {
    API.get("/api/currentuser")
      .then((res) => dispatch({ type: GET_USER, payload: res.data }))
      .catch((err) => console.log(err));
  };
};
