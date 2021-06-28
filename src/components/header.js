import * as React from "react"
import logo from "../images/logo.png"
import { Navbar, Nav, NavDropdown, } from "react-bootstrap"
import "../styles/header.css"

const Header = () => (
  <Navbar sticky="top" expand="md" collapseOnSelect className="navbar" >
    <div className="brand_logo">
      <img src={logo} alt="logo" style={{ maxHeight: "70px" }} />
    </div>
    <Navbar.Toggle aria-controls="nav_menu" />
    <Navbar.Collapse id="nav_menu" className="justify-content-end" >
      <Nav.Link>HOME</Nav.Link>
      <NavDropdown title="COURSES" >
        <NavDropdown.Item href="https://www.upliftcodecamp.com/weekday_bootcamp.html">FULLSTACK BOOTCAMP</NavDropdown.Item>
        <NavDropdown.Item href="https://www.upliftcodecamp.com/weekend_courses.html" >SHORT COURSES</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="https://www.upliftcodecamp.com/partners.html">PARTNERS</Nav.Link>
      <Nav.Link href="https://www.upliftcodecamp.com/careers.html">CAREERS</Nav.Link>
      <Nav.Link href="https://www.upliftcodecamp.com/about.html">ABOUT US</Nav.Link>
    </Navbar.Collapse>
  </Navbar >
)

export default Header
