import { useEffect } from "react";
import { getCategories } from "../api/Category";

export default function Home() {
  useEffect(() => {
    getCategories();
  });

  return (
    <div>
      <h1 className="text-black">test</h1>
    </div>
  );
}
