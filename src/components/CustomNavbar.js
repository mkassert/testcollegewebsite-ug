import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Button,
  Dropdown,
} from "react-bootstrap";
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

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    console.log("hi");
    setShowOffcanvas(!showOffcanvas);
  };

  const [showCanvasDropdown, setShowCanvasDropdown] = useState(false);

  const handleCanvasDropdown = () => {
    if (showCanvasDropdown) {
      setTimeout(() => {
        console.log("hi close");
        setShowCanvasDropdown(!showCanvasDropdown);
      }, 1500);
    } else {
      console.log("hi open");
      setShowCanvasDropdown(!showCanvasDropdown);
    }
  };

  return (
    <>
      <nav className=" ms-0 navbar-text fw-bolder text-warning 	">
        <p className="marquee">
          sjfdkg sgjk sakgh jdf gdsjkhf sdgf fsdkig sdfgText that scrolls from
          left to right... uasdihs uid a
          <a className="text-uppercase text-white" href="#">
            {" "}
            Register here
          </a>
        </p>
      </nav>
      <Container fluid className="d-none d-lg-block p-0">
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar
          className="text-white w-100 "
          style={{ backgroundColor: "#030737" }}
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto navbar-nav__links">
              <Nav.Link href="#home">HOME</Nav.Link>
              <NavDropdown
                title={
                  <span>
                    DISCOVER <ExpandMoreOutlinedIcon />
                  </span>
                }
                id="basic-nav-dropdown"
                show={showDropdown}
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
                className="full-screen-dropdown "
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
                  </Container>
                </div>
              </NavDropdown>
              <NavDropdown
                title={
                  <span>
                    STUDY <ExpandMoreOutlinedIcon />
                  </span>
                }
                id="basic-nav-dropdown"
                show={showDropdown}
                onMouseEnter={handleDropdown}
                onMouseLeave={handleDropdown}
                className="full-screen-dropdown "
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
                  </Container>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>{" "}
      </Container>
      <Navbar bg="light">
        <Container className="d-block d-md-none">
          <Row>
            <Col xs={10}>
              <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Col>
            <Col xs={2}>
              <Button
                className=""
                variant="outline-dark"
                onClick={toggleOffcanvas}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zM1.5 7A.5.5 0 012 6.5h11a.5.5 0 010 1H2a.5.5 0 01-.5-.5zm1 4a.5.5 0 01.5-.5h11a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z"
                  />
                </svg>
              </Button>
            </Col>
          </Row>

          {/* Offcanvas with menu list */}
        </Container>
      </Navbar>

      <div
        className={`offcanvas bg-dark offcanvas-start ${
          showOffcanvas ? "show" : ""
        }`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={toggleOffcanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled ">
            <li className="mb-3">
              <a href="#" className="w-100 d-block px-3 py-2">
                Menu Item 1
              </a>
            </li>
            <li>
              <a href="#" className="w-100 d-block px-3 py-2">
                Menu Item 2
              </a>
            </li>
            <li className="dropdown">
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                  className="w-100 d-block py-2 ms-0"
                >
                  Dropdown Menu
                  <AddIcon className="ms-5" />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  variant="dark"
                  className="w-100 d-block px-3 py-2"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <ul className="list-unstyled ">
                    <li className="mb-3">
                      <a href="#" className="w-100 d-block px-3 py-2">
                        Menu Item 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="w-100 d-block px-3 py-2">
                        Menu Item 2
                      </a>
                    </li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomNavbar;
