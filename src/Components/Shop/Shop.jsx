import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("products.json");
      const value = await res.json();
      setProducts(value);
    };

    loadProducts();
  }, []);

  const handleProduct = (singleProduct) => {
    const newCart = [...cartProducts, singleProduct];
    setCartProducts(newCart);
    addToDb(singleProduct.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    let cart = [];
    for (const id in storedCart) {
      let addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const productQty = storedCart[id];
        addedProduct.quantity = productQty;
        cart.push(addedProduct);
      }
    }
    setCartProducts(cart);
  }, [products]);

  return (
    <>
      <div className="shop-container">
        <div className="products-container grid grid-cols-3 gap-3 mx-5 px-4 py-5">
          {products
            .slice(0, !showProducts ? 6 : showProducts.length)
            .map((product) => (
              <Product
                key={product.id}
                product={product}
                handleProduct={handleProduct}
              ></Product>
            ))}
        </div>
        <div className="cart-container bg-slate-900 text-white pl-3 h-96">
          <Cart cartProducts={cartProducts}></Cart>
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
