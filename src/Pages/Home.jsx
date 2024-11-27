import React, { useState } from "react";
import Banner from "../Component/Home/Banner";
import ProductList from "../Component/Home/ProductList";
import TrendingProject from "../Component/Home/TrendingProduct";

export function Home() {
  const [wishlists, setWishlists] = useState(Object.keys(localStorage));
  function handleWishlist(e, product) {
    if (wishlists.includes(`wishlist-${product.id}`)) {
      localStorage.removeItem(`wishlist-${product.id}`);
      setWishlists(Object.keys(localStorage));
    } else {
      localStorage.setItem(`wishlist-${product.id}`, JSON.stringify(product));
      setWishlists(Object.keys(localStorage));
    }
  }
  return (
    <div>
      <Banner />
      <TrendingProject
        wishlists={wishlists}
        handleWishlist={handleWishlist}
        setWishlists={setWishlists}
      />
      <ProductList
        wishlists={wishlists}
        handleWishlist={handleWishlist}
        setWishlists={setWishlists}
      />
    </div>
  );
}
