import React from "react";
import "../assets/styles/components/ProgressBar.css";

const ProgressBar = () => (
  <section className="ProgressBar">
    <div className="data" id="active">
      <img src="../assets/static/Icono1-verde-blanco.svg" alt="" />
      <p>Tus datos</p>
    </div>
    <hr />
    <div className="payment no-active">
      <img src="../assets/static/Icono2-morado.svg" alt="" />
      <p>Pago</p>
    </div>
    <hr />
    <div className="soat no-active">
      <img src="../assets/static/Icono3-morado.svg" alt="" />
      <p>¡Recibe tu SOAT!</p>
    </div>
  </section>
);

export default ProgressBar;
