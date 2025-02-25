import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
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
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="bubble"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: generateRandomPath(),
            y: generateRandomPath(),
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            width: `${Math.random() * 80 + 20}px`,
            height: `${Math.random() * 80 + 20}px`,
            borderRadius: "50%",
            background: `linear-gradient(135deg, 
              rgba(170, 54, 124, ${Math.random() * 0.3 + 0.1}), 
              rgba(74, 47, 189, ${Math.random() * 0.3 + 0.1}))`,
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 0,
          }}
        />
      ))}
    </div>
  );
};

// Skill badge component for better tech stack visualization
const SkillBadge = ({ skill }) => (
  <Badge
    className="me-2 mb-2 skill-badge"
    style={{
      background: "rgba(255,255,255,0.1)",
      color: "#e2e2f0",
      padding: "6px 10px",
      borderRadius: "5px",
      fontSize: "0.8em",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "all 0.3s ease",
    }}
  >
    {skill}
  </Badge>
);

const WorkExperience = () => {
  return (
    <section
      className="work-experience py-5 py-lg-6 position-relative overflow-hidden"
      id="work"
      style={{ minHeight: "100vh" }}
    >
      <BubbleBackground />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row className="text-center mb-5">
            <Col>
              <p
                className="text-secondary text-uppercase tracking-wider mb-1 fw-bold"
                style={{ letterSpacing: "3px", fontSize: "0.85em" }}
              >
                Where I have worked
              </p>
              <h2 className="main-head fs-1">
                Work{" "}
                <span className="head-exp" style={{ color: "#aa367c" }}>
                  Experience
                </span>
              </h2>
            </Col>
          </Row>
        </motion.div>

        <Row>
          <Col>
            <div className="svg-experience">
              <motion.div
                className="decor-experience"
                initial={{ rotate: 0, opacity: 0.5 }}
                animate={{ rotate: 360, opacity: 1 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <DecorativeSVG />
              </motion.div>
            </div>
            <VerticalTimeline lineColor="rgba(255, 255, 255, 0.2)">
              <VerticalTimelineElement
                iconStyle={{
                  background: "linear-gradient(135deg, #383E56, #2a2f40)",
                  boxShadow: "0 0 0 4px rgba(170, 54, 124, 0.6)",
                }}
                icon={
                  <div className="vertical-timeline-element-icon">
                    <img
                      src={TreeleafLogo}
                      alt="Treeleaf.ai"
                      className="icon-img"
                    />
                  </div>
                }
                contentStyle={{
                  background:
                    "linear-gradient(to right bottom, #1D1836, #26214b)",
                  color: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                contentArrowStyle={{ borderRight: "10px solid #1D1836" }}
                className="timeline-element-card"
              >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <h3
                    className="text-white mb-2 mb-md-0"
                    style={{ fontWeight: "600", fontSize: "1.3rem" }}
                  >
                    React JS Developer (Internship)
                  </h3>
                  <span
                    className="vertical-timeline-element-date badge"
                    style={{
                      background: "rgba(170, 54, 124, 0.3)",
                      color: "white",
                      padding: "7px 12px",
                      borderRadius: "6px",
                    }}
                  >
                    May 2024 - August 2024
                  </span>
                </div>
                <a
                  className="text-secondary icon-experience d-inline-block my-1"
                  href="https://treeleaf.ai/"
                  target="blank"
                  style={{
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    color: "#a3a3ff",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                  onMouseOut={(e) => (e.target.style.color = "#a3a3ff")}
                >
                  Treeleaf.ai
                </a>
                <ul
                  className="mt-3"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
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

                <div className="mt-4">
                  <div>
                    <SkillBadge skill="React.js" />
                    <SkillBadge skill="Redux" />
                    <SkillBadge skill="Ant Design" />
                    <SkillBadge skill="React Query" />
                    <SkillBadge skill="Recharts" />
                    <SkillBadge skill="Canvas" />
                    <SkillBadge skill="Bootstrap" />
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{
                  background: "linear-gradient(135deg, #383E56, #2a2f40)",
                  boxShadow: "0 0 0 4px rgba(170, 54, 124, 0.6)",
                }}
                icon={
                  <div
                    className="vertical-timeline-element-icon"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                contentStyle={{
                  background:
                    "linear-gradient(to right bottom, #1D1836, #26214b)",
                  color: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                contentArrowStyle={{ borderRight: "10px solid #1D1836" }}
                className="timeline-element-card"
              >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <h3
                    className="text-white mb-2 mb-md-0"
                    style={{ fontWeight: "600", fontSize: "1.3rem" }}
                  >
                    PHP Web Developer
                  </h3>
                  <span
                    className="vertical-timeline-element-date badge"
                    style={{
                      background: "rgba(170, 54, 124, 0.3)",
                      color: "white",
                      padding: "7px 12px",
                      borderRadius: "6px",
                    }}
                  >
                    Oct 2024 - Present
                  </span>
                </div>
                <a
                  className="text-secondary icon-experience d-inline-block my-1"
                  href="https://renderbooking.com/"
                  target="blank"
                  style={{
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    color: "#a3a3ff",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                  onMouseOut={(e) => (e.target.style.color = "#a3a3ff")}
                >
                  Renderbooking
                </a>
                <ul
                  className="mt-3"
                  style={{ fontSize: "15px", lineHeight: "1.7" }}
                >
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <div className="mt-4">
                  <div>
                    <SkillBadge skill="PHP" />
                    <SkillBadge skill="MySQL" />
                    <SkillBadge skill="JavaScript" />
                    <SkillBadge skill="jQuery" />
                    <SkillBadge skill="REST APIs" />
                    <SkillBadge skill="Laravel" />
                    <SkillBadge skill="Postman" />
                  </div>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
        <div className="svg-experience-bottom">
          <motion.div
            className="decor-experience-bottom"
            initial={{ rotate: 0, opacity: 0.5 }}
            animate={{ rotate: -360, opacity: 1 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <DecorativeSVG />
          </motion.div>
        </div>
      </Container>

      {/* Add this CSS to your component */}
      <style jsx>{`
        .timeline-element-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-element-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .skill-badge:hover {
          background: rgba(170, 54, 124, 0.3) !important;
          transform: translateY(-2px);
        }

        .vertical-timeline-element-icon {
          transition: transform 0.3s ease;
        }

        .vertical-timeline-element:hover .vertical-timeline-element-icon {
          transform: scale(1.1);
        }

        .vertical-timeline::before {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1),
            rgba(170, 54, 124, 0.4),
            rgba(255, 255, 255, 0.1)
          ) !important;
          width: 3px !important;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;
