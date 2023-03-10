import { Card, Carousel, Row, Col, Container, Button } from "react-bootstrap";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GavelIcon from "@mui/icons-material/Gavel";
import CelebrationIcon from "@mui/icons-material/Celebration";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <Container fluid style={{ backgroundColor: "#030737" }}>
      <Container className="fw-light">
        <Row>
          <Col className="text-white text-center fw-light">
            <h1>About @IPEM</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-white text-center">
            <h6>Our course,programs and details</h6>
          </Col>
        </Row>
        <Row className="p-4">
          <Col lg={3} xs={10} className="mx-auto">
            <Card
              className={`p-2 rounded-2 border-white text-white   ${styles.aboutipem__cards}`}
              style={{ width: "18rem", backgroundColor: "#030737" }}
            >
              <div style={{ height: "80px", width: "60px" }}>
                <Card.Img fluid="true" variant="top" src="/moot-court.png" />
              </div>
              {/* <Card.Img className="rounded-0" variant="top" src="/test.jpg" /> */}
              {/* <GavelIcon style={{ height: "40px", width: "60px" }} /> */}

              <Card.Body>
                <Card.Title>Moot Court</Card.Title>
                <Card.Text>
                  Moot courts are organized to focus on students' understanding
                  of underlying principles and concepts of justice, legal
                  research, oral arguments, etc. Moot courts are replica of
                  courts with...
                </Card.Text>
                {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} xs={10} className="mx-auto">
            <Card
              className={`p-2 rounded-2 border-white text-white   ${styles.aboutipem__cards}`}
              style={{ width: "18rem", backgroundColor: "#030737" }}
            >
              <div style={{ height: "80px", width: "60px" }}>
                <Card.Img fluid="true" variant="top" src="/ullas.png" />
              </div>
              <Card.Body>
                <Card.Title>Ullas</Card.Title>
                <Card.Text>
                  Since the beginning of 2016, the Inter-Institutional Fest
                  ‘Ullas’ is hosted by the IPEM Group of Institutions every year
                  for UG students to promote holistic development through
                  various events.
                </Card.Text>
                {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} xs={10} className="mx-auto">
            <Card
              className={`p-2 rounded-2 border-white text-white   ${styles.aboutipem__cards}`}
              style={{ width: "18rem", backgroundColor: "#030737" }}
            >
              <div style={{ height: "80px", width: "60px" }}>
                <Card.Img fluid="true" variant="top" src="/conference.png" />
              </div>
              <Card.Body>
                <Card.Title>International Conferences</Card.Title>
                <Card.Text>
                  International Conferences & Webinars are regul arly organized
                  by IPEM Group to interact with the global academia to
                  strengthen corporate resources at an international level.
                </Card.Text>
                {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} xs={10} className=" mx-auto">
            <Card
              className={`p-2 rounded-2 border-white text-white   ${styles.aboutipem__cards}`}
              style={{ width: "18rem", backgroundColor: "#030737" }}
            >
              <div style={{ height: "80px", width: "60px" }}>
                <Card.Img fluid="true" variant="top" src="/seminar.png" />
              </div>

              <Card.Body>
                <Card.Title>Seminars</Card.Title>
                <Card.Text>
                  Workshops, events and seminars are conducted by the college
                  regularly. These seminars are organized by concerned
                  departments throughout the academic year to keep students
                  updated.
                </Card.Text>
                {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="fw-light text-white p-5 ">
            <p>
              Feel free to Contact Us, Or you can call us any-time
              +91-9910491474
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
