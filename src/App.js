import './App.css';
import Nav from './components/layouts/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Layout from './components/layouts/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function App() {
  return (

    <Router>
    <Layout>
      <Switch>
        <Route exact path="/home">
            <Home/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
       
      </Switch>
      </Layout> 
    </Router>
   

  );
}

export default App;