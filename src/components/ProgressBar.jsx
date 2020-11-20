import React from "react";
import "../assets/styles/components/ProgressBar.css";
// import Number1 from "../assets/static/Icono1-verde-blanco.svg";
// import Number2 from "../assets/static/Icono2-morado.svg";
// import Number3 from "../assets/static/Icono3-morado.svg";

const ProgressBar = () => (
  <section className="ProgressBar">
    <div className="data" id="active">
      {/* <img src={Number1} alt="" /> */}
      <p>Tus datos</p>
    </div>
    <hr />
    <div className="payment no-active">
      {/* <img src={Number2} alt="" /> */}
      <p>Pago</p>
    </div>
    <hr />
    <div className="soat no-active">
      {/* <img src={Number3} alt="" /> */}
      <p>¡Recibe tu SOAT!</p>
    </div>
  </section>
);

export default ProgressBar;