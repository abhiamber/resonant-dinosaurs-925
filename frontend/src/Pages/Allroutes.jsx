import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";
import Login from "./Login";
import ProductMain from "./ProductMain";
import Register from "./Register";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/productmain" element={<ProductMain />} />
    </Routes>
  );
}
