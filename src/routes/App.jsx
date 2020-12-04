import React from 'react'
import { Router } from "@reach/router"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Pagos from '../pages/Pagos';
import Layout from '../components/Layout';
import MetodoPago from '../components/MetodoPago';
import TuCarro from '../components/TuCarro';
import Ofertas from '../components/Ofertas';
const App = () => (
    <BrowserRouter>
    <Layout>
     <Switch>
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/Pagos" component={Pagos}/>
      <Route exact path="/MetodoPago" component={MetodoPago}/>
      <Route exact path="/TuCarro" component={TuCarro}/>
      <Route exact path="/Ofertas" component={Ofertas} />
     </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;
=======
import Register from '../pages/Register'
import Home from '../pages/Home'



const App = () => (
  <Router>
        <Home path="/"/>
        <Register path="/register"/>
  </Router>
 )


export default Appster