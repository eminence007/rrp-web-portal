import './App.css';
import Nav from './components/Layouts/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Footer from './components/Layouts/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function App() {
  return (
    <div>
    <Router>
    <Nav/>
      <Switch>
        <Route exact path="/home">
            <Home/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
       
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;