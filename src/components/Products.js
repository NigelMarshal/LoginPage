import React from "react";

const Products = () => {
  const product = require("../assets/img/product-card.png");
  return (
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-third-ns pa2">
          <img src={product} alt="iPhone" />
        </div>
        <div className="fl w-100 w-third-ns pa2">
          <img src={product} alt="iPhone" />
        </div>

        <div className="fl w-100 w-third-ns pa2">
          <img src={product} alt="iPhone" />
        </div>
      </div>
    </div>
  );
};

export default Products;
