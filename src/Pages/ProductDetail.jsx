import React, { useEffect, useState } from "react";
import { products } from "../Data/Products";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Page404 from "../Component/Page404";

const ProductDetail = () => {
  const url = window.location.pathname;
  const productId = url.split("/").pop();

  const product = products.find((item) => item.id.toString() === productId);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [selectedColor, setSelectedColor] = useState(
    product && product.colors[0]
  );
  const [isAdded, setIsAdded] = useState(false);

  const [selectedSize, setSelectedSize] = useState(product && product.sizes[2]);
  function handleAddCart(e, product) {
    e.preventDefault();
    localStorage.setItem(`cart-${product.id}`, JSON.stringify(product));
    setIsAdded(true);
  }
  function handleRemoveCart(e, product) {
    e.preventDefault();
    localStorage.removeItem(`cart-${product.id}`);
    setIsAdded(false);
  }
  const alreadyAdded = Object.keys(localStorage).filter((key)=> key.startsWith("cart-"))
  useEffect(() => {
    // console.log("productId",productId.toString() === localStorage.getItem(product.id.toString()))
    // JSON.stringify(`cart-${productId}`) === JSON.stringify(alreadyAdded)
    if (JSON.stringify(alreadyAdded).includes(JSON.stringify(`cart-${productId}`))) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, []);

  return (
    <div>
      {product ? (
        <div className="bg-white">
          <div className="pb-16 pt-6 sm:pb-24">
            <nav
              aria-label="Breadcrumb"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <ol className="flex items-center space-x-4">
                <li>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="mr-4 text-sm font-medium text-gray-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </a>
                    <svg
                      viewBox="0 0 6 20"
                      aria-hidden="true"
                      className="h-5 w-auto text-gray-300"
                    >
                      <path
                        d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </li>
                <li className="text-sm">
                  <a
                    href={product.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>
            <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8">
                  <div className="flex justify-between">
                    <h1 className="text-xl font-medium text-gray-900">
                      {product.name}
                    </h1>
                    <p className="text-xl font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                  {/* Reviews */}
                  <div className="mt-4">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <p className="text-sm text-gray-700">
                        {product.rating}
                        <span className="sr-only"> out of 5 stars</span>
                      </p>
                      <div className="ml-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              product.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-200",
                              "size-5 shrink-0"
                            )}
                          />
                        ))}
                      </div>
                      <div
                        aria-hidden="true"
                        className="ml-4 text-sm text-gray-300"
                      >
                        ·
                      </div>
                      <div className="ml-4 flex">
                        <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                          See all {product.reviewCount} reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image gallery */}
                <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                  <h2 className="sr-only">Images</h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                    {product.images.map((image) => (
                      <img
                        key={image.id}
                        alt={image.imageAlt}
                        src={image.imageSrc}
                        className={classNames(
                          image.primary
                            ? "lg:col-span-2 lg:row-span-2"
                            : "hidden lg:block",
                          "rounded-lg"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-8 lg:col-span-5">
                  <form>
                    {/* Color picker */}
                    <div>
                      <h2 className="text-sm font-medium text-gray-900">
                        Color
                      </h2>

                      <fieldset aria-label="Choose a color" className="mt-2">
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="flex items-center space-x-3"
                        >
                          {product.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedColor,
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.bgColor,
                                  "size-8 rounded-full border border-black/10"
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    {/* Size picker */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-900">
                          Size
                        </h2>
                        <span className="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                          See sizing chart
                        </span>
                      </div>

                      <fieldset aria-label="Choose a size" className="mt-2">
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                        >
                          {product.sizes.map((size) => (
                            <Radio
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock
                                  ? "cursor-pointer focus:outline-none"
                                  : "cursor-not-allowed opacity-25",
                                "flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1"
                              )}
                            >
                              {size.name}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    <div className="flex items-center justify-center mt-8 gap-3">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={(e) => {
                          handleAddCart(e, product);
                        }}
                      >
                        {!isAdded
                          ? "Add to cart"
                          : `Added to cart successfully`}
                      </button>
                      {isAdded && (
                        <button
                          title="Remove From Cart"
                          className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-2 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={(e) => {
                            handleRemoveCart(e, product);
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Product details */}
                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Description
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      className="mt-4 space-y-4 text-sm/6 text-gray-500"
                    />
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <h2 className="text-sm font-medium text-gray-900">
                      Fabric &amp; Care
                    </h2>

                    <div className="mt-4">
                      <ul className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                        {product.details.map((item) => (
                          <li key={item} className="pl-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Page404
          title={"Product not found"}
          subTitle={"Explore our wide selection and find something you like"}
        />
      )}
    </div>
  );
};

export default ProductDetail;
