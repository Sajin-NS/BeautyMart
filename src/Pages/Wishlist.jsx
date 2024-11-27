import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(Object.keys(localStorage));

  useEffect(() => {
    const allWishList = Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("wishlist-"))
      .map(([_, value]) => (JSON.parse(value)));
    setWishlist(allWishList);
  }, []);

  console.log("wishlist", wishlist);

  return (
      <div>
        {wishlist.map((list) => (
          <div>{list.name}</div>
        ))}
      </div>
  );
};

export default Wishlist;
