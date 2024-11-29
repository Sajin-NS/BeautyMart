import React from "react";
import { products } from "../../Data/Products";

const TrendingProject = ({ wishlists, handleWishlist, setWishlists }) => {
  return (
    <div id="TrendingProduct" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mt-6">
          Top Categories to choose from
        </h2>

        <div className="mt-6 flex overflow-x-auto gap-4 scrollbar-hide">
          {products
            .filter((items) => items.trending !== false)
            .map((product) => (
              <div
              key={product.id}
                id={product.id}
                className="relative flex-shrink-0 w-[30vh] md:w-[45vh] group"
                style={{ minWidth: "calc(25% - 0.5rem)" }}
              >
                <button
                  className="absolute right-0 p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWishlist(e, product);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={`${
                      wishlists.includes(`wishlist-${product.id}`)
                        ? "red"
                        : "none"
                    }`}
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
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
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
  );
};

export default TrendingProject;
