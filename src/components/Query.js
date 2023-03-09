import {
  Image,
  Container,
  Button,
  Form,
  Card,
  Row,
  Col
} from "react-bootstrap";
import "./Query.css";

export default function Query() {
  return (
    <Container fluid className="bg-white">
      <Container className="bg-white br-5  ">
        <Row className=" mb-2">
          <Col lg={12} sm={12} className="">
            {" "}
            <Container>
              <Row className="p-2">
                <Col
                  lg={4}
                  sm={12}
                  className="border-end border-dark border-start"
                >
                  <Image
                    className="mr-4 "
                    thumbnail="true"
                    src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=gi&k=20&c=LBkfIEzmAzb8Dt7u1Yo0U_TX0d4YWoGexSscX71Z5Ng="
                  ></Image>
                </Col>

                <Col lg={8} sm={12}>
                  <Form>
                    <Container fluid>
                      <Row>
                        <Col xs={12} lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
