import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import portfolio1 from "../assets/projects/portfolio1.jpg";
import portfolio2 from "../assets/projects/portfolio2.jpg";
import portfolio3 from "../assets/projects/portfolio3.jpg";
import portfolio4 from "../assets/projects/portfolio4.jpg";
import portfolio5 from "../assets/projects/portfolio5.jpg";
import portfolio6 from "../assets/projects/portfolio6.jpg";
import sphereLg from "../assets/projects/sphere_lg.png";
import sphereSm from "../assets/projects/sphere_sm.png";
import sphereMd from "../assets/projects/sphere_md.png";
import travel1 from "../assets/projects/travel1.jpg";
import traffic1 from "../assets/projects/traffic1.png";
import myntra1 from "../assets/projects/myntra1.jpg";
import anydone1 from "../assets/projects/anydpne2.png";
import treelytics1 from "../assets/projects/treelytics.png";
import fivebrothers1 from "../assets/projects/fivebrothers1.png";
import travel2 from "../assets/projects/travel2.jpg";
import traffic2 from "../assets/projects/traffic2.png";
import myntra2 from "../assets/projects/myntra2.jpg";
import anydone2 from "../assets/projects/anydone1.png";
import fivebrothers2 from "../assets/projects/fivebrothers2.png";
import travel3 from "../assets/projects/travel3.jpg";
import traffic3 from "../assets/projects/traffic3.png";
import fivebrothers3 from "../assets/projects/fivebrothers3.png";
import travel4 from "../assets/projects/travel4.jpg";
import fivebrothers4 from "../assets/projects/fivebrothers4.png";
import realtimechat from "../assets/projects/realtimechat1.png";
import realtimechat2 from "../assets/projects/realtimechat2.png";
import realtimechat3 from "../assets/projects/realtimechat3.png";
import realtimechat4 from "../assets/projects/realtimechat4.png";

