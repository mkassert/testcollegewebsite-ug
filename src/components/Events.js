import { Container, Row, Col, Image, Carousel, Card } from "react-bootstrap";

export default function Events() {
  return (
    <>
      <Container fluid>
        <Container className="text-center">
          <Row>
            <Col>
              <h2>Upcoming Events & News</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="text-muted">
                {" "}
                See The Upcoming Event And Stay Updated With Every News
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Card className="border-0 " style={{ width: "18rem" }}>
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="/0002_ug.jpg"
                />
                <Card.Body>
                  <Card.Title>UG Programs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card className="border-0" style={{ width: "18rem" }}>
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="/0001_pg.jpg"
                />
                <Card.Body>
                  <Card.Title>PG Programs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card className="border-0" style={{ width: "18rem" }}>
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="/0000_law.jpg"
                />
                <Card.Body>
                  <Card.Title>Law Programs</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
