import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
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
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/projects">
            <a className="nav-link">Projects</a>
          </Link>
          <Link href="/resume">
            <a className="nav-link">Resume</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
