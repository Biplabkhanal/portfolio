import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <section className="work-experience" id="work">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <p className="text-secondary text-uppercase tracking-wider">
              What I have done so far
            </p>
            <h2>Work Experience</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <VerticalTimeline>
              <VerticalTimelineElement
                iconStyle={{ background: "#383E56", color: "#fff" }}
                icon={
                  <div className="vertical-timeline-element-icon">
                    <img
                      src="https://cdn.sanity.io/images/dn908w7j/production/910196a3e37ad448c9da73091041fffa49e4c44b-225x225.png"
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
                  className="text-secondary"
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
                  <li>
                    Utilized version control systems such as Git, Github for
                    code management and collaboration with team members.
                  </li>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkExperience;
