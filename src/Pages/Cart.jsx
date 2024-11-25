import React, { useEffect, useState } from "react";
import { Layout } from "../Layout";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const allItems = Object.entries(localStorage).map(([_, value]) => ({
      value: JSON.parse(value),
    }));
    setCart(allItems);
  }, []);

  console.log("cart",cart)

  return (
    <Layout>
      <div className="p-4">
        {cart.length > 0 ? (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.key} className="p-2 border rounded shadow">
                {item.value.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
};
