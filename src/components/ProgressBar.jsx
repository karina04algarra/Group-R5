import React from "react";
import "../assets/styles/components/ProgressBar.css";

const ProgressBar = () => (
  <section className="ProgressBar">
    <div className="data" id="active">
      <img
        src="https://i.postimg.cc/gk8xxbdM/Icono1-verde-blanco.pngs"
        alt=""
      />
      <p>Tus datos</p>
    </div>
    <hr />
    <div className="payment no-active">
      <img src="https://i.postimg.cc/fRsJXqRM/Icono2-morado.png" alt="" />
      <p>Pago</p>
    </div>
    <hr />
    <div className="soat no-active">
      <img src="https://i.postimg.cc/KjgysbQC/Icono3-morado.png" alt="" />
      <p>¡Recibe tu SOAT!</p>
    </div>
  </section>
);

export default ProgressBar;


