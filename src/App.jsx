import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./pages/admin/create product/CreateProduct";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/singlePage/SinglePage"; 

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/register" element={<Login />} />

        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="create" element={<CreateProduct />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
