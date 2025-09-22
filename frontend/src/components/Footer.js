import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon. 🎨');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Artist Info Section */}
        <div className="footer-section artist-info">
          <div className="artist-avatar">
            <div className="avatar-placeholder">🎨</div>
          </div>
          <h3>Nikita's Anime Art Gallery</h3>
          <p className="artist-description">
            Passionate anime artist creating beautiful colored and inked artwork. 
            Specializing in character portraits and dynamic scenes from your favorite anime series.
          </p>
          
          <div className="social-links">
            <a href="#" className="social-link" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="social-link" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="social-link" title="DeviantArt">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.207 4.794l.23-.43V0H15.92l-.43.43-2.05 3.95-.32.43H9.83v4.31h1.91l-.43.43-3.95 7.48-.23.43v3.95h3.517l.43-.43 2.05-3.95.32-.43h3.29v-4.31h-1.91l.43-.43 3.95-7.48z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="footer-section contact-form">
          <h3>Send Me a Message</h3>
          <p>Have a commission request or just want to say hello? I'd love to hear from you!</p>
          
          <form onSubmit={handleSubmit} className="query-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message or commission request..."
                required
                rows="4"
                className="form-textarea"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
            
            {submitMessage && (
              <div className="submit-message">
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Gallery</h3>
          <ul>
            <li><a href="#colored">Colored Artwork</a></li>
            <li><a href="#inked">Inked Artwork</a></li>
            <li><a href="#commissions">Commissions</a></li>
            <li><a href="#about">About Me</a></li>
          </ul>
          
          <h3>Services</h3>
          <ul>
            <li><a href="#custom">Custom Portraits</a></li>
            <li><a href="#digital">Digital Art</a></li>
            <li><a href="#traditional">Traditional Art</a></li>
            <li><a href="#prints">Art Prints</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2024 Nikita's Anime Art Gallery. All rights reserved.</p>
          <p>Made with ❤️ for anime art lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;