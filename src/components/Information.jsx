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
          <div className="list-container">
            <h2>Beneficios</h2>
            <ol>
              <img
                src="https://soat.grupor5.com/static/media/dafiti.00a35a2f.svg"
                alt="dafiti"
              />
              <li>
                20% de descuento en moda Dafiti.com.co Válido hasta el 30 de
                noviembre o agotar existencias. Condiciones aquí.
              </li>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAASCAYAAAD15uiRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlBJREFUeNrsV4tt20AMjYMMcBtUG9iZIOoGzgTRBnUmiDKBsoGcCZxMIGUCJxO4mUDeQCWBR+CBvTsBLmDAhQgQkk48fh+p09XVTDOdkxZ+YRzHIJe1cIGlo/B2sVgcLyEg8b+C7+rz73MZXQsP4980wKFLSFwHn8tzGVxRojokUbnF2n5OXN5gm0BisFZGMg2ZO3YSehqw3ld0X+PaQUdwNsyHvco6nby/QqF3kD8Ib1wcDe1rIvF0tLel+CqKYUc61qnEGYVMcgMMWfseaN/a6TGqycnRjYKWAmG0m0yT0bmjJA/WERlbNSVmpKSNpCdAd4qqVOK6CVTWhLLgHDm4IDcRNFsiSm5/CmAVKVDwwTudFWRCwtaGY6NkVmRrbz5TjGq/cDEOScSdMj8sSNJzmNrH9sY8lTHfKCGGrHrCVkdzfB9pXQNEHUOXJdeeb+jdp7Aq3shn/MVtKnAsMfLt7J9PPQY8R9aiutRH8auX2wdhDfJJnqeOTMcJ/3l/kYvxmu4fcW0wLEuwVlIRpFB/hcwTqldgTqnS/sSPUoGimeNatK3wUvgtdhZDe6k/JZK9TSQkFrjqK+yDAGTax+OD5H+hRUvEWCQBAcHsOY6Gsn+/Ss3KRPsMNOhXCbtNbIxk5Mt/sNW6OZ6M0beqwn8rL98A/R+o0hdXXq73SOIdqvDu/iyeI5V5RTV5/Sf+UHrZ+yk6b2F3Cbl3We9jLezk1c9v6OmBYG/rHuj0tu4g96GxO59foNeQer4/kUskQlydk7ueUzXTTDP9x/RHgAEAsDsFl/EBIWIAAAAASUVORK5CYII="
                alt="corner"
              />
              <li>
                Bono de $40.000 para hacer mercado con Cornershop. Solo para
                clientes que compraron su anterior SOAT con Grupo R5. Válido
                hasta el 30 de noviembre o agotar existencias. Condiciones aquí.
              </li>
              <span>
                <img
                  src="https://soat.grupor5.com/static/media/calendar.62127374.svg"
                  alt="calendar"
                />
              </span>
              <li>Iniciará vigencia el día después de su vencimiento</li>
              <span>
                {" "}
                <img
                  src="https://soat.grupor5.com/static/media/PhoneSms.c06e4c40.svg"
                  alt="phone"
                />
              </span>
              <li>Entrega inmediata por correo y SMS</li>
            </ol>
          </div>
        </div>
        <div className="general__container-right">
          <div className="discounts">
            <Discount />
            <p>
              Al continuar aceptas nuestros <br />
              <span>Términos y Condiciones </span>&
              <span> Política de Privacidad </span>
              para el tratamiento de tus datos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
