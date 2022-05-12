import { GET_USER, LIKE_PRODUCT, UNLIKE_PRODUCT } from "../constants/user";

export default function userReducer(user = {}, action) {
  switch (action.type) {
    case GET_USER:
      return (user = action.payload);
    case LIKE_PRODUCT:
      return {
        ...user,
        likedProducts: [...user.likedProducts, action.payload],
      };
    case UNLIKE_PRODUCT:
      return {
        ...user,
        likedProducts: user.likedProducts.filter(
          (product) => product !== action.payload
        ),
      };
    default:
      return user;
  }
}
