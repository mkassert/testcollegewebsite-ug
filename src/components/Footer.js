import {
  Form,
  Stack,
  Container,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";
import "./Footer.css";

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

          <Row className="text-light">
            <Col lg={3} xs={12} md={6}>
              <h5>About IPEM</h5>
              <ul>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} xs={12} md={6}>
              <h5>Location</h5>
              <ul>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
              {"  "}
              <h5>Mail Us:</h5>
              <ul>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} xs={12} md={6}>
              <h5>About IPEM</h5>
              <ul>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} xs={12} md={6}>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Container>
    </>
  );
}
