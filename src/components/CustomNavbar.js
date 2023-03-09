import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import "./CustomNavbar.css"; // import custom CSS file
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function CustomNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    if (showDropdown) {
      setTimeout(() => {
        setShowDropdown(!showDropdown);
      }, 1500);
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <>
      <nav className="ms-0 navbar-text fw-bolder text-warning ">
        <p className="marquee">
          sjfdkg sgjk sakgh jdf gdsjkhf sdgf fsdkig sdfgText that scrolls from
          left to right... uasdihs uid a
          <a className="text-uppercase text-white" href="#">
            {" "}
            Register here
          </a>
        </p>
      </nav>
      <Navbar
        className="text-white"
        style={{ backgroundColor: "#030737" }}
        expand="lg"
      >
        {/* <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-nav__links">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown
              // remove the default caret icon
              title={
                <span>
                  DISCOVER <ExpandMoreOutlinedIcon />
                </span>
              }
              id="basic-nav-dropdown"
              show={showDropdown}
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
              className="full-screen-dropdown " // add custom class
            >
              <div
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
                className="full-screen-dropdown-content bg-secondary style={{height:'fit-content'}}"
              >
                {" "}
                <Container fluid>
                  <Row>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                  {/* wrap the dropdown items in a div */}
                </Container>
              </div>
            </NavDropdown>
            <NavDropdown
              // remove the default caret icon
              title={
                <span>
                  STUDY <ExpandMoreOutlinedIcon />
                </span>
              }
              id="basic-nav-dropdown"
              show={showDropdown}
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
              className="full-screen-dropdown " // add custom class
            >
              <div
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
                className="full-screen-dropdown-content bg-secondary style={{height:'fit-content'}}"
              >
                {" "}
                <Container fluid className="fw-light">
                  <Row>
                    <Col>
                      <NavDropdown.Item href="#action/3.1">
                        <h4>ABOUT US</h4>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Vision & Philosophy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Executive Director's Message
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Director General's Message
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Governing Body
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        Mandatory Disclosure
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>

                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                  {/* wrap the dropdown items in a div */}
                </Container>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
