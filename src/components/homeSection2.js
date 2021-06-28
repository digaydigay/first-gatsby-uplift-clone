import React from 'react'
import { Container, Card, Col, Row } from "react-bootstrap"

export default function HomeSection2() {
  return (
    <Container className='Section2'>
      <Row>
        <Col md={4} className="mb-5">
          <a href="https://www.upliftcodecamp.com/weekday_bootcamp.html">
            <Card>
              <Card.Img src="https://www.upliftcodecamp.com/assets/images/code.jpg" alt="img" />
              <Card.Body>
                <Card.Title>FullStack Web Devlopment</Card.Title>
                <Card.Text>Fullstack bootcamp</Card.Text>
                <Card.Text>Available Online</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={4} className="mb-5">
          <a href="https://upliftcodecamp.com/weekend_courses.html">
            <Card>
              <Card.Img src="https://www.upliftcodecamp.com/assets/images/laptop.jpg" alt="img" />
              <Card.Body>
                <Card.Title>Thought On Weekend</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>

        <Col md={4} className="mb-5">
          <a href="https://www.upliftcodecamp.com/partners.html">
            <Card>
              <Card.Img src="https://www.upliftcodecamp.com/assets/images/computer.jpg" alt="img" />
              <Card.Body>
                <Card.Title>Company Oportunities</Card.Title>
                <Card.Text>Hire Our Best Grades</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>

      </Row>

    </Container>
  )
}
