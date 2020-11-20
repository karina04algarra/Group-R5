import React,{Component} from 'react'

import {Link} from '@reach/router'

import '../assets/styles/components/Discount.css'


class Discount extends Component{ 
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  
  componentDidMount() {
    for(let i = 0; i < 10;i++){
      this.tick()
    }
  }
 
  tick() {
    let number = this.state.number
    this.setState({
      number: number + 1
    });
    console.log(this.setState.number)
  }

  render(){
    return(
      <>
        <div className="container">
          <p>Hemos entregado mas de</p>
    <h2>${this.state.number}</h2>
          <p>en descuentos</p>
        </div>
        <div>
          <p>Placa del vehiculo</p>
          <input type="text" placeholder="HTR616" />
          <Link to="/register"> Cotizar Gratis</Link> 
        </div>
      </>
    ) 
  }
}

export default Discount