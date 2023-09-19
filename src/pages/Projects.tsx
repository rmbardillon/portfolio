import ProjectCard from "../components/ProjectCard";
import { products } from "../assets/projects";

const Projects = () => {
  return (
		<div className="container py-4 py-xl-5" id="projects">
			<div className="row mb-5">
				<div className="col-md-8 col-xl-6 text-center mx-auto">
					<b className="text-primary">PROJECTS</b>
					<p className="fs-5 fw-normal">
						Welcome to my project showcase, a curated collection of
						my latest works that demonstrate my skills and
						dedication.
					</p>
				</div>
			</div>
			<div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
				{products.map((project, index) => (
					<ProjectCard
						key={index}
						name={project.name}
						description={project.description}
						images={project.images}
						link={project.link}
                        code={project.code}
                        stack={project.stack}
					/>
				))}
			</div>
		</div>
  );
}

export default Projects