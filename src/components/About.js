import {
  Image,
  Container,
  Button,
  Form,
  Card,
  Row,
  Col,
} from "react-bootstrap";

import "./About.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

export default function About() {
  return (
    <Container fluid className="bg-white">
      <Container className="bg-white br-5  ">
        <Row className="">
          <Col lg={12} sm={12} className="">
            {" "}
            <Container>
              <Row className="p-2">
                <Col
                  lg={6}
                  xs={12}
                  className=" mx-auto container-form-image__with-div p-5"
                >
                  <Image
                    className="mr-4 form-image__with-div"
                    fluid="true"
                    src="/aboutlanding.jpg"
                  ></Image>

                  <div class="text-start d-none d-sm-block text-container-form-image__with-div">
                    <div className="p-4">
                      <i>
                        {" "}
                        You Are Helping To Lead The Charge; We Can Help You
                        Build On Your Past Successes And Prepare For Your Great
                        Future.
                      </i>
                      {"   "}
                      <FormatQuoteIcon
                        className="d-block"
                        style={{ fontSize: "90px" }}
                      />
                      <p className="fw-bold">- John Peter,Founder</p>
                    </div>
                  </div>
                </Col>
                <Col xs={10} className="d-sm-none border p-0 mx-auto">
                  <div
                    class="text-start  "
                    style={{ backgroundColor: "#030737", color: "white" }}
                  >
                    <div className="p-4">
                      <i>
                        {" "}
                        You Are Helping To Lead The Charge; We Can Help You
                        Build On Your Past Successes And Prepare For Your Great
                        Future.
                      </i>
                      {"   "}
                      <FormatQuoteIcon
                        className="d-block"
                        style={{ fontSize: "90px" }}
                      />
                      <p className="fw-bold">- John Peter,Founder</p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} sm={12}>
                  <Container className="conatainer-about__details">
                    <Row>
                      <Col xs={12} lg={12}>
                        <h1>Where Your Future Comes First</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={12} className="text-start">
                        <h2>About IPEM</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        lg={12}
                        className="p-5 border-start border-dark"
                      >
                        <p>
                          IPEM Group, under the aegis of Laksh Educational
                          Society, registered under the Societies Act, 1860,
                          continues to build on its reputation as a premier
                          Group of Institutions. At IPEM, we envision a world
                          where your future comes first and we lead with
                          different programs in the areas of Management,
                          Information Technology, Law and Education.
                        </p>

                        <p>
                          The Master of Business Administration (MBA) and Master
                          of Computer Applications (MCA) Program are approved by
                          the All India Council for Technical Education (AICTE)
                          and affiliated with Abdul Kalam Technical University
                          (AKTU), Lucknow. The Post Graduate Diploma in
                          Management(PGDM) Program is approved by the All India
                          Council for Technical Education (AICTE) Govt. of
                          India, Ministry of HRD.
                        </p>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col>
                        <Button className="btn  btn-primary">
                          <small>Our Alumni Network</small>{" "}
                          <ArrowCircleRightRoundedIcon />
                        </Button>
                      </Col>
                      <Col>
                        <Button className="btn btn-primary ">
                          <small> Course Details</small>
                          <ArrowCircleRightRoundedIcon />{" "}
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
