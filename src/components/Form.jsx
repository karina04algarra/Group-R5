import { useEffect, useState } from "react";
import "../assets/styles/components/Form.css";
import React from "react";

const Form = () => {
  const [state, setState] = useState({
    form: {
      email: "",
      phone: "",
    },
    gift: false,
    loading: null,
    error: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("form success");
    fipflop();
  };

  const fipflop = () => {
    if (!state.gift) {
      setState({ gift: true });
    }

    console.log(state.gift);
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>
          Por favor ingresa los siguientes datos para calcular tu descuento
        </h2>
        <form
          className="register__container-form"
          id="form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <p>Email</p>
          <input
            className="input"
            type="email"
            placeholder="nombre@email.com"
            id="email"
          />
          <p>Celular</p>
          <input
            className="input"
            type="tel"
            placeholder="123456789"
            id="phone"
          />
          <h3>La veracidad de tus datos impacta tu descuento.</h3>
          <div className="container__button">
            {!state.gift && (
              <>
                <div className="container__button-img">
                  <img
                    src="https://i.postimg.cc/c1VK1Lqg/gift-icon.png"
                    alt="Icono"
                  />
                </div>
                <button
                  className="button"
                  type="button"
                  onClick={(e) => handleClick(e)}
                >
                  Calcular descuento
                  <img
                    src="https://i.postimg.cc/wBXXdR4k/arrow-right.png"
                    alt="arrow"
                    className="arrowRight"
                  />
                </button>
              </>
            )}
            {state.gift && (
              <div className="valueDiscount_Container">
                <div className="valueDiscount_section">
                  <img
                    src="https://i.postimg.cc/LXHs9by0/background-Mesa-de-trabajo-1.png"
                    alt=""
                  />
                  <div className="valueDiscount_section-text">
                    <p>Precio con descuento</p>
                    <h3>$500.000</h3>
                    <p>
                      <span>Precio establecido por ley $600.000*</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>
    </section>
  );
};

export default Form;
