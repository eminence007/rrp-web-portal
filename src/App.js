import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout';
import Home from './components/pages/Home'
import Drafts from './components/pages/Drafts'
import Articles from './components/pages/Articles'
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
        <Route exact path="/drafts">
            <Drafts/>
        </Route>
        <Route exact path="/articles">
            <Articles/>
        </Route>
      </Switch>
      </Layout> 
      
    </Router>
    
  
  );
}

export default App;
