import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap"
import "../styles/footer.css"
export default function homeSection1() {
  return (
    <div className="Footer">
      <Container fluid>
        <Row className="d-flex align-items-center" >
          <Col sm={12} md={6} lg={6}>
            <Navbar className='flex-direction-column'>
              <NavDropdown title="COURSES" >
                <NavDropdown.Item>FULLSTACK BOOTCAMP</NavDropdown.Item>
                <NavDropdown.Item>SHORT COURSES</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>PARTNERS</Nav.Link>
              <Nav.Link>BLOG</Nav.Link>
              <Nav.Link>CAREERS</Nav.Link>
              <Nav.Link>ABOUT US</Nav.Link>
              <Nav.Link>CONTACT US</Nav.Link>
              <Nav.Link>PRIVACY POLICY</Nav.Link>
            </Navbar>
          </Col>
          <Col sm={12} md={6} lg={6}  >

            <ul className="d-flex justify-content-center accounts">
              <a href='https://www.facebook.com/upliftcodecamp'>      <li><i className="fab fa-facebook"></i></li> </a>
              <a href="https://ph.linkedin.com/company/uplift-code-camp"> <li><i className="fab fa-linkedin"></i></li></a>
              <a href="https://youtu.be/b7tJeEoC3nc">  <li><i className="fab fa-youtube"></i></li></a>
            </ul>
            <a href="contact@upliftcodecamp.com">contact@upliftcodecamp.com</a>

            <div>
              <h6>REVIEW ON</h6>
              <ul className="d-flex justify-content-center stars">
                <li> <i className="fas fa-star"></i></li>
                <li> <i className="fas fa-star"></i></li>
                <li> <i className="fas fa-star"></i></li>
                <li> <i className="fas fa-star"></i></li>
                <li> <i className="fas fa-star"></i></li>
              </ul>
              <img src="https://www.upliftcodecamp.com/assets/images/coursereport-logo.png" alt="img" />
            </div>
          </Col>
        </Row>
        <p className="text-align-center mt-3">Clone Code by:@Digay</p>
      </Container>
    </div>
  )
}