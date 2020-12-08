import React from 'react'
import { Router } from "@reach/router"

import Register from '../pages/Register'
import Home from '../pages/Home'



const App = () => {
return(
  <Router>
        <Home path="/"/>
        <Register  path="/register"/>
  </Router>
)
}

export default App

