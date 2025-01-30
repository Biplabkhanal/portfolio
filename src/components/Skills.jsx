import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: [-5, 5],
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <section
      className="skills-section py-lg-5 py-4 skills position-relative overflow-hidden"
      id="skills"
    >
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100],
              x: [-50, 50],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="main-text">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary text-uppercase tracking-wider mb-0"
          >
            What I Am Expert In
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My <span>Skills</span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="row g-4"
        >
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="skill-card h-100"
              >
                <div className="card-content text-center">
                  <div className="icon-container mb-3">
                    <motion.div
                      className="icon-wrapper"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-icon"
                      />
                    </motion.div>
                  </div>
                  <motion.h5 className="skill-name">{skill.name}</motion.h5>
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
