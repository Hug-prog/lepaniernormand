import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategories } from "../../api/Category";

export default function CategoriesAdmin() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div>
      <p>Liste des Categories</p>
      <div>
        {categories.map((categorie, i) => {
          return (
            <div key={i} className="flex items-center">
              <div
                className="w-16 h-16 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(
                    ${process.env.REACT_APP_API_URL}uploads/categorie/${categorie.image}
                  )`,
                }}
              ></div>
              <p>{categorie.libelle}</p>
              <button
                className="bg-red-600 text-white p-1.5 rounded-lg"
                onClick={() => dispatch(deleteCategory(categorie.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
