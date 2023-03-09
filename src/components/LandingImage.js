import React, { useState } from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";

import "./LandingImage.css";

export default function LandingImage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <div className="main_container">
          <img
            className="d-block w-100 image"
            src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=gi&k=20&c=LBkfIEzmAzb8Dt7u1Yo0U_TX0d4YWoGexSscX71Z5Ng="
            alt="First slide"
          />
          <div className="overlay-image">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <h1> Admission Open</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <p>
                    {" "}
                    welcome to the best institute for furthering your career
                  </p>
                </Col>
              </Row>
              <Row className="m-2">
                <Col xs={4} lg={4}>
                  <Button className="btn-outline-warning ">Apply Now</Button>
                </Col>
                <Col xs={4} lg={4}>
                  <Button className="btn-outline-warning  ">Contact Us</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="main_container">
          <img
            className="d-block w-100 image"
            src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=gi&k=20&c=LBkfIEzmAzb8Dt7u1Yo0U_TX0d4YWoGexSscX71Z5Ng="
            alt="First slide"
          />
          <div className="overlay-image">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <h1> Admission Open</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <p>
                    {" "}
                    welcome to the best institute for furthering your career
                  </p>
                </Col>
              </Row>
              <Row className="m-2">
                <Col xs={4} lg={4}>
                  <Button className="btn-outline-warning ">Apply Now</Button>
                </Col>
                <Col xs={4} lg={4}>
                  <Button className="btn-primary ">Contact Us</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
