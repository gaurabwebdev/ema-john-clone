import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("products.json");
      const value = await res.json();
      setProducts(value);
    };

    loadProducts();
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container grid grid-cols-3 gap-3 mx-5 px-4 py-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h2>products</h2>
      </div>
    </div>
  );
};

export default Shop;
