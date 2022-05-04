import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import sellersReducer from "./sellersReducer";
export default combineReducers({
  categoriesReducer,
  productsReducer,
  cartReducer,
  sellersReducer,
});
