import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  title,
  subtitle,
  subtitleHref,
  category = "Full-Stack Web App",
  dateRange,
  description,
  features = [],
  technologies = [],
  image,          // legacy single image
  images = [],    // NEW: multiple images
  github,
  live,
  flip = false,
  index = 0,
}) => {
  // Normalize to an array
  const gallery = useMemo(() => {
    const arr = Array.isArray(images) && images.length ? images : (image ? [image] : []);
    // de-dup & remove falsy
    return Array.from(new Set(arr.filter(Boolean)));
  }, [images, image]);

  const [active, setActive] = useState(0);
  const hasMany = gallery.length > 1;

  const onPrev = () => setActive((p) => (p - 1 + gallery.length) % gallery.length);
  const onNext = () => setActive((p) => (p + 1) % gallery.length);

  return (
    <article className={["featured-row", flip ? "flip" : "", "fade-in"].join(" ")}>

      {/* Media / Gallery */}
      <div className="featured-mediaCard">
        {gallery.length > 0 ? (
          <div className="gallery">
            <img
              className="featured-mediaImg"
              src={gallery[active]}
              alt={`${title} screenshot ${active + 1} of ${gallery.length}`}
            />

            {/* nav arrows (only if multiple) */}
            {hasMany && (
              <>
                <button className="gallery-nav gallery-nav--left" aria-label="Previous screenshot" onClick={onPrev}>
                  <i className="fas fa-chevron-left" />
                </button>
                <button className="gallery-nav gallery-nav--right" aria-label="Next screenshot" onClick={onNext}>
                  <i className="fas fa-chevron-right" />
                </button>
              </>
            )}

            {/* thumbnails */}
            {hasMany && (
              <div className="gallery-thumbs" role="tablist" aria-label={`${title} screenshots`}>
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    className={["thumb", i === active ? "thumb--active" : ""].join(" ")}
                    onClick={() => setActive(i)}
                    title={`Screenshot ${i + 1}`}
                  >
                    <img src={src} alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="featured-mediaImg" style={{ display: "grid", placeItems: "center" }}>
            No image
          </div>
        )}
        <div className="image-progress" style={{ width: hasMany ? `${((active + 1) / gallery.length) * 100}%` : "14%" }} />
      </div>

      {/* Content */}
      <div className="featured-content">
        <div className="featured-meta">
          <span className="pill pill--primary">{category}</span>
          {dateRange && <span className="pill pill--ghost">{dateRange}</span>}
        </div>

        <h3 className="featured-h3">{title}</h3>
        {subtitle && (
          subtitleHref ? (
            <a className="featured-subtitle" href={subtitleHref} target="_blank" rel="noreferrer">{subtitle}</a>
          ) : <div className="featured-subtitle">{subtitle}</div>
        )}

        {description && <p className="featured-desc">{description}</p>}

        {features.length > 0 && (
          <div className="feature-box">
            <div className="feature-box__title">
              <i className="fas fa-info-circle" /><span>Key Features</span>
            </div>
            <ul className="feature-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {technologies.length > 0 && (
          <>
            <div className="tech-heading">Technologies Used</div>
            <ul className="tech-chips">
              {technologies.map((t, i) => <li key={i} className="chip">{t}</li>)}
            </ul>
          </>
        )}

        <div className="featured-actions">
          {live && <a className="btn-lg btn-primary-grad" href={live} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt" /> Live Demo
          </a>}
          {github && <a className="btn-lg btn-outline" href={github} target="_blank" rel="noreferrer">
            <i className="fab fa-github" /> View Code
          </a>}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subtitleHref: PropTypes.string,
  category: PropTypes.string,
  dateRange: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  technologies: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string), // NEW
  github: PropTypes.string,
  live: PropTypes.string,
  flip: PropTypes.bool,
  index: PropTypes.number,
};

export default ProjectCard;
