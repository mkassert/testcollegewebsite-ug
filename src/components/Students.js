import { Container, Row, Col, Image, Carousel, Card } from "react-bootstrap";
import "./Students.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import IconButton from "@material-ui/core/IconButton";
export default function Students() {
  return (
    <Container fluid className="fluid-container__students-testimonials">
      <Container>
        <Row>
          <Col className="fw-bolder mx-auto text-center">
            <h1>What our students says</h1>
          </Col>
        </Row>

        <Row>
          <Col className="fw-bolder mx-auto text-center">
            <h5>
              See the upcoming events and stay updated with our latest news
            </h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={12} style={{ position: "relative" }}>
            <Carousel
              nextIcon={
                <span className="contol-carousel">
                  {" "}
                  <ArrowForwardOutlinedIcon fontSize="large" />
                </span>
              }
              prevIcon={
                <span className="contol-carousel">
                  {" "}
                  <ArrowBackIcon fontSize="large" />
                </span>
              }
            >
              <Carousel.Item interval={1000}>
                <div className="card mb-3 card-container__students-testimonials">
                  <div className="row g-0">
                    <div className="col-md-4 p-2">
                      <img
                        src="https://via.placeholder.com/200x200"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <h2 className="image-caption">Pradeep Kumar</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="card mb-3 card-container__students-testimonials">
                  <div className="row g-0">
                    <div className="col-md-4 p-2">
                      <img
                        src="https://via.placeholder.com/200x200"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <h2 className="image-caption">Pradeep Kumar</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <div className="card mb-3 card-container__students-testimonials">
                  <div className="row g-0">
                    <div className="col-md-4 p-2">
                      <img
                        src="https://via.placeholder.com/200x200"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                      <h2 className="image-caption">Pradeep Kumar</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Container>
  );
}
