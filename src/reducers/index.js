import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  categoriesReducer,
  productsReducer,
  cartReducer,
});
