import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveLink(hash);
      }

      if (window.scrollY > 50) {
        setScrolled(true);
        setIsMenuOpen(false);
      } else {
        setScrolled(false);
      }
    };

    const handleSectionVisibility = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contacts",
      ];
      const sectionElements = sections.map((section) =>
        document.querySelector(`#${section}`)
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLink(entry.target.id);
              history.replaceState(null, null, `#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.5 }
      );

      sectionElements.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => {
        sectionElements.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    };

    window.addEventListener("scroll", onScroll);
    const cleanup = handleSectionVisibility();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (cleanup) cleanup();
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsMenuOpen(false);
    window.location.hash = value;
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      style={{
        transition: "all 0.3s ease-in-out",
        background: scrolled ? "rgba(18, 18, 18, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo-container">
            <img
              src="/src/assets/logo/the_shield.png"
              alt="BK Logo"
              className="logo-image"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
          onClick={toggleMenu}
          style={{
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "25px",
              height: "20px",
            }}
          >
            <span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, #aa367c, #4a2fbd)",
                transition: "0.3s",
                opacity: isMenuOpen ? 0 : 1,
                top: "0",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, #aa367c, #4a2fbd)",
                transition: "0.3s",
                top: "50%",
                transform: isMenuOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, #aa367c, #4a2fbd)",
                transition: "0.3s",
                top: "50%",
                transform: isMenuOpen ? "rotate(-45deg)" : "none",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, #aa367c, #4a2fbd)",
                transition: "0.3s",
                opacity: isMenuOpen ? 0 : 1,
                bottom: "0",
              }}
            />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isMenuOpen ? "show-menu" : ""}
          onExited={() => setIsMenuOpen(false)}
          style={{
            background: isMenuOpen ? "rgba(18, 18, 18, 0.95)" : "transparent",
            backdropFilter: isMenuOpen ? "blur(10px)" : "none",
            padding: isMenuOpen ? "1rem" : "0",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Nav className="ms-auto mobile-nav">
            {[
              "home",
              "about",
              "skills",
              "experience",
              "projects",
              "contacts",
            ].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={
                  activeLink === link ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink(link)}
                style={{
                  color: "#fff",
                  opacity: activeLink === link ? 1 : 0.7,
                  position: "relative",
                  transition: "all 0.3s ease",
                  padding: "0.8rem 1.5rem",
                  textAlign: "center",
                }}
              >
                {link === "contacts"
                  ? "Contact Me"
                  : link.charAt(0).toUpperCase() + link.slice(1)}
                {activeLink === link && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0.5rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      height: "2px",
                      width: "30%",
                      background: "linear-gradient(90deg, #aa367c, #4a2fbd)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
