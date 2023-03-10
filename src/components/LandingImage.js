import React, { useState } from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./LandingImage.css";

export default function LandingImage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="main_container">
          <img
            className="d-block h-100 w-100 image"
            src="/landing.jpg"
            alt="First slide"
          />
          <div className="overlay-image">
            <Container className="p-5">
              <Row style={{ height: "50%" }}>
                <Col lg={2} xs={1}></Col>
                <Col>
                  {" "}
                  <div className="fs-5">
                    <h1>Over 25 years of Excellence</h1>
                    <p>
                      {" "}
                      welcome to the best institute for furthering your career
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              <Row className="">
                <Col></Col>
                <Col xs={4} lg={4}>
                  <Button className="btn-outline-warning m-2">Apply Now</Button>
                  <Button className="btn-outline-warning ">Contact Us</Button>
                </Col>

                <Col></Col>
              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="main_container">
          <img
            className="d-block h-100 w-100 image"
            src="/landing.jpg"
            alt="First slide"
          />
          <div className="overlay-image">
            <Container className="p-5">
              <Row style={{ height: "50%" }}>
                <Col lg={2} xs={1}></Col>
                <Col>
                  {" "}
                  <div className="fs-5">
                    <h1>Career Counselling and Guidance</h1>
                    <p> Schedule your chat with Career Counsellor</p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              <Row className="">
                <Col></Col>
                <Col xs={6} lg={4}>
                  <Button className="btn-outline-warning m-2">
                    Apply Now <ArrowForwardIcon />
                  </Button>
                  <Button className="btn-white ">Contact Us</Button>
                </Col>

                <Col></Col>
              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
