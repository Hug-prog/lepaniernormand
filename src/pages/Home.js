import { useEffect } from "react";
import { getAllCategories } from "../api/Categorie/Category";

export default function Home() {
  useEffect(() => {
    getAllCategories();
  });

  return (
    <div>
      <h1 classname="text-black">test</h1>
    </div>
  );
}