import "animate.css";
import TrackVisibility from "react-on-screen";
import { useEffect, useState } from "react";
import GitHubStats from "./GitHubStats";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);
  const projectsTab1 = [
    {
      title: "Travel and Tour Management system",
      description:
        "Travel website from which we can book the destinations to visit.",
      imgUrl: portfolio1,
      githubLink: "https://github.com/Biplabkhanal/Travel-Website",
    },

    {
      title: "Traffic Symbol Recognition",
      description: "Platform to predict the image of traffic symbol.",
      imgUrl: portfolio2,
      githubLink: "https://github.com/Biplabkhanal/Traffic-Symbol-Recognition",
    },
    {
      title: "Myntra-Clone",
      description: "Development of myntra-clone.",
      imgUrl: portfolio3,
      githubLink: "https://github.com/Biplabkhanal/MyntraClone-using-ReactJS",
    },

    {
      title: "Anydone Website",
      description:
        "Done this project during my internship period, which is the static website of anydone.",
      imgUrl: portfolio4,
      githubLink: "https://anydone.com/",
    },
    {
      title: "Treelytics",
      description:
        "Done this project during my internship period, which is a web based data analysis and visualization platform.",
      imgUrl: portfolio5,
    },
    {
      title: "Five Brothers Traders",
      description:
        "Website of Five Brothers Traders, which is a stationery company.",
      imgUrl: portfolio6,
      githubLink: "https://fivebrotherstraders.com/",
    },
    {
      title: "Real Time Chat Application",
      description:
        "File attachment capability, message deletion, typing indicators, and real-time message delivery",
      imgUrl: portfolio3,
      githubLink: "https://github.com/Biplabkhanal/Real-Time-Chat.git",
    },
  ];
  const projectsTab2 = [
    {
      title: "Travel and Tour Management system",
      images: [travel1, travel2, travel3, travel4],
    },
    {
      title: "Traffic Symbol Recognition",
      images: [traffic1, traffic2, traffic3],
    },
    {
      title: "Myntra-Clone",
      images: [myntra1, myntra2],
    },
    {
      title: "Anydone Website",
      images: [anydone1, anydone2],
    },
    {
      title: "Treelytics",
      images: [treelytics1],
    },
    {
      title: "Five Brothers Traders",
      images: [fivebrothers1, fivebrothers2, fivebrothers3, fivebrothers4],
    },
    {
      title: "Real Time Chat Application",
      images: [realtimechat, realtimechat2, realtimechat3, realtimechat4],
    },
  ];

  return (
    <section className="project py-lg-4 py-2" id="projects">
      <Container>
        <img
          src={sphereSm}
          alt="Decorative Sphere Small"
          className="sphere sphere-sm"
        />
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <p className="text-secondary text-uppercase tracking-wider mb-0">
                    What I have done so far
                  </p>
                  <h2>
                    <span className="highlight">Projects</span>
                  </h2>
                  <p id="project-intro" className="animate__animated">
                    <b
                      className="fs-sm-5 "
                      style={{
                        fontSize: window.innerWidth <= 768 ? "1rem" : "18px",
                      }}
                    >
                      Welcome to my Projects section! <br className="d-block" />
                      Explore a diverse range of projects showcasing my skills
                      and expertise in web development.
                    </b>
                  </p>
                  <img
                    src={sphereLg}
                    alt="Decorative Sphere Large"
                    className="sphere sphere-lg"
                  />

                  {activeTab === 1 ? (
                    <>
                      <Row>
                        {projectsTab1.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                      <div className="dots-container d-flex justify-content-center mb-4 mt-4">
                        <span
                          className={`dot ${activeTab === 1 ? "active" : ""}`}
                          onClick={() => setActiveTab(1)}
                        ></span>
                        <span
                          className={`dot ${activeTab === 2 ? "active" : ""}`}
                          onClick={() => setActiveTab(2)}
                        ></span>
                      </div>
                      <div className="proj-link d-flex mt-4 justify-content-center">
                        <a
                          className="text-project"
                          onClick={() => setActiveTab(2)}
                          style={{ cursor: "pointer" }}
                        >
                          See Snapshots
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            className="arrow-icon"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path
                              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                              fill="#9C27B0"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <GitHubStats username="Biplabkhanal" />
                    </>
                  ) : (
                    <Row className="g-4 ">
                      {projectsTab2.map((project, index) => (
                        <Col key={index} xs={12} className="project-tab-2">
                          <div className="project-card d-flex flex-column align-items-center">
                            <div className="project-images d-flex justify-content-center flex-wrap">
                              {project.images.map((image, idx) => (
                                <img
                                  key={idx}
                                  src={image}
                                  alt={`${project.title} image ${idx + 1}`}
                                  className="img-fluid rounded shadow mb-2"
                                  style={{
                                    width:
                                      window.innerWidth <= 768
                                        ? "95px"
                                        : "300px",
                                    height:
                                      window.innerWidth <= 768
                                        ? "85px"
                                        : "210px",
                                    border: "1px solid #ddd",
                                    marginLeft:
                                      idx !== 0
                                        ? window.innerWidth <= 768
                                          ? "-15px"
                                          : "-30px"
                                        : "0",
                                    cursor: "pointer",
                                    zIndex: projectsTab2.length - idx,
                                  }}
                                  onClick={() => setSelectedImage(image)}
                                />
                              ))}
                            </div>
                            <h5
                              className="project-title"
                              style={{
                                fontSize:
                                  window.innerWidth <= 768 ? "1rem" : "1.25rem",
                              }}
                            >
                              {project.title}
                            </h5>
                          </div>
                        </Col>
                      ))}

                      {selectedImage && (
                        <div
                          className="modal"
                          onClick={() => setSelectedImage(null)}
                          style={{
                            display: "flex",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(5px)",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 9999,
                            margin: 0,
                          }}
                        >
                          <img
                            src={selectedImage}
                            alt="Full"
                            style={{
                              maxWidth:
                                window.innerWidth <= 768 ? "90%" : "45%",
                              maxHeight:
                                window.innerWidth <= 768 ? "50%" : "70%",
                              borderRadius: "7px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      )}

                      <div className="dots-container d-flex justify-content-center mb-4 mt-4">
                        <span
                          className={`dot ${activeTab === 1 ? "active" : ""}`}
                          onClick={() => setActiveTab(1)}
                        ></span>
                        <span
                          className={`dot ${activeTab === 2 ? "active" : ""}`}
                          onClick={() => setActiveTab(2)}
                        ></span>
                      </div>
                    </Row>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <img
          src={sphereMd}
          alt="Decorative Sphere Medium"
          className="sphere sphere-md"
        />
      </Container>
    </section>
  );
};

export default Projects;
