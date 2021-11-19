import React from 'react';
import TopNav from './TopNav'
import TopBanner from './TopBanner'
import './Header.css'


function Header(props) {
    return (
     
      <header className='sticky-header'>
      <TopBanner/>
      <TopNav/>
      </header>

    )
}

export default Header