import React from "react";
import "../assets/styles/components/ItemsList.css";

const ItemsList = () => (
  <>
    <div className="BenefitsList">
      <div className="item1">
        <img
          src="https://soat.grupor5.com/static/media/dafiti.00a35a2f.svg"
          alt="dafiti"
        />
        <div className="item-text">
          <p>
            20% de descuento en moda Dafiti.com.co
            <span>
              Válido hasta el 30 de noviembre o agotar existencias. Condiciones
              aquí.
            </span>
          </p>
        </div>
      </div>
      <div className="item2">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAASCAYAAAD15uiRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlBJREFUeNrsV4tt20AMjYMMcBtUG9iZIOoGzgTRBnUmiDKBsoGcCZxMIGUCJxO4mUDeQCWBR+CBvTsBLmDAhQgQkk48fh+p09XVTDOdkxZ+YRzHIJe1cIGlo/B2sVgcLyEg8b+C7+rz73MZXQsP4980wKFLSFwHn8tzGVxRojokUbnF2n5OXN5gm0BisFZGMg2ZO3YSehqw3ld0X+PaQUdwNsyHvco6nby/QqF3kD8Ib1wcDe1rIvF0tLel+CqKYUc61qnEGYVMcgMMWfseaN/a6TGqycnRjYKWAmG0m0yT0bmjJA/WERlbNSVmpKSNpCdAd4qqVOK6CVTWhLLgHDm4IDcRNFsiSm5/CmAVKVDwwTudFWRCwtaGY6NkVmRrbz5TjGq/cDEOScSdMj8sSNJzmNrH9sY8lTHfKCGGrHrCVkdzfB9pXQNEHUOXJdeeb+jdp7Aq3shn/MVtKnAsMfLt7J9PPQY8R9aiutRH8auX2wdhDfJJnqeOTMcJ/3l/kYvxmu4fcW0wLEuwVlIRpFB/hcwTqldgTqnS/sSPUoGimeNatK3wUvgtdhZDe6k/JZK9TSQkFrjqK+yDAGTax+OD5H+hRUvEWCQBAcHsOY6Gsn+/Ss3KRPsMNOhXCbtNbIxk5Mt/sNW6OZ6M0beqwn8rL98A/R+o0hdXXq73SOIdqvDu/iyeI5V5RTV5/Sf+UHrZ+yk6b2F3Cbl3We9jLezk1c9v6OmBYG/rHuj0tu4g96GxO59foNeQer4/kUskQlydk7ueUzXTTDP9x/RHgAEAsDsFl/EBIWIAAAAASUVORK5CYII="
          alt="corner"
        />
        <div className="item-text">
          <p>
            Bono de $40.000 para hacer mercado con Cornershop.
            <span>
              Solo para clientes que compraron su anterior SOAT con Grupo R5.
              Válido hasta el 30 de noviembre o agotar existencias. Condiciones
              aquí.
            </span>
          </p>
        </div>
      </div>
      <div className="item3">
        <img
          src="https://soat.grupor5.com/static/media/calendar.62127374.svg"
          alt="calendar"
        />
        <div className="item-text">
          <p>Iniciará vigencia el día después de su vencimiento</p>
        </div>
      </div>
      <div className="item4">
        <img
          src="https://soat.grupor5.com/static/media/PhoneSms.c06e4c40.svg"
          alt="phone"
        />
        <div className="item-text">
          <p>Entrega inmediata por correo y SMS</p>
        </div>
      </div>
    </div>
  </>
);

export default ItemsList;
