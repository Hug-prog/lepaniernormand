import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FormSeller from "../components/Seller/FormSeller";
import AddCategory from "../pages/AddCategory";
import AddProduct from "../pages/AddProduct";
import Seller from "../pages/admin/Seller";

import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import WishList from "../pages/WishList";
import Product from "../pages/Product";
import Profil from "../pages/Profil";
import Register from "../pages/Register";

export default function Router() {
  useEffect(() => {});

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="cart" element={<Cart />} />
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/seller/add" element={<FormSeller />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/sellers" element={<Seller />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/wishlist" element={<WishList />} />
    </Routes>
  );
}
