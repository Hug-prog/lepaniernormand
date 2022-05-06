import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import sellersReducer from "./sellersReducer";
import modalReducer from "./modalReducer";
export default combineReducers({
  categoriesReducer,
  productsReducer,
  cartReducer,
  sellersReducer,
  modalReducer,
});
