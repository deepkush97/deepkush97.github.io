import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="mx-1 mt-1">
      <Navbar.Brand href="/">
        <img
          src="./logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt="deepkush97 logo"
        />
        {"  "}
        Deepanshu Kushwaha
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto mr-5">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/resume">
            <Nav.Link>Resume</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
