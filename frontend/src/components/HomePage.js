import React, { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';
import ArtworkSlider from './ArtworkSlider';
import CategoryOptions from './CategoryOptions';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Footer from './Footer';
import GalleryPage from './GalleryPage';
import CartPage from './CartPage';
import './HomePage.css';

const HomePage = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    // Fetch artwork from backend API
    const fetchArtworks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/artworks');
        if (response.ok) {
          const data = await response.json();
          setArtworks(data);
        } else {
          // Fallback to sample data if backend is not available
          const sampleArtworks = [
            { id: 1, title: 'Kanao Tsuyuri', image: '/images/colored/kanao-tsuyuri.jpeg', category: 'colored' },
            { id: 2, title: 'Sasuke Uchiha', image: '/images/colored/sasuke-uchiha.jpeg', category: 'colored' },
            { id: 3, title: 'Shouko Komi', image: '/images/colored/shouko-komi.png', category: 'colored' },
            { id: 4, title: 'Tanjiro Kamado', image: '/images/colored/tanjiro-kamado.jpeg', category: 'colored' },
            { id: 5, title: 'Hinata Hyuga', image: '/images/inked/hinata-hyuga.jpeg', category: 'inked' },
            { id: 6, title: 'Koucho Shinobu', image: '/images/inked/koucho-shinobu.jpeg', category: 'inked' },
            { id: 7, title: 'Naruto Uzumaki', image: '/images/inked/naruto-uzumaki.jpeg', category: 'inked' },
            { id: 8, title: 'Sakura Haruno', image: '/images/inked/sakura-haruno.jpeg', category: 'inked' },
          ];
          setArtworks(sampleArtworks);
        }
      } catch (error) {
        console.error('Error fetching artworks:', error);
        // Fallback to sample data
        const sampleArtworks = [
          { id: 1, title: 'Kanao Tsuyuri', image: '/images/colored/kanao-tsuyuri.jpeg', category: 'colored' },
          { id: 2, title: 'Sasuke Uchiha', image: '/images/colored/sasuke-uchiha.jpeg', category: 'colored' },
          { id: 3, title: 'Shouko Komi', image: '/images/colored/shouko-komi.png', category: 'colored' },
          { id: 4, title: 'Tanjiro Kamado', image: '/images/colored/tanjiro-kamado.jpeg', category: 'colored' },
          { id: 5, title: 'Hinata Hyuga', image: '/images/inked/hinata-hyuga.jpeg', category: 'inked' },
          { id: 6, title: 'Koucho Shinobu', image: '/images/inked/koucho-shinobu.jpeg', category: 'inked' },
          { id: 7, title: 'Naruto Uzumaki', image: '/images/inked/naruto-uzumaki.jpeg', category: 'inked' },
          { id: 8, title: 'Sakura Haruno', image: '/images/inked/sakura-haruno.jpeg', category: 'inked' },
        ];
        setArtworks(sampleArtworks);
      }
    };

    fetchArtworks();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleArtworkClick = (artwork) => {
    // You can add functionality here to show artwork details
    console.log('Clicked artwork:', artwork);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Clear search when selecting category
    setShowGallery(true); // Navigate to gallery page
  };

  const handleBackToHome = () => {
    setShowGallery(false);
    setShowCart(false);
    setSelectedCategory(null);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowGallery(false);
  };

  const handleHomeClick = () => {
    setShowGallery(false);
    setShowCart(false);
    setSelectedCategory(null);
  };

  const handleAddToCart = (artwork, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === artwork.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= 0) {
          return prevItems.filter(item => item.id !== artwork.id);
        }
        return prevItems.map(item =>
          item.id === artwork.id 
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else if (quantity > 0) {
        return [...prevItems, { ...artwork, quantity }];
      }
      
      return prevItems;
    });
  };

  const handleUpdateCart = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = (orderData) => {
    console.log('Order placed:', orderData);
    // Here you would typically send the order to your backend
    
    // Clear cart and show success
    setCartItems([]);
    setOrderComplete(true);
    setShowCart(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setOrderComplete(false);
    }, 3000);
  };

  // Filter artworks based on selected category
  const getFilteredArtworks = () => {
    if (selectedCategory) {
      return artworks.filter(artwork => artwork.category === selectedCategory);
    }
    return artworks;
  };

  // Show cart page
  if (showCart) {
    return (
      <CartPage
        cartItems={cartItems}
        onUpdateCart={handleUpdateCart}
        onRemoveFromCart={handleRemoveFromCart}
        onBack={handleBackToHome}
        onCheckout={handleCheckout}
      />
    );
  }

  // Show gallery page when category is selected
  if (showGallery) {
    return (
      <GalleryPage
        artworks={artworks}
        category={selectedCategory}
        onBack={handleBackToHome}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />
    );
  }

  return (
    <div className="home-page">
      {/* Unified Header */}
      <div className="page-header">
        <div className="header-container">
          <div className="header-logo">
            <h2 onClick={handleHomeClick}>Anime Art Gallery</h2>
          </div>
          
          <div className="header-nav">
            <button className="nav-link" onClick={handleHomeClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Home
            </button>
            
            <button className="nav-link cart-link" onClick={handleCartClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
        </div>
      </div>

      {orderComplete && (
        <div className="order-success-banner">
          <div className="success-content">
            <span className="success-icon">🎉</span>
            <span>Order placed successfully! Thank you for your purchase!</span>
          </div>
        </div>
      )}

      <div className="welcome-section">
        <div className="anime-character-decoration gojo">
          <img src="/images/decorations/gojo.png" alt="Gojo" />
        </div>
        <div className="anime-character-decoration zenitsu">
          <img src="/images/decorations/zenitsu.png" alt="Zenitsu" />
        </div>
        <div className="anime-character-decoration kakashi">
          <img src="/images/decorations/kakashi.png" alt="Kakashi" />
        </div>
        <h1 className="welcome-title">Welcome to Anime Art Gallery</h1>
        <p className="welcome-subtitle">Discover Amazing Anime Artwork</p>
      </div>

      <SearchBar
        onSearch={handleSearch}
        placeholder="Search for characters, artwork, or categories..."
      />

      {searchTerm ? (
        <SearchResults
          artworks={artworks}
          searchTerm={searchTerm}
          onArtworkClick={handleArtworkClick}
        />
      ) : selectedCategory ? (
        <SearchResults
          artworks={getFilteredArtworks()}
          searchTerm={`${selectedCategory} artwork`}
          onArtworkClick={handleArtworkClick}
        />
      ) : (
        <>
          <ArtworkSlider artworks={artworks} autoSlideInterval={4000} />
        </>
      )}
      
      {!searchTerm && (
        <CategoryOptions
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
          artworks={artworks}
        />
      )}

      <Footer />
    </div>
  );
};

export default HomePage;