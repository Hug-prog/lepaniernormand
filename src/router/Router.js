import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../../taskManager/front/src/pages/Home";
import Categories from "../pages/Categories";
import Product from "../pages/Product";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/categories">
        <Route index element={<Categories />} />
      </Route>
      <Route path="/product">
        <Route index element={<Product />} />
      </Route>
    </Routes>
  );
}
