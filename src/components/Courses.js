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
        <Container className="pt-5">
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
                className="p-2 rounded-0 border-white mb-2 coursescards"
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
                    IPEM UG Campus is where your future comes first, as it
                    inspires students to take on professional degree programs
                    that can propel their careers towards early success. The
                    programs offered at IPEM UG Campus include various programs
                    such as B.Com (Hons), BBA, BCA, B.Ed, and D.EL.Ed.
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
                className="p-2 border-white rounded-0 mb-2 "
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
                    The PG Campus at IPEM focuses on nurturing the future of
                    students with diverse educational backgrounds and interests,
                    offering full-fledged programs such as MBA and MCA to equip
                    them with the skills and knowledge necessary for success in
                    their chosen fields.
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
                className="p-2 mb-2 rounded-0 border-white  "
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
                    The IPEM Law Academy is dedicated to preparing highly
                    ethical and skilled professionals for the future of the
                    legal industry. Through our 3-year LLB and 5-year B.A.LLB
                    courses, we provide students with the knowledge and training
                    necessary to excel in their future legal careers.
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
