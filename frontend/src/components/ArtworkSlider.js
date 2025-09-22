import React, { useState, useEffect } from 'react';
import './ArtworkSlider.css';

const ArtworkSlider = ({ artworks, autoSlideInterval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artworks.length);
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [artworks.length, autoSlideInterval, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  if (!artworks.length) return null;

  return (
    <div
      className="artwork-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-container">
        <button className="slider-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {artworks.map((artwork, index) => (
              <div key={artwork.id} className="slide">
                <div className="artwork-card">
                  <div className="artwork-image-container">
                    <img
                      src={artwork.image || artwork.imageUrl}
                      alt={artwork.title}
                      className="artwork-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="artwork-image-placeholder" style={{ display: 'none' }}>
                      <span>Artwork {index + 1}</span>
                      <p>{artwork.title}</p>
                    </div>
                    <div className="artwork-overlay">
                      <h3>{artwork.title}</h3>
                      <p className="artwork-category">{artwork.category}</p>
                      {artwork.price && <p className="artwork-price">${artwork.price}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="slider-dots">
        {artworks.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtworkSlider;