import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      const value = await res.json();
      setProducts(value);
    };

    loadProducts();
  }, []);

  const handleProduct = (singleProduct) => {
    const newCart = [...cartProducts, singleProduct];
    setCartProducts(newCart);
    addToDb(singleProduct._id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    let cart = [];
    for (const id in storedCart) {
      let addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const productQty = storedCart[id];
        addedProduct.quantity = productQty;
        cart.push(addedProduct);
      }
    }
    setCartProducts(cart);
  }, [products]);

  const resetCart = () => {
    setCartProducts([]);
    deleteShoppingCart();
  };

  return (
    <>
      <div className="shop-container">
        <div className="products-container grid grid-cols-3 gap-3 mx-5 px-4 py-5">
          {products
            .slice(0, !showProducts ? 6 : showProducts.length)
            .map((product) => (
              <Product
                key={product._id}
                product={product}
                handleProduct={handleProduct}
              ></Product>
            ))}
        </div>
        <div className="cart-container bg-slate-900 text-white px-2 h-96">
          <Cart cartProducts={cartProducts} resetCart={resetCart}>
            <Link to={"/order"}>
              <div className="bg-purple-500 mt-2 rounded flex justify-between items-center p-2 text-white">
                Review Order
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
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </Cart>
        </div>
      </div>

      {!showProducts && (
        <div className="text-center my-3">
          <button onClick={() => setShowProducts(true)} className="btn">
            Show All
          </button>
        </div>
      )}
    </>
  );
};

export default Shop;
