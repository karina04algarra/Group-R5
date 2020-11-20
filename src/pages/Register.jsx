import React from 'react'
import ProgressBar from '../components/ProgressBar'
import Header from '../components/Header'
import Form from '../components/Form'
import '../assets/styles/pages/Register.css'

const Register = () =>{
  return(
    <div>
      <Header/>
      <div class="general_container">
        <div class="general__container-back">
         <ProgressBar/>
         <Form/>
        </div>
      </div>
    </div>
  )
}

export default Register