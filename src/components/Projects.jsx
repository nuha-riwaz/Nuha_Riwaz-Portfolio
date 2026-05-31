import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <div className="about-title">
    <span className="aboutme">Projects</span><br/><br />
    </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card-top">
              <div className="project-icon">
                <span>{"</>"}</span>
              </div>
              <h3>{project.title}</h3>
            </div>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.split(",").map((t) => (
                <span className="tech-badge" key={t}>
                  {t.trim()}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <a href={project.github || "#"} target="_blank" rel="noreferrer" className="github-link">
                ⬡ GitHub
              </a>
              <a href={project.link || "#"} target="_blank" rel="noreferrer" className="view-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;