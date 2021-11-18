import React from 'react';
import Footer from './Footer'
import TopNav from './TopNav'
import TopBanner from './TopBanner'


function Layout(props) {
    return (
     
      <>
      <TopBanner/>
      <TopNav/>
      <main className='mx-md-3 mx-sm-0'>{props.children}</main>
      <Footer/>
      </>

    )
}

export default Layout