import React from 'react';
import Footer from './Footer'
import Nav from './Nav'
import TopBanner from './TopBanner'


function Layout(props) {
    return (
     
      <>
      <TopBanner/>
      <Nav/>
      <main>{props.children}</main>
      <Footer/>
      </>

    )
}

export default Layout