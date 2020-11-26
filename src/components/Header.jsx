import React from "react";
// import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";

const Header = () => (
  <header className="header">
    <a
      href="https://soat.grupor5.com/?utm_source=google&utm_medium=cpc&utm_campaign=branded-search&gclid=CjwKCAiAnvj9BRA4EiwAuUMDf24IknqUiIB3U6Gj5ueQb_fHB5uOqx2kuR0tIrRnd3khIHpYCGFPjhoCCjUQAvD_BwE"
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
