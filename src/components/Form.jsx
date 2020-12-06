import { useEffect, useState } from "react";
import "../assets/styles/components/Form.css";
import { Link } from "@reach/router";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
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
    <>
      <Header />
      <div
        className={
          "total_container " + (state.gift ? "total_container-change" : null)
        }
      >
        <div className="total__container-back">
          <ProgressBar />
          <section className="register">
            <section
              className={
                "register__container " +
                (state.gift ? "register__container-height" : null)
              }
            >
              {!state.gift && (
                <h2>
                  Por favor ingresa los siguientes datos para calcular tu
                  descuento
                </h2>
              )}
              {state.gift && (
                <h2>
                  Disfruta de éste y muchos más descuentos que tenemos para ti
                </h2>
              )}

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
                    <>
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
                      <div className="container__button-item">
                        <Link to="/register">
                          Comprar
                          <img
                            src="https://i.postimg.cc/wBXXdR4k/arrow-right.png"
                            alt="arrow"
                            className="arrow__Right"
                          />
                        </Link>
                      </div>
                      <div className="lastIcons">
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
                    </>
                  )}
                </div>
              </form>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Form;
