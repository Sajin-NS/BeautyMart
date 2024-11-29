import React, { useState, useContext } from "react";
import Banner from "../Component/Home/Banner";
import ProductList from "../Component/Home/ProductList";
import TrendingProject from "../Component/Home/TrendingProduct";
import { cartContext } from "../App";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function Home() {
  const { wishlist, setWishlist, handleWishlist } = useContext(cartContext);

  // const [wishlists, setWishlists] = useState(Object.keys(localStorage));
  // function handleWishlist(e, product) {
  //   if (wishlists.includes(`wishlist-${product.id}`)) {
  //     localStorage.removeItem(`wishlist-${product.id}`);
  //     setWishlists(Object.keys(localStorage));
  //   } else {
  //     localStorage.setItem(`wishlist-${product.id}`, JSON.stringify(product));
  //     setWishlists(Object.keys(localStorage));
  //   }
  // }

  const [trendingRef, trendingInView] = useInView({ threshold: 0.2 });
  const [productRef, productInView] = useInView({ threshold: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };
  return (
    <div>
      <motion.div variants={bannerVariants} initial="hidden" animate="visible">
        <Banner />
      </motion.div>

      <motion.div
        ref={trendingRef}
        variants={fadeInVariants}
        initial="hidden"
        animate={trendingInView ? "visible" : "hidden"}
      >
        <TrendingProject
          wishlists={wishlist}
          handleWishlist={handleWishlist}
          setWishlists={setWishlist}
        />
      </motion.div>

      <motion.div
        ref={productRef}
        variants={fadeInVariants}
        initial="hidden"
        animate={productInView ? "visible" : "hidden"}
      >
        <ProductList
          wishlists={wishlist}
          handleWishlist={handleWishlist}
          setWishlists={setWishlist}
        />
      </motion.div>
    </div>
  );
}
