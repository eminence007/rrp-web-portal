import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Home from './components/layout/Layout'
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