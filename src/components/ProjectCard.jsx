import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, icon, githubLink, imgUrl }) => {
  const handleRedirect = () => {
    if (githubLink) {
      window.open(githubLink, "_blank");
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-card"
        onClick={githubLink ? handleRedirect : null}
        style={{
          cursor: githubLink ? "pointer" : "default",
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: "10px",
          margin: "15px 0",
        }}
      >
        <img src={imgUrl} alt={`${title} image`} />
        <div className="proj-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
