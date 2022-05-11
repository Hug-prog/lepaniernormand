import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import sellersReducer from "./sellersReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
export default combineReducers({
  categoriesReducer,
  productsReducer,
  cartReducer,
  sellersReducer,
  modalReducer,
  userReducer,
});
