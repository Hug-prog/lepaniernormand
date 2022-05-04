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
