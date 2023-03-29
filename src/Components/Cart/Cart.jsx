import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartProducts } = props;
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
    </>
  );
};

export default Cart;
