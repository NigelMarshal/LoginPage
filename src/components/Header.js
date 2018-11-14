import React from "react";
import "./Header.scss";
const logo = require("../assets/img/carrefour-logo.png");
const search = require("../assets/img/search-icon.png");

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Carrefour-logo" />
      </div>
      <div className="header__search">
        <input id="searchTerm" type="checkbox" />
        <label className="header__searchbar--icon" htmlFor="searchTerm">
          <img src={search} alt="Search-icon" />
        </label>
        <input
          className="header__searchbar--expanded"
          type="text"
          placeholder="Enter a search term."
        />
      </div>
    </div>
  );
};

export default Header;
