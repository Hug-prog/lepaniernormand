import { GET_CATEGORIES } from "../constants/categories";

export default function categoriesReducer(categories = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      categories = action.payload;
      return categories;
    default:
      return categories;
  }
}
