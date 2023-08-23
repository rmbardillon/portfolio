interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({ name, description, image, link }: ProjectCardProps) => {
  return (
    <div className="col" id="project">
      <a className="card-link-style" href={link} target="__blank">
        <div
          className="card"
          style={{ maxHeight: "600px", minHeight: "450px", overflow: "hidden" }}
        >
          <img
            className="card-img-top w-100 d-block fit-cover"
            style={{ height: "200px" }}
            src={image}
            alt={image}
          />
          <div className="card-body p-4">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
