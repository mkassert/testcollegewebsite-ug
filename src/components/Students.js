import { Container, Row, Col, Image, Carousel, Card } from "react-bootstrap";
import "./Students.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoSlider from "./LogoSlider";
// import IconButton from "@material-ui/core/IconButton";
export default function Students() {
  return (
    <Container fluid className="fluid-container__students-testimonials">
      <Container className="p-4">
        <Row>
          <Col className="fw-bolder mx-auto text-center">
            <h4>
              What Distinguishes Life At IPEM From Other Campuses? Hear From The
              Mouths Of Our Students
            </h4>
          </Col>
        </Row>

        <Row>
          <Col className="fw-bolder mx-auto ">
            <h7 className="text-primary text-start ">
              See the upcoming events and stay updated with our latest news
            </h7>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={12} className="p-3" style={{ position: "relative" }}>
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
                        src="/122.jpg"
                        className="img-fluid rounded-start card-image"
                        alt="..."
                      />
                      <h2 className="image-caption">Sunyna Razdan</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          I feel proud, being a student of IPEM. IPEM has not
                          only provided me with professional qualification but
                          have also inculcated human values within me.] The
                          faculty members have encouraged me to be a better
                          human being and offer my services for the betterment
                          of the society.
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
                        src="/123.png"
                        className="img-fluid rounded-start card-image"
                        alt="..."
                      />
                      <h2 className="image-caption">Sakshi Sharma</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          IPEM is an epitome of learning. All the faculty
                          members, mentors have supported me at each and every
                          step and have made my journey at the institution a
                          very memorable one.
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
                        src="/priyanka.jpg"
                        className="img-fluid card-image"
                        alt="..."
                      />
                      <h2 className="image-caption">Priyanka Sharma</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          Due to the combined efforts of all the academic and
                          non- academic staff I am able to place myself at a
                          premium organization. IPEM has given wings to my
                          aspirations and its values would assist me to become a
                          successful person both at personal and professional
                          front.
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
                        src="/neha-1.jpg"
                        className="img-fluid rounded-start card-image"
                        alt="..."
                      />
                      <h2 className="image-caption">Neha Sharma</h2>
                      <p>Ex Student</p>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          I would like to take this opportunity to thank the
                          faculty members for the support and guidance
                          throughout the completion of my programme. It was a
                          delightful journey at IPEM, where learning was so much
                          fun.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Container className="text-center text-bolder p-2">
          <Row className="m-2">
            <Col>
              <h2>Our Placement Partners</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <LogoSlider />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
