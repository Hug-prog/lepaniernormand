import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Product from "../pages/Product";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}
