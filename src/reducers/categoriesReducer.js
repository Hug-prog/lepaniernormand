import { GET_CATEGORIES, ADD_CATEGORY } from "../constants/categories";

export default function categoriesReducer(categories = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      categories = action.payload;
      return categories;
    case ADD_CATEGORY:
      categories = [...categories, action.payload];
      return categories;
    default:
      return categories;
  }
}
