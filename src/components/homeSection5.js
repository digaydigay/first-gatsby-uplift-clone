import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"

export default function HomeFeuturedWorks() {
  return (
    <Container className="Section5">
      <h2>Featured Student's Works</h2>
      <Row className="d-flex align-items-center" >
        <Col sm={12} md={6} lg={6} className="card-image ">
          <img src="https://www.upliftcodecamp.com/assets/images/pizzagallery.png" alt="img" />
          <a href="https://miyuribueno.github.io/pizzagallery/"><Button className="show">PREVIEW</Button></a>
          <div className="overlay"></div>
        </Col>
        <Col sm={12} md={6} lg={6} className="card-image show" >
          <div className="embed" >
            <img src="https://www.upliftcodecamp.com/assets/images/minesweeper.png" alt="img" />
            <a href="https://emaieloh.github.io/minesweeper/mini-game.html"><Button className="show">PREVIEW</Button></a>
            <div className="overlay"></div>
          </div>
        </Col>
      </Row>

    </Container>
  )
}
