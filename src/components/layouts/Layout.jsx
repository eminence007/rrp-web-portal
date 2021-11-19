import React from 'react';
import Footer from './Footer'
import TopNav from './TopNav'
import TopBanner from './TopBanner'


function Layout(props) {
    return (
     
      <>
      <TopBanner/>
      <TopNav/>
      <main>{props.children}</main>
      <Footer/>
      </>

    )
}

export default Layout