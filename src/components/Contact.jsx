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
  const [errors, setErrors] = useState({});

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

      setTimeout(() => {
        setStatus({});
      }, 5000);
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Failed to send message" });
      console.error("Error:", error);
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
                <p className="text-secondary text-uppercase tracking-wider mb-0">
                  If You Have Any Project In Your Mind.
                </p>
                <h2 className="main-head">
                  <span className="head-exp"> Contact</span> Me!
                </h2>

                <form onSubmit={handleSubmit} noValidate>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
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
                    <Col size={12} sm={6} className="px-1">
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
                    <Col size={12} sm={6} className="px-1">
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
                    <Col size={12} sm={6} className="px-1">
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
                    <Col size={12} className="px-1">
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
                      >
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
