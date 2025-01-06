import React from "react";
import Biplab from "../assets/img/biplab.jpg";
import { FaRegHand } from "react-icons/fa6";

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="glassCard">
        <div className="about-container">
          <div className="imageWrapper">
            <div className="imageContainer">
              <img src={Biplab} alt="Profile" className="profileImage" />
              <div className="overlay"></div>
            </div>
          </div>

          <div className="content">
            <h2 className="title">
              About <span className="highlight">Me</span>
            </h2>
            <h4 className="subtitle">Full-Stack Developer</h4>

            <p className="description">
              I'm a full-stack developer passionate about creating user-friendly
              interfaces and robust systems, turning ideas into efficient and
              scalable web applications.
            </p>

            <div className="button-group">
              <a
                href="mailto:khanalbiplab@gmail.com"
                className="cta-button primary"
              >
                Say Hello{" "}
                <FaRegHand
                  style={{ marginLeft: "5px", transform: "rotate(-30deg)" }}
                />
              </a>
              <a
                href="/public/CV_Biplab.pdf"
                className="cta-button secondary"
                download="Biplab_Khanal_Resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
