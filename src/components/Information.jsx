import React from "react";

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
          <h2>Beneficios</h2>
          <ol>
            <li>
              20% de descuento en moda Dafiti.com.co Válido hasta el 30 de
              noviembre o agotar existencias. Condiciones aquí.
            </li>
            <li>
              Bono de $40.000 para hacer mercado con Cornershop. Solo para
              clientes que compraron su anterior SOAT con Grupo R5. Válido hasta
              el 30 de noviembre o agotar existencias. Condiciones aquí.
            </li>
            <li>Iniciará vigencia el día después de su vencimiento</li>
            <li>Entrega inmediata por correo y SMS</li>
          </ol>
        </div>
        <div className="general__container-right">
          <div className="discounts">
            <Discount />
            <p>
              Al continuar aceptas nuestros Términos y Condiciones & Política de
              Privacidad para el tratamiento de tus datos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;