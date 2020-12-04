import React from 'react'
import TuCarro from '../components/TuCarro'
import MetodoPago from '../components/MetodoPago'
import Ofertas from '../components/Ofertas'
import '../assets/styles/components/PagosGlobal.css'



const Pagos =()=>{
  return(
    <>
    <div className="container_principal">
       <TuCarro /> 
      <MetodoPago/>
    </div>
    <Ofertas/>
    </>
  )
}

export default Pagos;