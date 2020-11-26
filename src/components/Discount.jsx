import React, { Component } from "react";

import { Link } from "@reach/router";

class Discount extends Component {
  render() {
    return (
      <>
        <div>
          <p>Hemos entregado mas de</p>
          <h2>$</h2>
          <p>en descuentos</p>
        </div>
        <div>
          <p>Placa del vehiculo</p>
          <input type="text" placeholder="HTR616" />
          <Link to="/register"> Cotizar Gratis</Link>
        </div>
      </>
    );
  }
}

export default Discount;
