import { GET_USER } from "../constants/user";

export default function userReducer(user = {}, action) {
  switch (action.type) {
    case GET_USER:
      return (user = action.payload);
    default:
      return user;
  }
}
