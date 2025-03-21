import React, { useContext, useEffect } from "react";
import { cartContext } from "../App";
import Page404 from "../Component/Page404";

const Wishlist = () => {
  const { wishlist, getAllWishlist, render, handleRemoveWishlist } =
    useContext(cartContext);

  useEffect(() => {
    getAllWishlist();
  }, [render]);

  console.log("wishlist", wishlist);

  return (
    <div>
      {wishlist.length > 0 ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Wishlist
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {wishlist.map((product) => (
                <div key={product.id} className="group relative">
                  <button
                    className="absolute right-0 p-2 z-10"
                    onClick={() => {
                      handleRemoveWishlist(product);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={"red"}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="gray"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={`/${product.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Page404
          title={"Your wishlist is empty!"}
          subTitle={"Explore our wide selection and find something you like"}
        />
      )}
    </div>
  );
};

export default Wishlist;
