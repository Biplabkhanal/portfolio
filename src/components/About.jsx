import React from "react";
import Biplab from "../assets/img/biplab.jpg";
import { FaDownload, FaRegHand } from "react-icons/fa6";
import resume from "../assets/resume/CV_Biplab.pdf";

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
            <h4 className="subtitle">Backend Developer</h4>

            <p className="description">
              I'm a backend developer with frontend knowledge, specializing in
              PHP, Laravel, and database design. I build robust server
              architectures while leveraging React skills to create integrated
              web solutions. With experience at{" "}
              <b class="company">
                <a
                  class="icon-experience"
                  href="https://treeleaf.ai/"
                  target="blank"
                >
                  Treeleaf.ai
                </a>
              </b>{" "}
              and{" "}
              <b class="company">
                <a
                  class="icon-experience"
                  href="https://renderbooking.com/"
                  target="blank"
                >
                  Renderbooking
                </a>
              </b>
              , I've developed comprehensive skills across the development stack
              with a primary focus on backend systems.
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
                href={resume}
                className="cta-button secondary"
                download="Biplab_Khanal_Resume.pdf"
              >
                Resume <FaDownload style={{ marginLeft: "5px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
