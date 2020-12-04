import React from "react";
import ItemsList from "./ItemsList";
import Discount from "./Discount";
import "../assets/styles/components/Information.css";

const Information = () => {
  return (
    <>
      <div className="general__container">
        <div className="general__container-left">
          <h1>
            Compra y recibe tu <br />
            SOAT al instante
          </h1>
          <p>
            <span>
              ¡Premiamos a los buenos conductores con hasta <br />
              $75,000 de descuento!
            </span>
          </p>
          <div className="list-container">
            <h2>Beneficios</h2>
            <ItemsList />
          </div>
        </div>
        <div className="general__container-right">
          <div className="discounts">
            <Discount />
            <div className="information">
              <p>
                Al continuar aceptas nuestros
                <span> Términos y Condiciones </span>&
                <span> Política de Privacidad </span>
                para el tratamiento de tus datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
