import React from "react";
import "../assets/styles/components/Footer.css";

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__container">
        <div className="items">
          <img
            src="https://soat.grupor5.com/static/media/visa.b1684820.svg"
            alt="visa"
          />
          <img
            src="https://soat.grupor5.com/static/media/mastercard.5450f163.svg"
            alt="mastercard"
          />
          <img
            src="https://soat.grupor5.com/static/media/pse.6c803286.png"
            alt="pse"
          />
        </div>
        <div className="userData">
          <p>
            <span>Horario de atención línea telefónica</span>
            <br />
            lun - vie de 8:30 am a 5:30 pm
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Footer;