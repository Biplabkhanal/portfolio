import { SiReactquery } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTMLIcon from "../assets/img/html-5-svgrepo-com.svg";
import CSSIcon from "../assets/img/css-3-svgrepo-com.svg";
import ReactIcon from "../assets/img/react-svgrepo-com.svg";
import ReduxIcon from "../assets/img/redux-svgrepo-com.svg";
import GitIcon from "../assets/img/git-svgrepo-com.svg";
import GitHubIcon from "../assets/img/github-color-svgrepo-com.svg";
import ANTIcon from "../assets/img/ant-design-svgrepo-com.svg";
import JSIcon from "../assets/img/js-svgrepo-com.svg";
import BootstrapIcon from "../assets/img/bootstrap-svgrepo-com.svg";
import LaravelIcon from "../assets/img/laravel.svg";
import TailwindIcon from "../assets/img/tailwind-css.svg";
import PHPIcon from "../assets/img/php.svg";

const Skills = () => {
  const skills = [
    { icon: HTMLIcon, name: "HTML" },
    { icon: CSSIcon, name: "CSS" },
    { icon: BootstrapIcon, name: "Bootstrap" },
    { icon: JSIcon, name: "JavaScript" },
    { icon: PHPIcon, name: "PHP" },
    { icon: ReactIcon, name: "React JS" },
    { icon: TailwindIcon, name: "Tailwind CSS" },
    { icon: LaravelIcon, name: "Laravel" },
    { icon: ReduxIcon, name: "Redux" },
    {
      component: SiReactquery,
      name: "React Query",
      style: {
        color: "#FF4154",
        width: "150px",
        height: "175px",
      },
    },
    { icon: ANTIcon, name: "Ant Design" },
    { icon: GitIcon, name: "Git" },
    { icon: GitHubIcon, name: "GitHub" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a full-stack developer, I specialize in creating responsive,
                <br className="d-none d-md-block" />
                visually appealing, and fully functional web applications{" "}
                <br className="d-none d-md-block" />
                by seamlessly integrating <br className="d-none d-md-block" />
                frontend and backend technologies.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    {skill.component ? (
                      <skill.component style={skill.style} />
                    ) : (
                      <img src={skill.icon} alt={skill.name} />
                    )}
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
