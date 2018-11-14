import React from "react";

const Footer = () => {
  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
      <small className="f6 db tc">
        © 2018 <b className="ttu">Nigel Marshal</b>, Some Rights Reserved
      </small>
      <div className="tc mt3">
        <a
          href="https://github.com/NigelMarshal"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="f6 dib ph2 link mid-gray dim"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nigelmarshal/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          className="f6 dib ph2 link mid-gray dim"
        >
          Linkedin
        </a>
        <a
          href="https://nigelmarshal.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfolio"
          className="f6 dib ph2 link mid-gray dim"
        >
          My website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
