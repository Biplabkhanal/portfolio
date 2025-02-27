import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import heroImg from "../assets/hero/hero-image.png";
import purpleSquare from "../assets/hero/purple-square.png";
import DecorativeSVG from "./SVG-Elements/SVGImages";

const Banner = () => {
  const toRotate = ["Full-Stack Developer."];
  const [isDeleting, setIsDeleteing] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(250);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = toRotate[0];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleteing(false);
      setDelta(250);
    }
  };

  return (
    <>
      <div className="banner" id="home">
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
                      {`Hi! I'm Biplab Khanal`} <br />
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
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
                    <img src={heroImg} alt="Developer" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
            </div>
          </div>
          <div className="side-by-side-container">
            <div className="hero_decor">
              <DecorativeSVG />
            </div>
            <img
              className="purple_romb1 animate__animated animate__fadeIn animate__slideInDown animate__delay-1s"
              src={purpleSquare}
              alt=""
              style={{
                "--animate-duration": "700ms",
                "--animate-delay": "800ms",
              }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};
export default Banner;
