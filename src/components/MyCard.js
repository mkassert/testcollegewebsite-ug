import {
  Image,
  Container,
  Button,
  Form,
  Card,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import "./MyCard.css";

export default function MyCard() {
  return (
    <Container fluid>
      <Container className="border outer-MyCard-non-fluid">
        <Row className="p-2">
          <Col lg={4} sm={12} className="p-5 ">
            <Container>
              <Row>
                <Col>
                  <div
                    className="container-outer-relative__over-image"
                    style={{
                      backgroundImage: `url('${process.env.PUBLIC_URL}/req.jpg')`,
                    }}
                  >
                    {/* <Image
                      className="mr-4 w-100 h-100 rounded"
                      thumbnail="true"
                      src="/Request-Query.jpg"
                    ></Image> */}
                    <Container className="container-query__over-image p-5 bg-tarnsparent">
                      <Row>
                        <Col>
                          <h3 className="fw-bold">Apply And Enroll</h3>
                          <p>
                            Every Year, Thousands Of Students Get Selected In
                            Renowned Companies After Pursuing Programs From Our
                            UG, PG And Law Campuses. We Are Setting Benchmarks
                            With Our Remarkable Academic Achievements To Empower
                            Change And Promote Entrepreneurship.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col lg={8} sm={12} className="form-side__outer-container">
            <Form className="p-5">
              <Container>
                <Row>
                  <h2 className="text-start">Request Query</h2>
                </Row>
                <Row>
                  <p className="text-start text-muted">
                    See the upcoming event and stay updated with every news
                  </p>
                </Row>
                <Row>
                  <Col xs={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Name" />
                      {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                    </Form.Group>
                  </Col>
                  <Col xs={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                  </Col>
                  <Col xs={6} lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} lg={6}>
                    <Form.Select aria-label="Default select example">
                      <option>Select Courses</option>
                      <option value="BBA">BBA</option>
                      <option value="2">BCA</option>
                      <option value="3">B.COM</option>
                      <option value="3">MBA</option>
                      <option value="3">MCA</option>
                      <option value="3">B.A.LLB</option>

                      <option value="3">B.COM</option>
                      <option value="3">LLB</option>
                      <option value="3">B.COM LLB</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} lg={6}>
                    <Form.Select aria-label="Default select example">
                      <option value="">Select state</option>
                      <option value="AN">Andaman and Nicobar Islands</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CH">Chandigarh</option>
                      <option value="CT">Chhattisgarh</option>
                      <option value="DN">Dadra and Nagar Haveli</option>
                      <option value="DD">Daman and Diu</option>
                      <option value="DL">Delhi</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="LA">Ladakh</option>
                      <option value="LD">Lakshadweep</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OR">Odisha</option>
                      <option value="PY">Puducherry</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TG">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UT">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Describe Your Enquiry!"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Col lg={10}></Col>
                  <Col className="ml-auto p-0">
                    <Button
                      className="p-2 fs-bolder"
                      variant="primary"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
