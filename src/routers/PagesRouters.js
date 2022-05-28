import React from "react";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Clients from "../pages/clients";
import Products from "../pages/products";
import Responsible from "../pages/responsible";
import Users from "../pages/users";
import Sidebar from "../components/Sidebar";
import ContentScreen from "../pages/ContentScreen";

function PagesRouters() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content w-100">
        <Navbar screen="ALMACÉN TECOC" />
        <Routes>
          <Route path="clients" element={<Clients />}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route
            path="responsible"
            element={<Responsible></Responsible>}
          ></Route>
          <Route path="/" element={<ContentScreen />}></Route>
        </Routes>
      </div>
      <div></div>
    </div>
  );
}

export default PagesRouters;
