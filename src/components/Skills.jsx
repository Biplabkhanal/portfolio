import HTMLIcon from "../assets/img/html-5-svgrepo-com.svg";
import CSSIcon from "../assets/img/css-3-svgrepo-com.svg";
import ReactIcon from "../assets/img/react-svgrepo-com.svg";
import GitIcon from "../assets/img/git-svgrepo-com.svg";
import GitHubIcon from "../assets/img/github-color-svgrepo-com.svg";
import JSIcon from "../assets/img/js-svgrepo-com.svg";
import BootstrapIcon from "../assets/img/bootstrap-svgrepo-com.svg";
import LaravelIcon from "../assets/img/laravel.svg";
import TailwindIcon from "../assets/img/tailwind-css.svg";
import PHPIcon from "../assets/img/php.svg";
import MYSQLIcon from "../assets/img/MySQL-Logo.wine.svg";

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
    { icon: GitIcon, name: "Git" },
    { icon: GitHubIcon, name: "GitHub" },
    { icon: MYSQLIcon, name: "MySQL" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="main-text">
        <p className="text-secondary text-uppercase tracking-wider mb-0">
          What I Am Expert In
        </p>
        <h2>
          My <span>Skills</span>
        </h2>
      </div>
      <div className="container">
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div
                className="card h-100 border-0 shadow-lg position-relative text-white"
                style={{ backgroundColor: "#1D1836", cursor: "pointer" }}
              >
                <div className="card-body text-center">
                  <div className="icon-wrapper mb-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="img-fluid"
                      style={{ height: "80px" }}
                    />
                  </div>
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
