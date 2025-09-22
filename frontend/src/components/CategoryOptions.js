import React from 'react';
import './CategoryOptions.css';

const CategoryOptions = ({ onCategorySelect, selectedCategory, artworks }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  // Count artworks by category
  const coloredCount = artworks.filter(art => art.category === 'colored').length;
  const inkedCount = artworks.filter(art => art.category === 'inked').length;

  return (
    <div className="category-options">
      <h2 className="category-title">Browse by Style</h2>

      <div className="category-cards">
        <div
          className={`category-card colored-card ${selectedCategory === 'colored' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('colored')}
        >
          <div className="category-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h3>Colored Artwork</h3>
          <p>Vibrant and colorful anime illustrations</p>
          <div className="artwork-count">{coloredCount} artworks</div>
        </div>

        <div
          className={`category-card inked-card ${selectedCategory === 'inked' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('inked')}
        >
          <div className="category-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor" />
            </svg>
          </div>
          <h3>Inked Artwork</h3>
          <p>Classic black and white line art</p>
          <div className="artwork-count">{inkedCount} artworks</div>
        </div>
      </div>

      {selectedCategory && (
        <div className="category-actions">
          <button
            className="clear-filter-btn"
            onClick={() => handleCategoryClick(null)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryOptions;