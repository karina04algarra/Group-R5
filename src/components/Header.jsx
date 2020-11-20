import React from "react";
import {Link} from '@reach/router'
import "../assets/styles/components/Header.css";

const Header = () => (
  <header className="header">
    <Link to="#">
      <img
        src="https://soat.grupor5.com/static/media/r5logo.f921bc01.svg"
        alt="logo"
      />
    </Link>
    <Link to="#">
      <img
        src="https://soat.grupor5.com/static/media/axa-colpatria.14e43578.png"
        alt="logo axa-colpatria"
      />
    </Link>
  </header>
);

export default Header;