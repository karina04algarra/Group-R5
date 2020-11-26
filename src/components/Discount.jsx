import React, { Component } from "react";

import { Link } from "@reach/router";

class Discount extends Component {
  render() {
    return (
      <>
        <div className="discount">
          <p>Hemos entregado mas de</p>
          <h2>$</h2>
          <p>en descuentos</p>
          <div>
            <p>Placa del vehiculo</p>
            <input type="text" placeholder="HTR616" />
            <Link to="/register"> Cotizar Gratis</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Discount;
