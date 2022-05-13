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
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="register" element={<Register />} />
        <Route path="profil" element={<Profil />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="admin">
          <Route path="sellers">
            <Route index element={<Seller />} />
            <Route path="add" element={<FormSeller />} />
          </Route>
          <Route path="categorie/add" element={<AddCategory />} />
        </Route>
      </Route>
    </Routes>
  );
}
