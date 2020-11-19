import { useEffect, useState } from "react"
import React from 'react'

const Form =()=>{

  const [state,setState]=useState({
    form:{ 
      email:'',
      phone:''
    },
    gift: false,
    loading: null,
    error: null
  })


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e)
  }

  const handleClick = (e)=>{
    e.preventDefault()
    console.log('form success')
    fipflop()
  }

  const fipflop= ()=>{
    if(!state.gift){
      setState({gift:true})
    }
      
    console.log(state.gift)
  }



  return(
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h2>Por favor ingresa los datos para calcular tu descuento</h2>
        <div>
          <label htmlFor="email">correo</label>
          <input type="email" name="email"  />
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
          <p>La veracidad de tus datos impacta tu descuento</p>
          <div>
            <i>Icono de regalo <img src="" alt=""/></i>
          {!state.gift &&(

          

          <button onClick={(e)=>handleClick(e)} >
            Calcular descuento
          </button>
          )
          }
          {state.gift&&(
            <h1>Tu Soat cuesta $500.000.000</h1>
          )

          }
          </div>
        </div>
      </form>
  )
}

export default Form