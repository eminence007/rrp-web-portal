import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layouts/Layout';
import Home from './components/pages/Home'
import Drafts from './components/pages/Drafts'
import Articles from './components/pages/Articles'
import AboutParty from './components/pages/AboutParty'
import AboutPresident from './components/pages/AboutPresident'
import AboutMovement from './components/pages/AboutMovement'
import Signup from './components/pages/Signup'
import ArticleEditor from './components/editor/ArticleEditor'
import React from 'react'
import Article from './components/ui/Article';
import ProfileCard from './components/ui/ProfileCard';
import ImageCropBtn from './components/ui/ImageCropBtn';

function App() {
  return (
    
    <Router>
     <Layout>
    
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
        <Route exact path="/about-party">
            <AboutParty/>
        </Route>
        <Route exact path="/about-president">
            <AboutPresident/>
        </Route>
        <Route exact path="/about-movement">
            <AboutMovement/>
        </Route>
        <Route exact path="/editor">
            <ArticleEditor/>
        </Route>
        <Route exact path="/signup">
            <Signup/>
        </Route>
        <Route exact path="/articles/:articleuri">
            <Article/>
        </Route>
        <Route exact path="/profile">
            <ProfileCard/>
        </Route>
        <Route exact path="/imagecrop">
            <ImageCropBtn/>
        </Route>

   
      </Layout> 
      
    </Router>
    
  
  );
}

export default App;
