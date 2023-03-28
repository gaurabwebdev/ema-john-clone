import React from "react";
import "./Product.css";

const Products = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  return (
    <div>
      <div className="card bg-slate-300 shadow-xl h-auto">
        <figure>
          <img className="rounded-xl" src={img} alt="Product Image" />
        </figure>
        <div className="card-body">
          <h4 className="card-title text-lg">{name ? name : "Product Name"}</h4>
          <div className="flex flex-col gap-3">
            <p>
              ${" "}
              <span className="text-xl font-semibold">
                {price ? price : "Unspecified"}
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span>Manufacturer: {seller ? seller : "Unknown"}</span>
              <span>Rating: {ratings ? ratings : 0} Star</span>
            </p>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">
              <span className="mr-2">Add To Cart</span>
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
