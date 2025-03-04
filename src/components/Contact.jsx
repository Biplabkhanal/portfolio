import React, { useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";

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
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
    if (errors[category]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[category]; // Remove error on typing
      setErrors(updatedErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;

    let isValid = true;
    const newErrors = {};

    const triggerAnimation = (fieldName) => {
      const field = document.querySelector(`[name="${fieldName}"]`);
      field.classList.add("shake");
      setTimeout(() => field.classList.remove("shake"), 500);
    };

    // Validation logic
    if (!formDetails.firstName.trim()) {
      newErrors.firstName = "First name is required";
      triggerAnimation("firstName");
      isValid = false;
    }

    if (!emailRegex.test(formDetails.email)) {
      newErrors.email = "Please enter a valid email address";
      triggerAnimation("email");
      isValid = false;
    }

    if (!phoneRegex.test(formDetails.phone)) {
      newErrors.phone = "Phone number must be at least 10 digits";
      triggerAnimation("phone");
      isValid = false;
    }

    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
      triggerAnimation("message");
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      setButtonText("Send");
      return;
    }

    try {
      setButtonText("Sending...");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
      setErrors({});
      setShowSuccess(true);

      setTimeout(() => {
        setStatus({});
        setShowSuccess(false);
      }, 6000);
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Failed to send message" });
      setShowError(true);
      setTimeout(() => {
        setStatus({});
        setShowError(false);
      }, 6000);
    }
  };

  return (
    <section className="contact py-5 " id="contacts">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={`${
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }`}
                  src={contactImg}
                  alt="Contact Me"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <div>
                <p className="text-secondary text-uppercase tracking-wider mb-0 px-2 px-lg-0">
                  If You Have Any Project In Your Mind.
                </p>
                <h2 className="main-head px-2 px-lg-0">
                  <span className="head-exp"> Contact</span> Me!
                </h2>
                <form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <Col size={12} sm={6} className="px-3 px-lg-1">
                      <div
                        className={`textarea-wrapper ${
                          errors.firstName ? "error" : ""
                        }`}
                      >
                        <input
                          type="text"
                          name="firstName"
                          value={formDetails.firstName}
                          placeholder={errors.firstName ? "" : "First Name"}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                          className={errors.firstName ? "error" : ""}
                          aria-label="First Name"
                        />
                        {errors.firstName && (
                          <div className="error-overlay">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col size={12} sm={6} className="px-3 px-lg-1">
                      <input
                        type="text"
                        name="lastName"
                        value={formDetails.lastName}
                        placeholder={errors.lastName ? "" : "Last Name"}
                        onChange={(e) =>
                          onFormUpdate("lastName", e.target.value)
                        }
                        className={errors.lastName ? "error" : ""}
                        aria-label="Last Name"
                      />
                      {errors.lastName && (
                        <div className="error-overlay">{errors.lastName}</div>
                      )}
                    </Col>
                    <Col size={12} sm={6} className="px-3 px-lg-1">
                      <div
                        className={`textarea-wrapper ${
                          errors.email ? "error" : ""
                        }`}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder={errors.email ? "" : "Email Address"}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          className={errors.email ? "error" : ""}
                          aria-label="Email Address"
                        />
                        {errors.email && (
                          <div className="error-overlay">{errors.email}</div>
                        )}
                      </div>
                    </Col>
                    <Col size={12} sm={6} className="px-3 px-lg-1">
                      <div
                        className={`textarea-wrapper ${
                          errors.phone ? "error" : ""
                        }`}
                      >
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder={errors.phone ? "" : "Phone No."}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                          className={errors.phone ? "error" : ""}
                          aria-label="Phone Number"
                        />
                        {errors.phone && (
                          <div className="error-overlay">{errors.phone}</div>
                        )}
                      </div>
                    </Col>
                    <Col size={12} className="px-3 px-lg-1">
                      <div
                        className={`textarea-wrapper ${
                          errors.message ? "error" : ""
                        }`}
                      >
                        <textarea
                          rows="4"
                          name="message"
                          value={formDetails.message}
                          placeholder={errors.message ? "" : "Message"}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          className={errors.message ? "error" : ""}
                          aria-label="Message"
                        ></textarea>
                        {errors.message && (
                          <div className="error-overlay">{errors.message}</div>
                        )}
                      </div>
                      <button
                        type="submit"
                        disabled={buttonText === "Sending..."}
                        className="submit-btn"
                      >
                        {buttonText === "Sending..." ? (
                          <div className="d-flex align-items-center justify-content-center">
                            <Spinner
                              animation="border"
                              size="sm"
                              style={{ color: "#fff" }}
                            />
                          </div>
                        ) : (
                          <span style={{ color: "#fff" }}>{buttonText}</span>
                        )}
                      </button>
                    </Col>
                    {status.message && !showSuccess && !showError && (
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
                    {showSuccess && (
                      <Col size={12} className="mt-4">
                        <div className="success-animation text-center">
                          <div className="success-icon-circle">
                            <svg className="success-icon" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          </div>
                          <h5 className="mt-3 text-success animate__animated animate__fadeIn">
                            Message Sent Successfully!
                          </h5>
                        </div>
                      </Col>
                    )}
                    {showError && (
                      <Col size={12} className="mt-4">
                        <div className="error-animation text-center">
                          <div className="error-icon-circle">
                            <svg className="error-icon" viewBox="0 0 24 24">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                          </div>
                          <h5 className="mt-3 text-danger animate__animated animate__fadeIn">
                            Failed to Send Message!
                          </h5>
                        </div>
                      </Col>
                    )}
                  </Row>
                </form>
                <div className="floating-contact">
                  <a
                    href="https://wa.me/9803344703"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="whatsapp-icon" />
                  </a>
                </div>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
