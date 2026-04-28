import { useRef, useState, useEffect, useCallback } from 'react';
import { ExternalLink, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projectsData';

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const hasScrollableContent = scrollWidth > clientWidth;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(hasScrollableContent && scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    // Check scroll after component mounts and CSS is rendered
    requestAnimationFrame(() => {
      checkScroll();
    });
    
    // Also set up a listener for window resize
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      // Check scroll status after animation
      setTimeout(checkScroll, 400);
    }
  };

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

        <div className="projects-carousel-wrapper">
          <div className="projects-scroll-container" ref={scrollContainerRef} onScroll={checkScroll}>
            <div className="projects-horizontal-scroll">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                const isLastCard = index === projects.length - 1;
                const cardClass = isLastCard ? 'projects-card-large' : `projects-card-${index % 3 === 0 ? 'medium' : 'small'}`;

                return (
                  <div key={project.id} className={`projects-card ${cardClass}`}>
                    <div className="projects-card-header">
                      <span className="projects-card-label">{project.status}</span>
                      <IconComponent size={24} className="projects-card-icon" />
                    </div>
                    <div className="projects-card-content">
                      <h3 className="projects-card-title">{project.title}</h3>
                      <p className="projects-card-description">{project.description}</p>

                      {/* Tags */}
                      <div className="projects-card-tags">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="projects-card-tag">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="projects-card-tag">+{project.tags.length - 3}</span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="projects-card-links">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="projects-card-link github"
                          >
                            <Code size={14} /> Code
                          </a>
                        )}
                        <a href="#contact" className="projects-card-link">
                          <ExternalLink size={14} /> Discuss
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="carousel-nav-btn carousel-nav-prev"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="carousel-nav-btn carousel-nav-next"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next projects"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
