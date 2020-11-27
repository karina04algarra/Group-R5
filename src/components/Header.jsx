import React from "react";
// import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";

const Header = () => (
  <header className="header">
    <a
      href="https://www.grupor5.com/"
      target="_blank"
    >
      <img
        src="https://soat.grupor5.com/static/media/r5logo.f921bc01.svg"
        alt="logo"
      />
    </a>
    <a href="#">
      <img
        src="https://soat.grupor5.com/static/media/axa-colpatria.14e43578.png"
        alt="logo axa-colpatria"
      />
    </a>
  </header>
);

export default Header;