import ProjectCard from "../components/ProjectCard";
import { products } from "../assets/projects";
import SectionHeading from "@/components/SectionHeading";

const Projects = () => (
  <section className="py-20" id="projects">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="Projects"
        title="Personal & side projects"
        description="Independent projects that demonstrate my approach to system design, backend architecture, and full-stack development."
        align="center"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
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
  </section>
);

export default Projects;
