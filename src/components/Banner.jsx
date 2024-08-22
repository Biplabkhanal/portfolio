import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import myImg from "../assets/img/biplab.jpg";

import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const handleClick = () => {
  // Scroll to the contact section
  const contactSection = document.getElementById("contacts");
  contactSection.scrollIntoView({ behavior: "smooth" });
};
const Banner = () => {
  const toRotate = ["Frontend Developer", "Web Devloper"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleteing] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleteing(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Biplab Khanal`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Web Developer", "Frontend Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a frontend developer passionate about crafting engaging
                    and user-friendly web experiences. With a keen eye for
                    design and a love for clean code, I enjoy turning ideas into
                    elegant and functional websites and applications.
                  </p>
                  {/* <button onClick={handleClick}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    style={{ borderRadius: "64px" }}
                    src={myImg}
                    alt="My Photo"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
