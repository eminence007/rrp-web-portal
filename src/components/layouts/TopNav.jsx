import React from 'react';
import classes from './TopNav.module.css'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaHome} from "react-icons/fa"
import { IconContext } from "react-icons"



function TopNav() {
    return ( 
        <Navbar collapseOnSelect expand="sm" variant="dark" className={classes['navigation-section']}>
        <Container>
        <Navbar.Brand as={Link} to="/home">
        <IconContext.Provider value={{ className: classes["home-icon"] }}>
        <FaHome />
        </IconContext.Provider>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="दस्तावेज़" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/drafts">ड्राफ्ट</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/articles">लेख</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/faq">सामान्य प्रश्न</NavDropdown.Item> */}
              
            </NavDropdown>
            {/* <NavDropdown title="गतिविधियों" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/elections">चुनाव</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/meetings">बैठकों</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/citizen-duty-day">नागरिक कर्तव्य दिवस</NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="हमारे बारे में" id="collasible-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/about-movement">आंदोलन</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/about-party">पार्टी</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/about-president">अध्यक्ष</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us">संपर्क करें</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        </Container>
      </Navbar>
    )
}

export default TopNav
