import React from "react";
import img from "../images/PIXELS.svg";

const Header = ({ year }) => (
  <header className="header">
    <img src={img} className="header-logo" />
    <h2>20{year}</h2>
  </header>
);

export default Header;
