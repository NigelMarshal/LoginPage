import React from "react";

import "./Header.scss";

const Header = () => {
  const logo = require("../assets/img/carrefour-logo.png");
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Carrefour-logo" />
      </div>
      <div class="search">
        <input id="searchCheck" type="checkbox" />
        <label class="btn" for="searchCheck">
          <i class="fa fa-search" />
        </label>
        <input
          class="searchbar"
          type="text"
          placeholder="Enter a search term..."
        />
      </div>
    </div>
  );
};

export default Header;
