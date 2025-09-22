import React from 'react';
import './SearchResults.css';

const SearchResults = ({ artworks, searchTerm, onArtworkClick }) => {
  if (!searchTerm) return null;

  const filteredArtworks = artworks.filter(artwork =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (artwork.description && artwork.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="search-results">
      <div className="search-results-header">
        <h3>Search Results</h3>
        <span className="results-count">
          {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''} found
        </span>
      </div>

      {filteredArtworks.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🎨</div>
          <h4>No artwork found</h4>
          <p>Try searching for character names like "Naruto", "Sakura", or categories like "colored" or "inked"</p>
        </div>
      ) : (
        <div className="search-results-grid">
          {filteredArtworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="search-result-card"
              onClick={() => onArtworkClick && onArtworkClick(artwork)}
            >
              <div className="result-image-container">
                <img 
                  src={artwork.image || artwork.imageUrl} 
                  alt={artwork.title}
                  className="result-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="result-image-placeholder" style={{display: 'none'}}>
                  <span>🎨</span>
                </div>
              </div>
              
              <div className="result-info">
                <h4 className="result-title">{artwork.title}</h4>
                <span className={`result-category ${artwork.category}`}>
                  {artwork.category}
                </span>
                {artwork.price && (
                  <span className="result-price">${artwork.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;