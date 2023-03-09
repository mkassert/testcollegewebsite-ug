import React, { useState } from "react";
import {
  Container,
  Navbar,
  Row,
  Nav,
  Col,
  Carousel,
  Badge,
  Stack
} from "react-bootstrap";
import "./MyNavbar.css";
import { IconButton, InputBase } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function MyNavbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <Container fluid className="container__shared-background">
        <Container>
          <Navbar
            bg="transparent"
            expand="lg"
            className="py-3  navbar-bg border-bottom border-3"
            style={{ color: "white" }}
          >
            <Navbar.Brand href="/">My Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link style={{ color: "white" }} href="/">
                  Home
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="/about">
                  About
                </Nav.Link>

                <div className="search-bar">
                  <IconButton onClick={handleToggleSearch}>
                    <SearchIcon color="disabled" />
                  </IconButton>
                  {showSearch && (
                    <InputBase
                      placeholder="Search…"
                      className="search-input fs-4"
                      inputProps={{ "aria-label": "search" }}
                      style={{ color: "white" }}
                    />
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Container className=" ">
          <Row className="px-5">
            <Col className="pt-5 ps-5" lg={8} xs={4}>
              <h1 className="fw-bolder">Admissions</h1>
              <h1 className="fw-bolder">opened</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={8} xs={8}>
              <Container className="">
               
                <Row className="">
                  <Col>
                    <Stack direction="horizontal" gap={2}>
                      <div className="bg-light rounded px-2 border">BCA</div>
                      <div className="bg-light rounded px-2  border">MCA</div>
                      <div className="bg-light rounded px-2  border">BBA</div>
                      <div className="bg-light rounded px-2  border">LLB</div>
                      <div className="bg-light rounded px-2  border">
                        D.El.Ed
                      </div>
                      <div className="bg-light rounded px-2  border">B.Ed</div>
                      <div className="bg-light rounded px-2  border">MBA</div>
                    </Stack>
                  </Col>
                </Row>
                <Row className="p-4">
                  <Col>
                    <Stack direction="horizontal" gap={3}>
                      <a href="#" className="btn btn-primary text-warning">
                        Apply Now
                      </a>
                      <a href="#" className="btn btn-warning text-primary">
                        Apply Now
                      </a>
                    </Stack>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="p-4">
              <PlayCircleIcon
                style={{ width: "200px", height: "100px", color: "lightgrey" }}
                size="lg"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
