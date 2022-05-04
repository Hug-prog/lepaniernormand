import { ADD_SELLER, GET_SELLERS } from "../constants/sellers";

export default function sellersReducer(sellers = [], action) {
  switch (action.type) {
    case GET_SELLERS:
      return (sellers = action.payload);
    case ADD_SELLER:
      sellers = [...sellers, action.payload];
      return sellers;
    default:
      return sellers;
  }
}
