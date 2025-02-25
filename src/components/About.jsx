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
            <h4 className="subtitle">Full-Stack Developer</h4>

            <p className="description">
              I'm a full-stack developer with expertise in React, PHP, and
              Laravel. Passionate about creating user-friendly interfaces and
              robust systems, I specialize in turning ideas into efficient and
              scalable web applications. With experience at{" "}
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
              , I've developed skills in both front-end and back-end
              technologies.
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
