import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikedProducts } from "../api/User";
import ProductCard from "../components/Product/ProductCard";

export default function LikedProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(getLikedProducts());
  }, [dispatch]);
  return (
    <div>
      <p>Mes Favoris</p>
      <div>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
