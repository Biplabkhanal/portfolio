import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiAntdesign,
  SiRedux,
  SiReactquery,
  SiGit,
  SiGithub,
} from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                  <SiHtml5 size={64} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <SiCss3 size={64} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <SiBootstrap size={64} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <SiJavascript size={64} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <SiReact size={64} />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <SiRedux size={64} />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <SiReactquery size={64} />
                  <h5>React Query</h5>
                </div>

                <div className="item">
                  <SiAntdesign size={64} />
                  <h5>Ant Design</h5>
                </div>
                <div className="item">
                  <SiGit size={64} />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <SiGithub size={64} />
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
