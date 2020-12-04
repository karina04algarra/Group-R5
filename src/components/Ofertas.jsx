import React from 'react'
import '../assets/styles/components/Ofertas.css'
import Celular from '../assets/static/celular.png'
import Robo from '../assets/static/robo.png'
import Mascotas from '../assets/static/huella.png'

const Ofertas = ()=>{
  return (
<div className="ofertas">
    <p className="ofertas-p">Otras ofertas especiales:</p>

      <div className="s-celular">
        <p className="etiqueta-p">Seguro del Celular</p>
        <img className="img-ofertas" src={Celular} alt="celular" />
        <div className="Button-agregar">
          <p>Ver mas...</p>
          <button>Agregar</button>
        </div>
      </div>
          <div className="s-celular">
        <p className="etiqueta-p">Seguro por Robo</p>
        <img className="img-ofertas" src={Robo} alt="celular" />
        <div className="Button-agregar">
          <p>Ver mas...</p>
          <button>Agregar</button>
        </div>
      </div>
            <div className="s-celular">
        <p className="etiqueta-p">Seguro de mascotas</p>
        <img className="img-ofertas" src={Mascotas} alt="celular" />
        <div className="Button-agregar">
          <p>Ver mas...</p>
          <button>Agregar</button>
        </div>
      </div>
            <div className="s-celular">
        <p className="etiqueta-p">Seguro Por Robo</p>
        <img className="img-ofertas" src={Celular} alt="celular" />
        <div className="Button-agregar">
          <p>Ver mas...</p>
          <button>Agregar</button>
        </div>
      </div>
</div>
    
  
  )
}

export default Ofertas