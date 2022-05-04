import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCategory from "../pages/AddCategory";
import AddProduct from "../pages/AddProduct";
import AddSeller from "../pages/AddSeller";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Register from "../pages/Register";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="cart" element={<Cart />} />
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/sellers/add" element={<AddSeller />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
