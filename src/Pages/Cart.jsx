import React, { useContext, useEffect } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../App";
import Page404 from "../Component/Page404";

export const Cart = () => {
  const {
    cart,
    subtotal,
    getAllCart,
    getTotalPrice,
    render,
    handleRemoveCart,
  } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCart();
  }, [render]);

  useEffect(() => {
    getTotalPrice();
  }, [getAllCart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div>
          <main className="mx-auto max-w-2xl px-4 pb-24 pt-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>

            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>

                <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
                  {cart.map((product, productIdx) => (
                    <li key={product.id} className="flex py-6 sm:py-10">
                      <div className="shrink-0">
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className="size-24 rounded-md object-cover sm:size-48"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href={`/${product.id}`}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.name}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-gray-500">{product.color}</p>
                              <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                {product.sizes[productIdx].name}
                              </p>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              {product.price}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <label
                              htmlFor={`quantity-${productIdx}`}
                              className="sr-only"
                            >
                              Quantity, {product.name}
                            </label>
                            <select
                              id={`quantity-${productIdx}`}
                              name={`quantity-${productIdx}`}
                              className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base/5 font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                            </select>

                            <div className="absolute right-0 top-0">
                              <button
                                type="button"
                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                onClick={() => {
                                  handleRemoveCart(product);
                                }}
                              >
                                <span className="sr-only">Remove</span>
                                <XMarkIconMini
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                          <CheckIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-green-500"
                          />
                          <span>In stock</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="summary-heading"
                className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      &#8377; {`${subtotal}`}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <p className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">
                          Learn more about how shipping is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          aria-hidden="true"
                          className="size-5"
                        />
                      </p>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      &#8377; 80.00
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <p className="ml-2 shrink-0 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">
                          Learn more about how tax is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          aria-hidden="true"
                          className="size-5"
                        />
                      </p>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      &#8377; 42.36
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      &#8377; {`${subtotal + 80 + 42.36}`}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => navigate("/checkout")}
                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Checkout
                  </button>
                </div>
              </section>
            </form>
          </main>
        </div>
      ) : (
        <Page404
          title={"Your cart is empty!"}
          subTitle={"Explore our wide selection and find something you like"}
        />
      )}
    </div>
  );
};
