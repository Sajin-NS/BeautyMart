import React, { useState } from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import { createContext } from "react";

export const cartContext = createContext();

export function Layout({ children }) {
  const a= 'hello'
  const [cart, setCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);

  function getAllCart() {
    const allItems = Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("cart-"))
      .map(([_, value]) => JSON.parse(value));
    setCart(allItems);
  }

  function getTotalPrice() {
    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.split("₹").pop());
      // console.log("first", price);
      return sum + price;
    }, 0);
    setSubTotal(total);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleRemoveCart(item) {
    localStorage.removeItem(`cart-${item.id}`);
  }
  return (
    <div>
      <cartContext.Provider value={{cart,subtotal,getAllCart,getTotalPrice,handleRemoveCart,a}}>
        <NavBar />
        <main className="mt-[62px]">{children}</main>
        <Footer />
      </cartContext.Provider>
    </div>
  );
}
