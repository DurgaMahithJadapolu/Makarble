import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { FaBell, FaEnvelope, FaBolt, FaThLarge } from "react-icons/fa";
import Companylogo from "../images/Company logo m symbool.png";
import Img from "../images/Ps-11.jpeg";

const TopNavBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="px-4">
      <Navbar.Brand href="#home">
        <img src={Companylogo} alt="Logo" style={{ width: "40px" }} />{" "}
        {/* Replace with your logo */}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              My Apps
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#app1">App 1</Dropdown.Item>
              <Dropdown.Item href="#app2">App 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#explore">Explore</Nav.Link>
        </Nav>

        <Form
          className="d-flex"
          style={{ width: "252px", marginRight: "175px" }}
        >
          <FormControl
            type="search"
            placeholder="Search for contacts and apps"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <Nav className="align-items-center">
          <Nav.Link href="#notifications">
            <FaBell />
            <span className="badge bg-dark text-white">11</span>
          </Nav.Link>
          <Nav.Link href="#messages">
            <FaEnvelope />
          </Nav.Link>
          <Nav.Link href="#updates">
            <FaBolt />
          </Nav.Link>
          <Nav.Link href="#profile">
            <img
              src={Img}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "40px" }}
            />{" "}
            {/* Replace with user profile image */}
          </Nav.Link>

          <Button variant="danger" className="mx-2">
            + Create
          </Button>
          <Button variant="outline-primary">Upgrade</Button>
          <Nav.Link href="#more">
            <FaThLarge /> More
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
