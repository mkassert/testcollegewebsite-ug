import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import {
  Form,
  Stack,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import "./Footer.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function Footer() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#030737" }}>
        <Container>
          <Row className="p-4">
            <Col className="text-light" lg={6} xs={12}>
              <h1 className="fs-bolder">Subscribe with our newslater</h1>
              <h3>
                Stay updated with our latest <strong> news and events</strong>
              </h3>
            </Col>
            <Col xs={12} lg={6}>
              <div className="border rounded-2 px-1 bg-white ">
                <Stack direction="horizontal" gap={1}>
                  <Form.Control
                    className="px-1 border-0 rounded-0"
                    placeholder="Your Email Address"
                  />
                  <Button variant="primary m-1 rounded-1">
                    <SendRoundedIcon />
                  </Button>
                </Stack>
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="fs-5 fw-light text-light text-small">
            <Col lg={3} xs={12} md={6}>
              <h5>About IPEM</h5>
              <ul>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Blogs Events Faculty Contact E - Certificate IPEM in Media
                    Notices Board
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Events
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Faculty
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />E - Certificate
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    IPEM in Media
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Notices Board
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} xs={12} md={6}>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    NIRF Ranking
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Unnat Bharat Abhiyan
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Swayam Knowledge Sharing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Knowledge Sharing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    National Academic Depository(NAD)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    Professional Associations
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    National Council for Teacher Education(NCTE)
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={3} xs={12} md={6}>
              <h5>Location</h5>
              <ul>
                <li>
                  <a href="#">
                    <ArrowForwardIcon />
                    A-13/1, South Side G.T. Road Industrial Area, NH-9 By Pass,
                    Ghaziabad, U.P.-201010
                  </a>
                </li>
              </ul>
              {"  "}
            </Col>

            <Col lg={3} xs={12} md={6}>
              <h5>Contact Us:</h5>
              <ul>
                <li>
                  <a href="#">
                    <LocalPhoneIcon />
                    0120-4174500
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PhoneIphoneIcon />
                    +91 - 9910491474
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MailOutlineIcon />
                    info@ipemgzb.ac.in
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={6} xs={12}>
              <div className="text-center p-3 text-white">
                © 2022 IPEM. All rights reserved | Design & Developed by
                <a
                  style={{ textDecoration: "none" }}
                  className="text-white"
                  href="https://mdbootstrap.com/"
                >
                  <strong> Assert IT</strong>
                </a>
              </div>
            </Col>
            <Col xs={12} lg={6} className="">
              <footer>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </footer>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
