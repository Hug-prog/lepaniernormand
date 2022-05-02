import {
  GET_CATEGORIES,
  GET_PRODUCTSBYCATEGORIESID,
} from "../constants/categories";

export default function categoriesReducer(categories = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      categories = action.payload;
      return categories;
    case GET_PRODUCTSBYCATEGORIESID:
      categories = action.payload;
    default:
      return categories;
  }
}
