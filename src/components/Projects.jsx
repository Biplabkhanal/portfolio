import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import anydone1 from "../assets/img/anydone1.png";
import treelytics from "../assets/img/treelytics.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projectsTab1 = [
    {
      title: "Travel and Tour Management system",
      description:
        "Design & Development of travel website from which we can book the destinations to visit.",
      imgUrl: projImg4,
      githubLink: "https://github.com/Biplabkhanal/Travel-Website",
    },

    {
      title: "Traffic Symbol Recognition",
      description:
        "Done as a final year project. Used HTML, CSS, Bootstrap, JavaScript, and Machine Learning algirtihm CNN to predict the traffic symbol.",
      imgUrl: projImg5,
      githubLink: "https://github.com/Biplabkhanal/Traffic-Symbol-Recognition",
    },
    {
      title: "Myntra-Clone",
      description: "Development of myntra-clone.",
      imgUrl: projImg3,
      githubLink: "https://github.com/Biplabkhanal/MyntraClone-using-ReactJS",
    },

    {
      title: "Anydone Website",
      description:
        "Done this project during my internship period, in which i had built different pages such as landing page, about us, flowcess and changed other different contents using Bootstrap components, HTML and JavaScript.",
      imgUrl: anydone1,
      githubLink: "https://anydone.com/",
    },
    {
      title: "Treelytics",
      description:
        "Done this project during my internship period, which a web based data analysis and visualization platform where i had used different ant design components, redux toolkit, react query, canvas, and styled component.",
      imgUrl: treelytics,
    },
  ];
  // const projectsTab2 = [
  //   {
  //     title: "Treelytics",
  //     description:
  //       "Done this project during my internship period, which a web based data analysis and visualization platform where i had used different ant design components, redux toolkit, react query, canvas, and styled component.",
  //     imgUrl: treelytics,
  //   },
  // ];

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
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    > */}
                    {/* <Nav.Item className="me-3">
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item> */}
                    {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item> */}
                    {/* </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane> */}
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
