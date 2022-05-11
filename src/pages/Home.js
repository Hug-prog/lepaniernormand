import { useEffect } from "react";
import { getCategories } from "../api/Category";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "../components/Category/CategoryCard";
import ProductCard from "../components/Product/ProductCard";
import { getAllProducts } from "../api/Product";

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer);
  const products = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="w-full h-auto mt-5">
      <ul className="flex flex-wrap justify-center items-center 2xl:mt-10">
        {categories
          ? categories.map((category, i) => (
              <li className="mr-5" key={i}>
                <Link
                  to={"/categories"}
                  state={category.id}
                  className="font-bold  2xl:text-2xl"
                >
                  {category.libelle}
                </Link>
              </li>
            ))
          : ""}
      </ul>

      <div className="mt-5 w-5/6 h-auto m-auto 2xl:mt-28">
        <h1 className="text-center font-bold 2xl:text-2xl">Catégories</h1>
        <div className=" flex flex-wrap">
          {categories
            ? categories.map((category, i) => (
                <CategoryCard category={category} key={i} />
              ))
            : ""}
        </div>
      </div>

      <div className="mt-5 w-5/6 h-auto m-auto">
        <h1 className="font-bold 2xl:text-3xl">Top Produits</h1>
        <div className="sm:flex sm:flex-wrap">
          {products
            ? products.map((product, i) => (
                <ProductCard product={product} key={i} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
