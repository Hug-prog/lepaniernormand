import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
export default combineReducers({
  categoriesReducer,
  productsReducer,
});
