import { useEffect } from "react";
import { getCategories } from "../api/Category";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "../components/Category/CategoryCard";
import ProductCard from "../components/Product/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoriesReducer);

  let products = [
    { _id: 1, libelle: "seller1", price: 8.0 },
    { _id: 2, libelle: "seller2", price: 8.0 },
    { _id: 3, libelle: "seller3", price: 8.0 },
    { _id: 4, libelle: "seller4", price: 8.0 },
    { _id: 5, libelle: "seller5", price: 8.0 },
    { _id: 6, libelle: "seller6", price: 8.0 },
  ];

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-full h-auto mt-5">
      <ul className="flex flex-wrap justify-center items-center">
        {categories.map((category, i) => (
          <li className="mr-5" key={i}>
            <Link to={"/"}>{category.libelle}</Link>
          </li>
        ))}
      </ul>

      <div className="mt-5 w-5/6 h-auto m-auto">
        <h1 className="text-center font-bold">Catégories</h1>
        <div className=" sm:flex sm:flex-wrap">
          {categories
            ? categories.map((category, i) => (
                <CategoryCard category={category} key={i} />
              ))
            : ""}
        </div>
      </div>

      <div className="mt-5 w-5/6 h-auto m-auto">
        <h1 className="font-bold">Top Produits</h1>
        <div className="sm:flex sm:flex-wrap">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
