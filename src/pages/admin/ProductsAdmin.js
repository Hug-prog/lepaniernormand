import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../api/Product";

export default function ProductsAdmin() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <p>liste des produits</p>
      <div>
        {products.map((product, i) => {
          return (
            <div key={i} className="flex items-center">
              <div
                className="w-16 h-16 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(
                    ${process.env.REACT_APP_API_URL}uploads/product/${product.images[0]}
                  )`,
                }}
              ></div>
              <p>{product.libelle}</p>
              <button
                className="bg-red-600 text-white p-1.5 rounded-lg"
                onClick={() => dispatch(deleteProduct(product.id))}
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
