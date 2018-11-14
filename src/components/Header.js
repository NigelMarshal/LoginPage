import React from "react";
import "./Header.scss";
import Tilt from "react-tilt";
const logo = require("../assets/img/carrefour-logo.png");
const search = require("../assets/img/search-icon.png");

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        {/* Logo amimation */}
        <Tilt
          className="Tilt"
          options={{ max: 55 }}
          style={{ height: 120, width: 200 }}
        >
          <div className="Tilt-inner">
            <img src={logo} alt="Carrefour-logo" />{" "}
          </div>
        </Tilt>
      </div>
      {/* Expansive search bar using CSS */}
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
