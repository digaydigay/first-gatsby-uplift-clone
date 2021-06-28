import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default function homeSection1() {
  return (
    <Container className="Section1">
      <Row className="d-flex align-items-center" >
        <Col sm={12} md={6} lg={6}>
          <p className="p-5">Uplift Code Camp’s mission is to make the Filipino tech talent globally competitive through comprehensive coding camps. Our students go through rigorous 6-month part-time courses. Then we connect graduates with companies who hire great programmers.</p>
        </Col>
        <Col sm={12} md={6} lg={6}  >
          <div className="embed" >
            <iframe title="promotion" className="embed_item" src="https://www.youtube.com/embed/b7tJeEoC3nc" type="video/webm" />
          </div>
        </Col>
      </Row>

    </Container>
  )
}
