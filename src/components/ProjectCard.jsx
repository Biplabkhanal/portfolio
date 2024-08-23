import { Col } from "react-bootstrap";
const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const handleRedirect = () => {
    window.open(githubLink, "_blank");
  };

  return (
    <>
      <Col size={12} sm={6} md={6} className="d-md-block d-none">
        <div className="proj-imgbx " onClick={handleRedirect}>
          <img style={{ height: "390px" }} src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Col size={12} sm={6} md={6} className=" d-lg-none d-md-none d-block">
        <div className="proj-imgbx" onClick={handleRedirect}>
          <img style={{ height: "260px" }} src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </>
  );
};
export default ProjectCard;
