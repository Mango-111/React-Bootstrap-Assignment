import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Carr from './components/Carr';
import Navv from './components/Navv';
import Products from './components/Products';
import Main from './components/Main';
import Deals from './components/Deals';
import Footer from './components/Footer';
import ContactUS from './components/ContactUS';

function App() {
  return (
    <>
    <Router>
    <Navv/>
    <Carr/>
    <Products/>
    <Main/>
    <Deals/>
    <Footer/>
        <Switch>
        <Route path="/ContactUS" exact component={ContactUS}/>
        </Switch>
      </Router> 
    
    </>
  );
}

export default App;
