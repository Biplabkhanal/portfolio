import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    if (formDetails.phone.length < 10) {
      setStatus({
        success: false,
        message: "Phone number must be at least 10 digits",
      });
      setButtonText("Send");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_dh5boyp",
        "template_y7mb6vu",
        e.target,
        "00pm_DSs8DYNgvz1W"
      );

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({
        success: true,
        message: (
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <strong style={{ fontSize: "1.2em" }}>
              Message sent successfully
            </strong>
          </div>
        ),
      });
    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: (
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <strong style={{ fontSize: "1.2em" }}>
              Failed to send message
            </strong>
          </div>
        ),
      });
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact" id="contacts">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <div>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name="firstName"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) =>
                          onFormUpdate("firstName", e.target.value)
                        }
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name="lastName"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        name="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        required
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="number"
                        name="phone"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                        required
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="4"
                        name="message"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) =>
                          onFormUpdate("message", e.target.value)
                        }
                        required
                      ></textarea>
                      <button>
                        <span style={{ color: "#fff" }}>{buttonText}</span>
                      </button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
