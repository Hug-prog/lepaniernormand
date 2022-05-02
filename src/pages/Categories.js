import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductByCategoryId } from "../api/Category";
import ProductCard from "../components/Product/ProductCard";

export default function Categories() {
  const dispatch = useDispatch();
  const location = useLocation();
  const productsCateg = useSelector(state => state.categoriesReducer);

  useEffect(() => {
    dispatch(getProductByCategoryId(location.state));
  }, [dispatch]);

  return (
    <div>
      {productsCateg
        ? productsCateg.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))
        : ""}
    </div>
  );
}
