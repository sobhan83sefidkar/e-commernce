import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"
import Products from "./pages/products/products";
import NavbarDesktop from "./components/navbar-desktop/navbar";
import NavbarMobile from "./components/navbar-mobile/navbar";
import { useState } from "react";
import ProductDetail from "./pages/productDetail/product";
import Cart from "./pages/cart/cart";
import CartProducts from "./components/cartProducts-cart/product";
import Location from "./components/location/location";
import SubmitShopping from "./components/submitshopping/submit";
import Login from "./pages/login/login";
import UserConfig from "./pages/userconfig/userconfig";
import Profile from "./components/profile-serconfig/profile";
import Orders from "./components/orders-serconfig/orders";
import EditInfo from "./components/editinfo-serconfig/editinfo";

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  const [fixedHeader, setFixedHeader] = useState(false)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 96) {
      setFixedHeader(true)
    } else {
      setFixedHeader(false)
    }
  })
  return (
    <div className={`app  ${fixedHeader ? "mt-[96px]" : "mt-0"}`}>
      <BrowserRouter>
        <NavbarDesktop setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <NavbarMobile setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart/>}>
            <Route path="/cart" element={<CartProducts/>}></Route>
            <Route path="/cart/shipping" element={<Location/>}></Route>
            <Route path="/cart/submit" element={<SubmitShopping/>}></Route>
          </Route>
          <Route path="/userconfig" element={<UserConfig/>}>
            <Route path="/userconfig" element={<Profile/>}></Route>
            <Route path="/userconfig/orders" element={<Orders/>}></Route>
            <Route path="/userconfig/address" element={<Location/>}></Route>
            <Route path="/userconfig/editinfo" element={<EditInfo/>}></Route>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
