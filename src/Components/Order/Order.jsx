import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const products = useLoaderData();
  console.log(products);
  const [cart, setCart] = useState(products);
  const deleteProduct = (pId) => {
    const newCart = cart.filter((cartProduct) => cartProduct._id !== pId);
    setCart(newCart);
    removeFromDb(pId);
  };
  const resetCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="mx-auto mt-16 w-3/4 md:w-2/4">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <div className="cart-container bg-slate-900 text-white p-2 h-96">
        <Cart cartProducts={cart} resetCart={resetCart}>
          <Link to={"/checkout"}>
            <div className="bg-purple-500 mt-2 rounded flex justify-between items-center p-2 text-white">
              Proceed To Checkout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
            </div>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
