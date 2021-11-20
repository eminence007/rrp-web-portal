import React from 'react';
import Footer from './Footer'
import Header from './Header'
import classes from './Layout.module.css'


function Layout(props) {
    return (
     
      <>
      <Header/>
      <main className={classes.content}>{props.children}</main>
      <Footer/>
      </>

    )
}

export default Layout