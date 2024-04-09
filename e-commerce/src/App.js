
import './App.css';
import Header from './Header';
import Home from "./Home";
import Payment from './Payment';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useStateValue}from "./StateProvider";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Footer from './Footer'
import ProductDetails from './ProductDetails';
const promise=loadStripe("pk_test_51KXOWHSAsX35jZntcEm3Nuzmp6hD2bDmZ8oKBaqWAIgJl0jh7qyEk6Xs80XQMkUubNSO0T3pwuDUcmWM6cpQZd5v00FQ7NwJJ4");

function App() {

   const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is >>>',authUser);

      if(authUser){
         dispatch({
           type:"SET_USER",
           user:authUser
         })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <Header />
    <div className="App">
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/productdetails">
        <ProductDetails />
      </Route>
      <Route path="/checkout">
    
    <Checkout />
    </Route>
    <Route path="/payment">
      <Elements stripe={promise}>
      <Payment /></Elements>
    </Route>
     
    <Route path="/">
    
    <Home />
    <Footer />
    </Route>
    </Switch>
    </div>
    
    </Router>
  );
}

export default App;