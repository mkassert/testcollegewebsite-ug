import { Card, Carousel, Row, Col, Container, Button } from "react-bootstrap";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./Slider.module.css";

export default function Slider() {
  return (
    <Container fluid style={{ backgroundColor: "#030737" }}>
      <Row>
        <Col className="text-white text-center fw-bolder">
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
            className={`p-2 rounded-2 border-white text-white fw-bold  ${styles.aboutipem__cards}`}
            style={{ width: "18rem", backgroundColor: "#030737" }}
          >
            <Card.Img className="rounded-0" variant="top" src="/test.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} xs={10} className="mx-auto">
          <Card
            className={`p-2 rounded-2 border-white text-white fw-bold  ${styles.aboutipem__cards}`}
            style={{ width: "18rem", backgroundColor: "#030737" }}
          >
            <Card.Img className="rounded-0" variant="top" src="/test.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} xs={10} className="mx-auto">
          <Card
            className={`p-2 rounded-2 border-white text-white fw-bold  ${styles.aboutipem__cards}`}
            style={{ width: "18rem", backgroundColor: "#030737" }}
          >
            <Card.Img className="rounded-0" variant="top" src="/test.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} xs={10} className=" mx-auto">
          <Card
            className={`p-2 rounded-2 border-white text-white fw-bold  ${styles.aboutipem__cards}`}
            style={{ width: "18rem", backgroundColor: "#030737" }}
          >
            <Card.Img
              fluid="true"
              className="rounded-0"
              variant="top"
              src="/test.jpg"
            />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <a href="#">
                <ArrowCircleRightRoundedIcon />
              </a> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="fw-bolder text-white p-5 ">
          <p>
            Feel free to Contact Us, Or you can call us any-time +91-9910491474
          </p>
        </Col>
      </Row>
    </Container>
  );
}
