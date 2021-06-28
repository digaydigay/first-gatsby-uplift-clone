import React from 'react'
import { Container, Carousel, Card } from "react-bootstrap"
export default function HomeSection4() {

  return (

    <Container className="homeSection4 pb-">
      <h2>STORIES FROM OUR STUDENTS</h2>
      <Carousel >
        <Carousel.Item >
          <Card.Img className="mt-3 mb-3" src="https://www.upliftcodecamp.com/assets/images/yuri.jpg" alt="img" />
          <Card.Title>Yuri Bueno</Card.Title>
          <Card >
            <Card.Body>
              <i className="fas fa-quote-left"></i>
              <Card.Text>
                I decided to apply in Uplift Code Camp because they gave a chance even though I'm not a college graduate. I don't have a Bachelor's Degree. Na-excite ako noong nag-apply ako kasi I was emailed in a very enthusiastic way.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item >
          <Card.Img className="mt-3 mb-3" src="https://www.upliftcodecamp.com/assets/images/jem.jpg" alt="img" />
          <Card.Title>Jem Laguda</Card.Title>
          <Card >
            <Card.Body>
              <i className="fas fa-quote-left"></i>
              <Card.Text>
                They [Uplift] always encourage us to ask questions. Lagi po nilang sinasabi na there's no such thing as stupid question. I didn't expect na sa first month is ang dami ko pong natutunan sa Uplift na nagpa-boost din po ng confidence ko to learn more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

        <Carousel.Item >
          <Card.Img className="mt-3 mb-3" src="https://www.upliftcodecamp.com/assets/images/amy.jpg" alt="img" />
          <Card.Title>Amy Susaya</Card.Title>
          <Card >
            <Card.Body>
              <i className="fas fa-quote-left"></i>
              <Card.Text>
                I am very grateful and inspired from the Uplift team, they have been very supportive and helpful. I also like the fact that they did not only focus on teaching us the technical skills but even provided free "personal growth trainings" during the bootcamp
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>

      </Carousel>

    </Container>
  )
}
