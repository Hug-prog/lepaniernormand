import axios from "axios";
import { API } from ".";

export const register = (user) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}api/users`, user, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
export const login = (user) => {
  API.post(`/api/login`, user)
    .then((res) => res)
    .catch((err) => console.log(err));
};
export const getCurrentUser = () => {
  API.get("/api/token/refresh").then((res) => console.log(res));
};
