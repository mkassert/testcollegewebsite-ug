import react, { useState } from "react";
import { Card, Carousel, Row, Col, Container, Button } from "react-bootstrap";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import StoreIcon from "@mui/icons-material/Store";
import GavelIcon from "@mui/icons-material/Gavel";
import "./Courses.css";

export default function Courses() {
  const [ishover, setHover] = useState(false);
  function handleHover() {
    setHover((prev) => !prev);
    console.log("hi");
  }
  var hr = "";
  var btn = "";
  if (ishover) {
    hr = "horizonatl-line-hover";
    btn = "read-more-button-hover";
  } else {
    hr = "horizonatl-line";
    btn = "btn";
  }
  return (
    <>
      <Container fluid className="container__courses-landing">
        <Container>
          <Row>
            <Col className=" text-center fw-bolder">
              <h1 classNAme="fs-1">Our Outstanding Campus</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className=" fw-bolder text-center">
                Our UG, PG and Law Campus Students Amplify our Reputation by
                Achieving the Best Possible.
              </h6>
            </Col>
          </Row>
          <Row className="p-5 mx-auto ">
            <Col
              lg={4}
              xs={10}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className=" mx-auto"
            >
              <Card
                className="p-2 rounded-2 border-white mb-2 fw-bolder coursescards"
                style={{ color: "#030737" }}
              >
                <div style={{ height: "80px", width: "60px" }}>
                  <Card.Img fluid="true" variant="top" src="/ug.png" />
                </div>

                <Card.Body>
                  <Card.Title>UG Campus</Card.Title>
                  <div
                    className={`horizontal-line-${ishover ? "hover" : ""}`}
                  ></div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn my-card-button">
                    {" "}
                    <a href="#">
                      Read More
                      <ArrowCircleRightRoundedIcon
                        style={{ color: "darkblue" }}
                      />
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={4}
              xs={10}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className=" mx-auto"
            >
              <Card
                className="p-2 rounded-2 border-white mb-2 fw-bold"
                style={{ color: "#030737" }}
              >
                <div style={{ height: "80px", width: "60px" }}>
                  <Card.Img fluid="true" variant="top" src="/pg.png" />
                </div>
                <Card.Body>
                  <Card.Title>PG Campus</Card.Title>
                  <div
                    className={`horizontal-line-${ishover ? "hover" : ""}`}
                  ></div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn ">
                    {" "}
                    <a href="#">
                      Read More
                      <ArrowCircleRightRoundedIcon
                        style={{ color: "darkblue" }}
                      />
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={4}
              xs={10}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className=" mx-auto"
            >
              <Card
                className="p-2 mb-2 rounded-2 border-white  fw-bold"
                style={{ color: "#030737" }}
              >
                <div className="ms-2" style={{ height: "80px", width: "60px" }}>
                  <Card.Img fluid="true" variant="top" src="/law.png" />
                </div>
                <Card.Body>
                  <Card.Title>Law Campus</Card.Title>
                  <div
                    className={`horizontal-line-${ishover ? "hover" : ""}`}
                  ></div>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="btn ">
                    {" "}
                    <a href="#">
                      Read More
                      <ArrowCircleRightRoundedIcon
                        style={{ color: "darkblue" }}
                      />
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
