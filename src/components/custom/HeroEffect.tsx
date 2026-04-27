export const HeroPhoto = () => {
  return (
    <div className="hero-photo-wrapper">
      {/* Purple radial glow behind photo */}
      <div className="photo-glow"></div>

      {/* Orbiting rings */}
      <div className="photo-orbit">
        <div className="orbit-dot"></div>
      </div>
      <div className="photo-orbit">
        <div className="orbit-dot cyan"></div>
      </div>

      {/* Photo circle */}
      <div className="photo-container">
        <img
          src="/photo.jpeg"
          alt="Danish Prabhu K V"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback: render initial
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.fallback-initials')) {
              const fallback = document.createElement('div');
              fallback.className = 'fallback-initials';
              fallback.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #141420 0%, #1b1b30 100%);
                font-family: 'Space Grotesk', sans-serif;
                font-size: 5rem;
                font-weight: 700;
                color: #00FF41;
                text-shadow: 0 0 30px rgba(0,255,65,0.3);
                letter-spacing: -0.03em;
              `;
              fallback.textContent = 'DP';
              parent.appendChild(fallback);
            }
          }}
        />
      </div>
    </div>
  );
};
