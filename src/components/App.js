import React from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import Home from "./Home";
import {Route, Routes } from "react-router-dom";
import Products from "./Products";
import ProductDisplay from "./ProductDisplay";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
    <Navigator/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/productDisplay" element={<ProductDisplay/>} />
    <Route path="/signIn" element={<SignIn/>} />
    <Route path="/signUp" element={<SignUp/>} />
    
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
