import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = ({ artworks, category, onBack, onAddToCart, cartItems }) => {
    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const filteredArtworks = category
        ? artworks.filter(art => art.category === category)
        : artworks;

    const getCategoryTitle = () => {
        if (category === 'colored') return 'Colored Artwork Collection';
        if (category === 'inked') return 'Inked Artwork Collection';
        return 'All Artwork';
    };

    const getCategoryDescription = () => {
        if (category === 'colored') return 'Vibrant and colorful anime illustrations with stunning detail';
        if (category === 'inked') return 'Classic black and white line art showcasing pure artistic skill';
        return 'Complete collection of anime artwork';
    };

    const isInCart = (artworkId) => {
        return cartItems.some(item => item.id === artworkId);
    };

    const getCartQuantity = (artworkId) => {
        const item = cartItems.find(item => item.id === artworkId);
        return item ? item.quantity : 0;
    };

    const handleArtworkClick = (artwork) => {
        setSelectedArtwork(artwork);
    };

    const closeModal = () => {
        setSelectedArtwork(null);
    };



    return (
        <div className="gallery-page">
            {/* Unified Header */}
            <div className="page-header">
                <div className="header-container">
                    <div className="header-logo">
                        <h2 onClick={onBack}>Anime Art Gallery</h2>
                    </div>

                    <div className="header-nav">
                        <button className="nav-link" onClick={onBack}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Home
                        </button>

                        <div className="current-page-indicator">
                            <span>{getCategoryTitle()}</span>
                        </div>

                        <div className="cart-indicator">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Beautiful Gallery Header */}
            <div className="gallery-hero">
                <div className="hero-content">
                    <div className="category-badge-large">
                        {category === 'colored' ? '🎨' : '✏️'} {category || 'All'}
                    </div>
                    <h1 className="hero-title">{getCategoryTitle()}</h1>
                    <p className="hero-description">{getCategoryDescription()}</p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{filteredArtworks.length}</span>
                            <span className="stat-label">Artworks</span>
                        </div>
                        <div className="stat-divider">•</div>
                        <div className="stat-item">
                            <span className="stat-number">$22.99+</span>
                            <span className="stat-label">Starting Price</span>
                        </div>
                        <div className="stat-divider">•</div>
                        <div className="stat-item">
                            <span className="stat-number">HD</span>
                            <span className="stat-label">Quality</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Artwork Grid */}
            <div className="artwork-grid">
                {filteredArtworks.map((artwork) => (
                    <div key={artwork.id} className="artwork-item">
                        <div className="artwork-image-container" onClick={() => handleArtworkClick(artwork)}>
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
                                <span>🎨</span>
                                <p>{artwork.title}</p>
                            </div>

                            <div className="artwork-overlay">
                                <div className="overlay-content">
                                    <h3>{artwork.title}</h3>
                                    <p className="artwork-category">{artwork.category}</p>
                                </div>
                            </div>
                        </div>

                        <div className="artwork-info">
                            <h3 className="artwork-title">{artwork.title}</h3>
                            <p className="artwork-description">
                                {artwork.description || `Beautiful ${artwork.category} artwork featuring ${artwork.title}`}
                            </p>

                            <div className="artwork-details">
                                <div className="price-section">
                                    <span className="price">${artwork.price || '25.99'}</span>
                                    <span className="category-tag">{artwork.category}</span>
                                </div>

                                <div className="cart-section">
                                    {isInCart(artwork.id) ? (
                                        <div className="quantity-controls">
                                            <button
                                                className="quantity-btn decrease"
                                                onClick={() => onAddToCart(artwork, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{getCartQuantity(artwork.id)}</span>
                                            <button
                                                className="quantity-btn increase"
                                                onClick={() => onAddToCart(artwork, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() => onAddToCart(artwork, 1)}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Artwork Detail Modal */}
            {selectedArtwork && (
                <div className="artwork-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="modal-image">
                            <img
                                src={selectedArtwork.image || selectedArtwork.imageUrl}
                                alt={selectedArtwork.title}
                            />
                        </div>

                        <div className="modal-info">
                            <h2>{selectedArtwork.title}</h2>
                            <p className="modal-description">
                                {selectedArtwork.description || `Beautiful ${selectedArtwork.category} artwork featuring ${selectedArtwork.title}`}
                            </p>
                            <div className="modal-price">${selectedArtwork.price || '25.99'}</div>

                            <button
                                className="modal-add-to-cart"
                                onClick={() => {
                                    onAddToCart(selectedArtwork, 1);
                                    closeModal();
                                }}
                            >
                                Add to Cart - ${selectedArtwork.price || '25.99'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;