import { Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
