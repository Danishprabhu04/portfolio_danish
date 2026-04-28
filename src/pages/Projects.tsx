import { ExternalLink, Code } from 'lucide-react';
import { projects } from '@/data/projectsData';
import { MagicBento, ParticleCard } from '@/components/custom/MagicBento';

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

        <MagicBento
          enableSpotlight={true}
          glowColor="0, 255, 65"
          spotlightRadius={300}
        >
          {projects.map((project) => {
            const IconComponent = project.icon;

            return (
              <ParticleCard
                key={project.id}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="0, 255, 65"
                particleCount={12}
              >
                <div className="magic-bento-card__header">
                  <span className="magic-bento-card__label">{project.status}</span>
                  <IconComponent size={24} className="magic-bento-card__icon" />
                </div>
                <div className="magic-bento-card__content">
                  <h3 className="magic-bento-card__title">{project.title}</h3>
                  <p className="magic-bento-card__description">{project.description}</p>

                  {/* Tags */}
                  <div className="magic-bento-card__tags">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="magic-bento-card__tag">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="magic-bento-card__tag">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="magic-bento-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="magic-bento-card__link github"
                      >
                        <Code size={14} /> Code
                      </a>
                    )}
                    <a href="#contact" className="magic-bento-card__link">
                      <ExternalLink size={14} /> Discuss
                    </a>
                  </div>
                </div>
              </ParticleCard>
            );
          })}
        </MagicBento>
      </div>
    </section>
  );
}
