import React from 'react'
import '../assets/styles/components/TuCarro.css'
import colpatria from '../assets/static/colpatria.png'
import carro from '../assets/static/carro-n.png'

const TuCarro = ()=>{
  return (

    <div className="container">
         <div className="vehiculo">
          <h2 className="vehiculo_title"> <img class="carro-n"src={carro} alt="img-minicarro"/> Tu Vehículo: </h2>
        </div>
        <div className="container_Data">
         
                <div className="container_data-client">
                <p className="title">ASEGURADORA:</p> <p><img  className="carro-n" src={colpatria} size="width= 40px; "   alt="colpatria" /></p>
                </div>

            <div className="container_data-client">
                <p className="title">PLACA DEL VEHICULO:</p> <p>JH23B1</p>
            </div>


            <div className="container_data-client">
                <p className="title">MARCA:</p>  <p>CHEVROLET</p>
            </div>

            <div className="container_data-client">
                <p className="title">LINEA:</p> <p>CROSS FOX</p>
            </div>

            <div className="container_data-client">
                <p className="title">MODELO:</p>  <p>2014</p>
            </div>

            <div className="container_data-client">
                <p className="title" >NOMBRE:</p> <p>PETROLEUM AND</p>
            </div>
            <div className="container_data-client">
                <p className="title">APELLIDO:</p> <p>GAS SOLUTION</p>
            </div>
        
      </div>
      {/* <p className="confirmacion">
    <input type="checkbox" name="acepto"/>
    Confirmo que esta informacion pertenece a mi vehiculo.
     </p> */}
</div>

 

   );

   
}

export default TuCarro;