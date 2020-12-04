import React from 'React';
import tarjeta from '../assets/static/tarjeta-de-Credito.png'
import '../assets/styles/components/MetodoPago.css'
import Efecty from  '../assets/static/logo-efecty.png'
import Paypal from  '../assets/static/logo-paypal.png'
import master from  '../assets/static/mastercard.png'
import visa from  '../assets/static/visa.png'
const MetodoPago = () => {
    return (

    <div className="carousel">
        <div className="carousel_header">
            <img   className="tarjeta" src={tarjeta} alt="tarjeta"/> 
            <p className="carousel__container-Elige">Elige Metodo de pago</p>
        </div>
        <div className="carousel__container"> 
            <div className="carousel-item">
            <p className="carousel-item-title-pse">Tarjeta debito</p>
                <img   className="carousel-item__pse" src="https://www.banrep.gov.co/sites/default/files/images/pse-forma.png" /> 
                <div className="carousel-item__details">
                <p className="carousel-item__details--title">Costo trasaccional: $0</p>
                 </div> 
            </div> 
            <div className="carousel-item">
            <p className="carousel-item-title">Tarjeta Credito</p>
              <div className="carousel-item__img-grap">
                <img   className="carousel-item__master" src={master} /> 
                <img   className="carousel-item__visa" src={visa} /> 
            </div>
                <div className="carousel-item__details">
                <p className="carousel-item__details--title">Costo trasaccional: $0</p>
                 </div> 
            </div>
            <div className="carousel-item">
            <p className="carousel-item-title"> Paypal</p>
                <img   className="carousel-item__efecty" src={Paypal} /> 
                <div className="carousel-item__details">
                <p className="carousel-item__details--title">Costo trasaccional: $0</p>
                 </div> 
            </div> 
            <div className="carousel-item">
            <p className="carousel-item-title">Efecty</p>
                <img   className="carousel-item__efecty" src={Efecty} /> 
                <div className="carousel-item__details">
                <p className="carousel-item__details--title">Costo trasaccional: $0</p>
                 </div> 
            </div> 
        </div>

      <div className="container_fechas">
         <p className="container_fechas-inicio">Fecha de inicio del SOAT  <br></br>  *Fecha minima por ley</p><p>21 abril del 2021</p>
       </div>
         <div className="container_fechas">
          <p>Costo Transanccional</p><p>$0</p>
       </div>

      <div className="valores">

         <div className="container_valores">
             <p>Precio</p> <p>$0</p>
         </div>
                <div className="container_valores">
                    <p>Otros Productos</p> <p>$0</p>
                </div>
                 <div className="container_valores">
                     <p>Descuento SOAT</p>
                        <p>$0</p>
                  </div>
                    <div className="container_valores">
                        <p>Total a Pagar</p> <p>$0</p>
                 </div>
           </div>
    
     <div className="Button">
     <button  className="Button-pago">Pagar: $453.000 </button>
     </div>
    </div>
   );
}

export default MetodoPago;
