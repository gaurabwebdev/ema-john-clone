import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartProducts, resetCart, children } = props;
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cartProducts) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping * product.quantity;
    quantity += product.quantity;
  }
  const taxAmount = (totalPrice * 7.5) / 100;
  const grandTotal = totalPrice + totalShipping + taxAmount;

  return (
    <>
      <h2 className="text-2xl font-semibold mt-5">Ordered Products</h2>
      <div className="flex flex-col gap-3 mt-3">
        <p>Total Products: {quantity}</p>
        <p>
          <span>Total Price: </span> {totalPrice ? "$" + totalPrice : ""}
        </p>
        <p>Total Shipping: {totalShipping}</p>
        <p>Tax: {taxAmount.toFixed(2)}</p>
        <p>Grand Total: {grandTotal.toFixed(2)}</p>
      </div>
      <div className="bg-red-500 p-2 flex justify-between items-center mt-5 rounded">
        <p>Clear Cart</p>
        <div onClick={resetCart} className="cursor-pointer">
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
      {children}
    </>
  );
};

export default Cart;
