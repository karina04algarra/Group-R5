import React,{useState,useEffect} from 'react'

import {Link} from '@reach/router'

import '../assets/styles/components/Discount.css'


const Discount =()=>{ 

  const timeF = 50
  const timeS = 50
  const timeT = 50
  let increase = 2

  const [state,setState]= useState({
    state: 0
  })

  const [stateFirst,setStateFirst]=useState({
    number: 850000,
    limitCount:850156
  })
  const [stateSecond,setStateSecond]=useState({
    number: 850000,
    limitCount:850280 
  })
  const [stateThird,setStateThird]=useState({
    number: 850000,
    limitCount:850386
  })

  useEffect(()=>{
    let i =stateFirst.number
    let num = setInterval(()=>{
      i = i + increase
      setStateFirst({number: i})
      if(i ===stateFirst.limitCount){
        setState({state:1})
        clearInterval(num)
        setStateFirst({number:850156})
        let iS =stateSecond.number
        let numS = setInterval(()=>{
          iS = iS + increase
        setStateSecond({number: iS})
        if(iS ===stateSecond.limitCount){
          setState({state:2})
          clearInterval(numS)
          setStateSecond({number:850280})
          let iT =stateThird.number
          let numT = setInterval(()=>{
          iT = iT + increase
          setStateThird({number: iT})
          if(iT ===stateThird.limitCount){
            clearInterval(numT)
            setStateThird({number:850386})
          }
        },timeT)
        }
      },timeS)
      }
    },timeF)
  },[])
let view = state.state === 0
let viewS = state.state === 1
let viewT = state.state === 2


    return(
      <>
        <div className="container">
          <p>Hemos entregado mas de</p>
    {view&&<h2>{stateFirst.number}</h2>}
    {viewS&&<h2>{stateSecond.number}</h2>}
    {viewT&&<h2>{stateThird.number}</h2>}
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

export default Discount