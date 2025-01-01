import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo/Biplab-Logo.webp";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsMenuOpen(false); // Close menu after selecting a link
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle dark mode styles
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
          onClick={toggleMenu}
          style={{
            borderColor: "rgba(255, 255, 255, 0.5)",
          }}
        >
          {isMenuOpen ? (
            <span style={{ color: "white", fontSize: "30px" }}>×</span>
          ) : (
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
              }}
            />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isMenuOpen ? "show-menu" : ""}
          onExited={() => setIsMenuOpen(false)} // Sync collapse state
        >
          <Nav className="ms-auto mobile-nav">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contacts"
              className={
                activeLink === "contacts" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contacts")}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
