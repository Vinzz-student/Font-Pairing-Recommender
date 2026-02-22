import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.57)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
    boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
  };

  const containerStyle = {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  };

  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 1 0%',
    minWidth: 0,
    paddingLeft: '1rem',
    paddingRight: '1rem'
  };

  const menuItemsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #4f46e5, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              whiteSpace: 'nowrap'
            }}>
              FontPairRecommend
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;