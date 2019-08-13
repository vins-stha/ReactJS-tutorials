import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Detail from './components/Detail'

import Default from './components/Default'
import Cart from './components/Cart'
//import ProductList from './components/ProductList'
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <React.Fragment>
    <NavBar/>
      <Switch>

          <Route path='/detail' component={Detail}></Route>
          <Route path="/cart" component={Cart}></Route>

          <Route exact path="/" component={ProductList}></Route>
          <Route  component={Default}/>

      </Switch>

    </React.Fragment>
  );
}

export default App;
