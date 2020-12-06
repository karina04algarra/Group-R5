import React from "react";
import "../assets/styles/components/ProgressBar.css";

const ProgressBar = () => (
  <section className="ProgressBar">
    <div className="data" id="active">
      <img src="https://i.postimg.cc/zf2v3rSs/uno-verde.png" alt="" />
      <p>Tus datos</p>
    </div>
    <hr />
    <div className="payment no-active">
      <img src="https://i.postimg.cc/Zq50TR3P/dos-morado.png" alt="" />
      <p>Pago</p>
    </div>
    <hr />
    <div className="soat no-active">
      <img src="https://i.postimg.cc/3RPwCFq9/tres-morado.png" alt="" />
      <p>¡Recibe tu SOAT!</p>
    </div>
  </section>
);

export default ProgressBar;