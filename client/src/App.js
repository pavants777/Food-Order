import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeoder from "./pages/Placeorder/Placeoder";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer/Footer";
import LoginPopup from "./components/Navbar/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrder from "./pages/MyOrders/MyOrder";

export default function App() {

  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<Placeoder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
