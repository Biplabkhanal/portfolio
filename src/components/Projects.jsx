import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Travel and Tour Management system",
      description:
        "Design & Development of travel website from which we can book the destinations to visit.",
      imgUrl: projImg1,
    },
    {
      title: "Traffic Symbol Recognition",
      description: "Done as a final year project.",
      imgUrl: projImg2,
    },
    {
      title: "Myntra-Clone",
      description: "Development of myntra-clone.",
      imgUrl: projImg3,
    },
    {
      title: "Travel and Tour Management system",
      description:
        "Design & Development of travel website from which we can book the destinations to visit.",
      imgUrl: projImg4,
    },
    {
      title: "Traffic Symbol Recognition",
      description: "Done as a final year project.",
      imgUrl: projImg5,
    },
    {
      title: "Myntra-Clone",
      description: "Development of myntra-clone",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p id="project-intro" className="animate__animated">
                    <b>
                      Welcome to my Projects section! Explore a diverse range of
                      projects showcasing my skills and expertise in web
                      development.
                    </b>{" "}
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p id="project-intro" className="animate__animated">
                          <br />
                          I've developed a Travel and Tour Management System,
                          enabling efficient travel planning and management for
                          users using PHP.
                          <br />
                          <br />
                          This was followed by a Traffic Symbol Recognition
                          system, utilizing machine learning techniques to
                          recognize traffic symbols in images.This is done by
                          using HTML,CSS,Bootstrap,Javascript and Machine
                          learning algorithm CNN.
                          <br />
                          <br />
                          Additionally, I've created a Myntra clone using
                          React.js, offering a seamless shopping experience
                          similar to the popular e-commerce platform.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
export default Projects;
