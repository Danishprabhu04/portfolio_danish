import { ExternalLink, Code } from 'lucide-react';
import { projects } from '@/data/projectsData';

export function Projects() {
  return (
    <section className="projects-page-section" id="projects">
      <div className="projects-page-container">
        <div className="projects-page-header">
          <p className="section-label">[section_projects]</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            A showcase of deployed systems and production-ready architectures. Each project demonstrates advanced engineering principles, scalability, and real-world impact.
          </p>
        </div>

        <div className="projects-gallery">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isLarge = index === 0; // First project is large
            const isMedium = index === 1 || index === 2; // Next two are medium

            return (
              <div
                key={project.id}
                className={`project-gallery-card ${isLarge ? 'large' : isMedium ? 'medium' : 'small'}`}
              >
                <div className="project-card-inner">
                  {/* Status Badge */}
                  <span className="project-status-badge">{project.status}</span>

                  {/* Icon */}
                  <div className="project-gallery-icon">
                    <IconComponent size={28} />
                  </div>

                  {/* Content */}
                  <div className="project-gallery-content">
                    <h3 className="project-gallery-title">{project.title}</h3>
                    <p className="project-gallery-desc">{project.description}</p>

                    {/* Tags */}
                    <div className="project-gallery-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-gallery-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="project-gallery-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-gallery-link github-link"
                        >
                          <Code size={14} /> Code
                        </a>
                      )}
                      <a href="#contact" className="project-gallery-link">
                        <ExternalLink size={14} /> Discuss
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
