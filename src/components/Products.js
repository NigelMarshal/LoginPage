import React from "react";
const product = require("../assets/img/product-card.png");
const Products = () => {
  return (
    <div className="mw9 center ph3-ns tc">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-third-ns pa2">
          <img src={product} alt="iPhone" />
          <p>iPhone 6 Black</p>
          <p>AED 1000</p>
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <img src={product} alt="iPhone" />
          <p>iPhone 7 Black</p>
          <p>AED 2000</p>
        </div>

        <div className="fl w-100 w-third-ns pa2">
          <img src={product} alt="iPhone" />
          <p>iPhone 8 Black</p>
          <p>AED 3000</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
