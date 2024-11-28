import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import Wishlist from "./Pages/Wishlist";
import Checkout from "./Pages/Checkout";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import React, { useState } from "react";
import { createContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [render, setRender] = useState(false);
  const [wishlist, setWishlist] = useState(Object.keys(localStorage));

  function getAllCart() {
    const allItems = Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("cart-"))
      .map(([_, value]) => JSON.parse(value));
    setCart(allItems);
    // setRender(!render);
  }

  function getTotalPrice() {
    const total = cart.reduce((sum, item) => {
      const price = item?.price;
      const priceInt = parseInt(price.split("₹").pop());
      return sum + priceInt;
    }, 0);
    setSubTotal(total);
  }

  function handleWishlist(e, product) {
    if (wishlist.includes(`wishlist-${product.id}`)) {
      localStorage.removeItem(`wishlist-${product.id}`);
      setWishlist(Object.keys(localStorage));
    } else {
      localStorage.setItem(`wishlist-${product.id}`, JSON.stringify(product));
      setWishlist(Object.keys(localStorage));
    }
  }

  function getAllWishlist() {
    const allWishList = Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("wishlist-"))
      .map(([_, value]) => JSON.parse(value));
    setWishlist(allWishList);
  }

  function handleRemoveWishlist(product) {
    localStorage.removeItem(`wishlist-${product.id}`);
    setRender(!render);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleRemoveCart(item) {
    localStorage.removeItem(`cart-${item.id}`);
    setRender(!render);
  }

  return (
    <div className="App">
      <cartContext.Provider
        value={{
          cart,
          subtotal,
          getAllCart,
          getTotalPrice,
          handleRemoveCart,
          render,
          setRender,
          wishlist,
          setWishlist,
          handleWishlist,
          getAllWishlist,
          handleRemoveWishlist,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <main className="mt-[62px]">
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/cart" Component={Cart}></Route>
              <Route path="/wishlist" Component={Wishlist}></Route>
              <Route path="/:id" Component={ProductDetail}></Route>
              <Route path="/checkout" Component={Checkout}></Route>
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
