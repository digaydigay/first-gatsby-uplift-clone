import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap"

export default function HomeSection3() {
  return (
    <Container fluid className="Section3">
      <h2 className="pt-2 mt-5">YOUR CAREER PATH</h2>
      <Row className="justify-content-center pt-3">

        <Col md={6} lg={6} sm={12} className="mb-3">
          <Card>
            <Card.Body className="d-flex">
              <i className="fas fa-laptop"></i>
              <div >
                <h5>Learn To code</h5>
                <p>Learn JavaScript, HTML, CSS, Node, React and more in our live, online coding class.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6} sm={12} className="mb-3">
          <Card>
            <Card.Body className="d-flex ">
              <i className="fas fa-images"></i>
              <div >
                <h5>Build a portfolio</h5>
                <p>Build complex projects and beautiful websites to showcase your talent..</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6} sm={12} className="mb-3">
          <Card>
            <Card.Body className="d-flex ">
              <i className="fas fa-id-card"></i>
              <div >
                <h5>Land a job</h5>
                <p>Software Developers are highly in-demand and well-paid. We partner with local and international companies to help our graduates find their first opportunity.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6} sm={12} className="mb-3">
          <Card>

            <Card.Body className="d-flex ">
              <i className="fas fa-hands-helping"></i>
              <div >
                <h5>Be the best</h5>
                <p>Our courses prepare you for the real world. Develop a strong foundation to excel in your new Software Development career.</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
