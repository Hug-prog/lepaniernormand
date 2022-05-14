import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from "../constants/categories";

export default function categoriesReducer(categories = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      categories = action.payload;
      return categories;
    case ADD_CATEGORY:
      categories = [...categories, action.payload];
      return categories;
    case DELETE_CATEGORY:
      return categories.filter((category) => category !== action.payload);
    default:
      return categories;
  }
}
