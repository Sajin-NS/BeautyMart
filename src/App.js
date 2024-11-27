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

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [render, setRender] = useState(false);

  function getAllCart() {
    const allItems = Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("cart-"))
      .map(([_, value]) => JSON.parse(value));
    setCart(allItems);
    // setRender(!render);
  }

  function getTotalPrice() {
    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.split("₹").pop());
      return sum + price;
    }, 0);
    setSubTotal(total);
    // setRender(!render);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleRemoveCart(item) {
    localStorage.removeItem(`cart-${item.id}`);
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
