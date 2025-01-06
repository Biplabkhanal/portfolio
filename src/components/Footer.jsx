import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={10} sm={6}></Col>
          <Col size={10} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/biplab-khanal-7999901a3/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://www.facebook.com/biplab.khanal.104"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/leo_biplab10?igsh=b205eXI2ZnVrYmw%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
              <a
                href="https://github.com/Biplabkhanal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon4}
                  alt="Icon"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </a>
            </div>
            <div className="contact-info">
              <p className="mb-0">
                <FaEnvelope className="me-2" />
                khanalbiplab@gmail.com
              </p>
              <p className="mb-0">
                <FaPhone className="me-2" />
                +977-9803344703
              </p>
            </div>
          </Col>
          <Col size={10} sm={6} className="text-center text-sm-start">
            <p className="mb-0">
              &#169; {currentYear} Biplab Khanal. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
