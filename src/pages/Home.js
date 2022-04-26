import { useEffect } from "react";
import { getAllCategories } from "../api/Category";
import { getAllProducts } from "../api/Product";

export default function Home() {
  useEffect(() => {
    getAllCategories();
    getAllProducts();
  });

  return (
    <div>
      <h1 className="text-black">test</h1>
    </div>
  );
}
