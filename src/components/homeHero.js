import React from 'react'
import { Col, Row, Container, Button } from "react-bootstrap"
export default function homeHero() {
  return (
    <div className="home_hero">
      <Container>
        <Row className="hero_details">
          <Col sm={12} md={6} lg={6}>
            <h2>Become a software developer</h2>
            <p >Affordable, high-quality software development courses. Study part-time. Learn full-stack.</p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <h4>Get Started</h4>
            <a href="https://www.upliftcodecamp.com/weekday_bootcamp.html">
              <Button>Learn More</Button>
            </a>
          </Col>
        </Row>
      </Container>

    </div>


  )
}
