import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import RenderLogo from "../assets/img/renderbooking.png";
import TreeleafLogo from "../assets/img/treeleaf.png";
import DecorativeSVG from "./SVG-Elements/SVGImages";

const BubbleBackground = () => {
  const generateRandomPath = () => {
    return [...Array(5)].map(() => `${Math.random() * 100}%`);
  };

  return (
    <div className="bubble-container">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="bubble"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: generateRandomPath(),
            y: generateRandomPath(),
          }}
          transition={{
            duration: Math.random() * 20 + 10, // Faster and varied speeds
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
          style={{
            position: "absolute",
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            borderRadius: "50%",
            background: `linear-gradient(45deg, 
              rgba(170, 54, 124, ${Math.random() * 0.2 + 0.1}), 
              rgba(74, 47, 189, ${Math.random() * 0.2 + 0.1}))`,
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

const WorkExperience = () => {
  return (
    <section
      className="work-experience py-4 py-lg-5 position-relative overflow-hidden"
      id="work"
    >
      <BubbleBackground />
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <p className="text-secondary text-uppercase tracking-wider mb-0">
              Where I have worked
            </p>
            <h2 className="main-head">
              Work <span className="head-exp">Experience</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="svg-experience">
              <div className="decor-experience">
                <DecorativeSVG />
              </div>
            </div>
            <VerticalTimeline>
              <VerticalTimelineElement
                iconStyle={{ background: "#383E56", color: "#fff" }}
                icon={
                  <div className="vertical-timeline-element-icon">
                    <img
                      src={TreeleafLogo}
                      alt="Treeleaf.ai"
                      className="icon-img"
                    />
                  </div>
                }
                contentStyle={{ background: "#1D1836", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #232631" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-white mb-3">
                    React JS Developer (Internship)
                  </h3>
                  <span className="vertical-timeline-element-date">
                    May 2024 - August 2024
                  </span>
                </div>
                <a
                  className="text-secondary icon-experience"
                  href="https://treeleaf.ai/"
                  target="blank"
                >
                  Treeleaf.ai
                </a>
                <ul style={{ fontSize: "15px" }}>
                  <li>
                    Utilized Ant Design, React Query, Redux Toolkit, Recharts,
                    Canvas, Bootstrap.
                  </li>
                  <li>
                    Developed and maintained web applications using React.js and
                    other related technologies.
                  </li>
                  <li>
                    Led UI design and API integration for Treelytics project.
                  </li>
                  <li>
                    Made different pages of anydone website i.e. Landing page,
                    About us page, Flowcess page.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{
                  background: "#383E56",
                  color: "#fff",
                }}
                icon={
                  <div
                    className="vertical-timeline-element-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 4px 0 4px",
                    }}
                  >
                    <img
                      src={RenderLogo}
                      alt="Renderbooking"
                      className="icon-img"
                    />
                  </div>
                }
                contentStyle={{ background: "#1D1836", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid #232631" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="text-white mb-3">PHP Web Developer</h3>
                  <span className="vertical-timeline-element-date">
                    Oct 2024 - Now
                  </span>
                </div>
                <a
                  className="text-secondary icon-experience"
                  href="https://renderbooking.com/"
                  target="blank"
                >
                  Renderbooking
                </a>
                <ul style={{ fontSize: "15px" }}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
        <div className="svg-experience-bottom">
          <div className="decor-experience-bottom">
            <DecorativeSVG />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkExperience;
