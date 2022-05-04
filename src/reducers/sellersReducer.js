import { GET_SELLERBYID, GET_SELLERS } from "../constants/sellers";

export default function sellersReducer(sellers = [], action) {
  switch (action.type) {
    case GET_SELLERS:
      sellers = action.payload;

    case GET_SELLERBYID:
      sellers = action.payload;

    default:
      return sellers;
  }
}
