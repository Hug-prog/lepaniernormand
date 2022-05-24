import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getLikedProducts } from "../api/User";
import ProductCard from "../components/Product/ProductCard";

export default function WishList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer);
  const user = useSelector(state => state.userReducer);
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getLikedProducts());
  }, [dispatch]);
  return (
    <div>
      <p>Mes Favoris</p>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, i) => (
          <ProductCard key={i} user={user} product={product} />
        ))}
      </div>
    </div>
  );
}
