import React, { useEffect, useState } from "react";
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
    // localStorage.setItem("shopping-cart", JSON.stringify(cartProducts));
  };

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
        <div className="cart-container">
          <h2>Ordered Products</h2>
          <p>Total Products: {cartProducts.length}</p>
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
