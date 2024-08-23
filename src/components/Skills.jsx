import { SiBootstrap, SiReactquery } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTMLIcon from "../assets/img/html-5-svgrepo-com.svg";
import CSSIcon from "../assets/img/css-3-svgrepo-com.svg";
import ReactIcon from "../assets/img/react-svgrepo-com.svg";
import ReduxIcon from "../assets/img/redux-svgrepo-com.svg";
import GitIcon from "../assets/img/git-svgrepo-com.svg";
import GitHubIcon from "../assets/img/github-color-svgrepo-com.svg";
import ANT from "../assets/img/ant-design-svgrepo-com.svg";
import JS from "../assets/img/js-svgrepo-com.svg";
import BootStratpIcon from "../assets/img/bootstrap-svgrepo-com.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a frontend developer, I possess a strong foundation in <br />
                web development technologies and frameworks,
                <br />
                enabling me to create visually appealing and responsive web
                applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={HTMLIcon} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CSSIcon} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={BootStratpIcon} alt="Bootstarp" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={JS} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={ReactIcon} alt="React JS" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={ReduxIcon} alt="Redux" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <SiReactquery
                    style={{
                      color: "#FF4154",
                      width: "150px",
                      height: "175px",
                    }}
                  />
                  <h5>React Query</h5>
                </div>

                <div className="item">
                  <img src={ANT} alt="Ant Design" />
                  <h5>Ant Design</h5>
                </div>
                <div className="item">
                  <img src={GitIcon} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={GitHubIcon} alt="Github" />
                  <h5>Github</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
