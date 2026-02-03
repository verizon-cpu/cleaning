'use client';

import { useState, useEffect, useRef } from 'react';

// Header Component (Fixed Version)
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileService, setActiveMobileService] = useState<number | null>(null);

  const services = [
    { name: "Airbnb Cleaning", url: "/airbnb-cleaning" },
    { name: "Housekeeping", url: "/housekeeping" },
    { name: "Move In/Move Out Cleaning", url: "/move-in-move-out-cleaning" },
    { name: "Apartment Cleaning", url: "/apartment-cleaning" },
    { name: "Commercial Cleaning", url: "/commercial-cleaning" },
    { name: "Deep Cleaning", url: "/deep-cleaning" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  const baseStyles: any = {
    headerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isScrolled 
        ? 'rgba(0, 30, 80, 0.95)' 
        : 'rgba(0, 30, 80, 0.9)',
      boxShadow: isScrolled 
        ? '0 8px 32px rgba(0, 0, 0, 0.2)' 
        : 'none',
      backdropFilter: 'blur(20px)',
      borderBottom: '2px solid rgba(255, 215, 0, 0.3)',
    },
    
    innerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
    },
    
    brandSection: {
      display: 'flex',
      alignItems: 'center',
    },
    
    logoMark: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '12px' : '16px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    
    logoCircle: {
      width: isMobile ? '40px' : '50px',
      height: isMobile ? '40px' : '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
    },
    
    logoLetter: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: 900,
      color: '#001E50',
      fontFamily: "'Playfair Display', serif",
    },
    
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    
    logoName: {
      fontSize: isMobile ? '22px' : '28px',
      fontWeight: 900,
      color: '#FFFFFF',
      letterSpacing: '1px',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    
    logoTagline: {
      fontSize: isMobile ? '9px' : '11px',
      fontWeight: 900,
      color: '#FFD700',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
    },
    
    navigation: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '40px',
      flex: 1,
      justifyContent: 'center',
    },
    
    navItem: (active: boolean) => ({
      fontSize: '15px',
      fontWeight: 900,
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '8px 0',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    servicesDropdownContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    
    servicesButton: (active: boolean, open: boolean) => ({
      background: open ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
      border: 'none',
      color: active || open ? '#FFD700' : '#FFFFFF',
      fontSize: '15px',
      fontWeight: 900,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontFamily: "'Playfair Display', serif",
    }),
    
    servicesDropdown: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(0, 30, 80, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '12px',
      padding: '12px',
      minWidth: '280px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 215, 0, 0.3)',
      zIndex: 1000,
      marginTop: '8px',
    },
    
    serviceItem: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      color: active ? '#FFD700' : '#FFFFFF',
      backgroundColor: active ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    serviceItemText: {
      fontSize: '14px',
      fontWeight: 900,
      fontFamily: "'Playfair Display', serif",
    },
    
    ctaSection: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '30px',
    },
    
    phoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    
    phoneIcon: (active: boolean) => ({
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: active ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    }),
    
    phoneLabel: {
      fontSize: '11px',
      fontWeight: 900,
      color: '#FFD700',
      letterSpacing: '1px',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
    },
    
    phoneNumber: (active: boolean) => ({
      fontSize: '16px',
      fontWeight: 900,
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    headerButton: (active: boolean) => ({
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      color: '#001E50',
      border: 'none',
      padding: '14px 32px',
      fontSize: '15px',
      fontWeight: 900,
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      letterSpacing: '0.5px',
      boxShadow: active ? '0 12px 30px rgba(255, 215, 0, 0.4)' : '0 8px 25px rgba(255, 215, 0, 0.3)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileMenuButton: {
      display: isMobile ? 'flex' : 'none',
      background: 'transparent',
      border: 'none',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
      padding: '8px',
    },
    
    menuLine: {
      width: '24px',
      height: '3px',
      backgroundColor: '#FFFFFF',
      borderRadius: '1px',
      transition: 'all 0.3s ease',
    },

    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 30, 80, 0.98)',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease',
    },
    
    mobileMenuHeader: {
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    
    mobileMenuContent: {
      padding: '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      flex: 1,
      overflowY: 'auto',
    },
    
    mobileNavItem: (active: boolean) => ({
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      fontWeight: 900,
      fontSize: '1.25rem',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileServicesButton: (active: boolean, open: boolean) => ({
      background: 'transparent',
      border: 'none',
      color: active || open ? '#FFD700' : '#FFFFFF',
      fontWeight: 900,
      fontSize: '1.25rem',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileServicesDropdown: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      padding: '1rem 0 1rem 1rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    
    mobileServiceItem: (active: boolean) => ({
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      fontWeight: 900,
      fontSize: '1rem',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      backgroundColor: active ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileCTASection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      padding: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    
    mobilePhoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    
    mobilePhoneIcon: (active: boolean) => ({
      width: '44px',
      height: '44px',
      backgroundColor: active ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255, 215, 0, 0.2)',
      transition: 'all 0.3s ease',
    }),
    
    mobilePhoneLabel: {
      fontSize: '0.875rem',
      color: '#FFD700',
      fontWeight: 900,
      lineHeight: '1.2',
      fontFamily: "'Playfair Display', serif",
    },
    
    mobilePhoneNumber: (active: boolean) => ({
      fontSize: '1rem',
      fontWeight: 900,
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileHeaderButton: (active: boolean) => ({
      padding: '1rem 1.5rem',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      color: '#001E50',
      border: 'none',
      borderRadius: '30px',
      fontWeight: 900,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Playfair Display', serif",
    }),
    
    closeMenuButton: (active: boolean) => ({
      background: 'none',
      border: 'none',
      color: active ? '#FFD700' : '#FFFFFF',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      fontWeight: 900,
      transition: 'color 0.3s ease',
      fontFamily: "'Playfair Display', serif",
    }),
  };

  return (
    <>
      <header style={baseStyles.headerContainer}>
        <div style={baseStyles.innerContainer}>
          <div style={baseStyles.brandSection}>
            <div 
              style={baseStyles.logoMark}
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => setActiveItem('logo')}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={() => handleTouchStart(setActiveItem, 'logo')}
              onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
            >
              <div style={baseStyles.logoCircle}>
                <span style={baseStyles.logoLetter}>O</span>
              </div>
              <div style={baseStyles.logoTextContainer}>
                <span style={baseStyles.logoName}>OTON</span>
                <span style={baseStyles.logoTagline}>PREMIUM CLEANING SERVICES</span>
              </div>
            </div>
          </div>
          
          {!isMobile && (
            <nav style={baseStyles.navigation}>
              <div 
                style={baseStyles.navItem(activeItem === 'home')}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveItem('home')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'home')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Home
              </div>
              
              <div style={baseStyles.servicesDropdownContainer}>
                <button 
                  style={baseStyles.servicesButton(activeItem === 'services', servicesDropdownOpen)}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => {
                    setActiveItem('services');
                    setServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    setActiveItem(null);
                    setTimeout(() => {
                      if (servicesDropdownOpen) {
                        const dropdown = document.querySelector('.services-dropdown');
                        if (!dropdown?.matches(':hover')) {
                          setServicesDropdownOpen(false);
                        }
                      }
                    }, 100);
                  }}
                  onTouchStart={() => handleTouchStart(setActiveItem, 'services')}
                  onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
                >
                  <span>Services</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{
                      transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    className="services-dropdown"
                    style={baseStyles.servicesDropdown}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        style={baseStyles.serviceItem(activeService === index)}
                        onClick={() => handleNavigation(service.url)}
                        onMouseEnter={() => setActiveService(index)}
                        onMouseLeave={() => setActiveService(null)}
                        onTouchStart={() => handleTouchStart(setActiveService, index)}
                        onTouchEnd={() => handleTouchEnd(setActiveService, null)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={baseStyles.serviceItemText}>{service.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div 
                style={baseStyles.navItem(activeItem === 'about')}
                onClick={() => handleNavigation('/about')}
                onMouseEnter={() => setActiveItem('about')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'about')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                About
              </div>
              
              <div 
                style={baseStyles.navItem(activeItem === 'Before/After Gallery')}
                onClick={() => handleNavigation('/before-after')}
                onMouseEnter={() => setActiveItem('Before/After Gallery')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'Before/After Gallery')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Before/After Gallery
              </div>
            </nav>
          )}
          
          {!isMobile && (
            <div style={baseStyles.ctaSection}>
              <div style={baseStyles.phoneWrapper}>
                <div style={baseStyles.phoneIcon(activeItem === 'phoneIcon')}
                     onMouseEnter={() => setActiveItem('phoneIcon')}
                     onMouseLeave={() => setActiveItem(null)}
                     onTouchStart={() => handleTouchStart(setActiveItem, 'phoneIcon')}
                     onTouchEnd={() => handleTouchEnd(setActiveItem, null)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFFFFF"/>
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.phoneLabel}>Premium Concierge</div>
                  <div 
                    style={baseStyles.phoneNumber(activeItem === 'phoneNumber')}
                    onClick={() => window.location.href = 'tel:+12815551234'}
                    onMouseEnter={() => setActiveItem('phoneNumber')}
                    onMouseLeave={() => setActiveItem(null)}
                    onTouchStart={() => handleTouchStart(setActiveItem, 'phoneNumber')}
                    onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
                  >
                    (281) 555-1234
                  </div>
                </div>
              </div>
              <button 
                style={baseStyles.headerButton(activeItem === 'bookNow')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('bookNow')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'bookNow')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Book Now
              </button>
            </div>
          )}
          
          {isMobile && (
            <button 
              style={baseStyles.mobileMenuButton} 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              onMouseEnter={() => setActiveItem('mobileMenuButton')}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={() => handleTouchStart(setActiveItem, 'mobileMenuButton')}
              onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
            >
              <span style={{
                ...baseStyles.menuLine,
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }}></span>
              <span style={{
                ...baseStyles.menuLine,
                opacity: isMobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                ...baseStyles.menuLine,
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }}></span>
            </button>
          )}
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && isMobile && (
        <div style={baseStyles.mobileMenuOverlay}>
          <div style={baseStyles.mobileMenuHeader}>
            <div style={baseStyles.brandSection}>
              <div 
                style={baseStyles.logoMark}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveMobileItem('logo')}
                onMouseLeave={() => setActiveMobileItem(null)}
                onTouchStart={() => handleTouchStart(setActiveMobileItem, 'logo')}
                onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
              >
                <div style={baseStyles.logoCircle}>
                  <span style={baseStyles.logoLetter}>O</span>
                </div>
                <div style={baseStyles.logoTextContainer}>
                  <span style={baseStyles.logoName}>OTON</span>
                  <span style={baseStyles.logoTagline}>PREMIUM CLEANING SERVICES</span>
                </div>
              </div>
            </div>
            <button 
              style={baseStyles.closeMenuButton(activeMobileItem === 'close')} 
              onClick={toggleMobileMenu}
              onMouseEnter={() => setActiveMobileItem('close')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'close')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              ✕
            </button>
          </div>
          
          <div style={baseStyles.mobileMenuContent}>
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'home')}
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => setActiveMobileItem('home')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'home')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Home
            </div>
            
            <button 
              style={baseStyles.mobileServicesButton(activeMobileItem === 'services', mobileServicesOpen)}
              onClick={toggleMobileServices}
              onMouseEnter={() => setActiveMobileItem('services')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'services')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              <span>Services</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                style={{
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {mobileServicesOpen && (
              <div style={baseStyles.mobileServicesDropdown}>
                {services.map((service, index) => (
                  <div
                    key={index}
                    style={baseStyles.mobileServiceItem(activeMobileService === index)}
                    onClick={() => handleNavigation(service.url)}
                    onMouseEnter={() => setActiveMobileService(index)}
                    onMouseLeave={() => setActiveMobileService(null)}
                    onTouchStart={() => handleTouchStart(setActiveMobileService, index)}
                    onTouchEnd={() => handleTouchEnd(setActiveMobileService, null)}
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            )}
            
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'about')}
              onClick={() => handleNavigation('/about')}
              onMouseEnter={() => setActiveMobileItem('about')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'about')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              About
            </div>
            
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'contact')}
              onClick={() => handleNavigation('/contact')}
              onMouseEnter={() => setActiveMobileItem('contact')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'contact')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Contact
            </div>
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'Before/After Gallery')}
              onClick={() => handleNavigation('/before-after')}
              onMouseEnter={() => setActiveMobileItem('Before/After Gallery')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'Before/After Gallery')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Before/After Gallery
            </div>
          </div>
          
          <div style={baseStyles.mobileCTASection}>
            <div style={baseStyles.mobilePhoneWrapper}>
              <div style={baseStyles.mobilePhoneIcon(activeMobileItem === 'phoneIcon')}
                   onMouseEnter={() => setActiveMobileItem('phoneIcon')}
                   onMouseLeave={() => setActiveMobileItem(null)}
                   onTouchStart={() => handleTouchStart(setActiveMobileItem, 'phoneIcon')}
                   onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFFFFF"/>
                  <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <div>
                <div style={baseStyles.mobilePhoneLabel}>Premium Concierge</div>
                <div 
                  style={baseStyles.mobilePhoneNumber(activeMobileItem === 'phoneNumber')}
                  onClick={() => window.location.href = 'tel:+12815551234'}
                  onMouseEnter={() => setActiveMobileItem('phoneNumber')}
                  onMouseLeave={() => setActiveMobileItem(null)}
                  onTouchStart={() => handleTouchStart(setActiveMobileItem, 'phoneNumber')}
                  onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
                >
                  (281) 555-1234
                </div>
              </div>
            </div>
            <button 
              style={baseStyles.mobileHeaderButton(activeMobileItem === 'mobileBookNow')}
              onClick={() => handleNavigation('/contact')}
              onMouseEnter={() => setActiveMobileItem('mobileBookNow')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'mobileBookNow')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Before & After Section Component
function BeforeAfterSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const kitchenTransformation = {
    before: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    after: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Kitchen Transformation",
    description: "From cluttered and stained to sparkling and organized in just 3 hours"
  };

  const handleImageError = (url: string) => {
    console.warn(`Image failed to load: ${url}`);
    setImageErrors(prev => ({ ...prev, [url]: true }));
  };

  const fallbackBefore = "https://placehold.co/600x400/001E50/FFFFFF?text=Before+Cleaning";
  const fallbackAfter = "https://placehold.co/600x400/FFD700/001E50?text=After+Cleaning";

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
      position: 'relative' as const,
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative' as const,
        zIndex: 2,
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center' as const,
          marginBottom: '60px',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#001E50',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            position: 'relative' as const,
            display: 'inline-block',
          }}>
            <span style={{
              color: '#FFD700',
              position: 'relative' as const,
            }}>
              #Before & After
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #FFD700, #FFC107, #FFD700)',
                borderRadius: '2px',
              }} />
            </span>
          </h2>
          
          {/* Motto */}
          <div style={{
            maxWidth: '800px',
            margin: '30px auto',
            padding: '30px 20px',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 30, 80, 0.1) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            position: 'relative' as const,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 30, 80, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#001E50',
              lineHeight: 1.4,
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              marginBottom: '20px',
              textAlign: 'center' as const,
              position: 'relative' as const,
              zIndex: 2,
            }}>
              "Transforming Boston's Finest Properties from Ordinary to Extraordinary"
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '20px',
            }}>
              <div style={{
                width: '40px',
                height: '1px',
                background: '#FFD700',
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#666666',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
              }}>
                Our Work Speaks for Itself
              </span>
              <div style={{
                width: '40px',
                height: '1px',
                background: '#FFD700',
                transition: 'all 0.3s ease',
              }} />
            </div>
          </div>
        </div>

        {/* Kitchen Transformation Example */}
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto 40px',
        }}>
          {/* Title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#001E50',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '12px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFD700';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#001E50';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              {kitchenTransformation.title}
            </h3>
            <p style={{
              fontSize: '1.125rem',
              fontWeight: 500,
              color: '#666666',
              fontFamily: "'Playfair Display', serif",
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#001E50';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              {kitchenTransformation.description}
            </p>
          </div>

          {/* Before & After Images Side by Side */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '40px',
          }}>
            {/* Before Image */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 30, 80, 0.15)',
              height: '400px',
              backgroundColor: '#f0f0f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 30, 80, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.15)';
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(0, 30, 80, 0.9)',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                zIndex: 2,
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
              }}>
                BEFORE
              </div>
              {!imageErrors[kitchenTransformation.before] ? (
                <img 
                  src={kitchenTransformation.before}
                  alt="Kitchen before cleaning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                  onError={() => handleImageError(kitchenTransformation.before)}
                  loading="lazy"
                />
              ) : (
                <img 
                  src={fallbackBefore}
                  alt="Kitchen before cleaning - placeholder"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    backgroundColor: '#001E50',
                    transition: 'transform 0.3s ease',
                  }}
                />
              )}
            </div>
            
            {/* After Image */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 30, 80, 0.15)',
              height: '400px',
              backgroundColor: '#f0f0f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.15)';
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
                color: '#001E50',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                zIndex: 2,
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
              }}>
                AFTER
              </div>
              {!imageErrors[kitchenTransformation.after] ? (
                <img 
                  src={kitchenTransformation.after}
                  alt="Kitchen after cleaning"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                  onError={() => handleImageError(kitchenTransformation.after)}
                  loading="lazy"
                />
              ) : (
                <img 
                  src={fallbackAfter}
                  alt="Kitchen after cleaning - placeholder"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    backgroundColor: '#FFD700',
                    transition: 'transform 0.3s ease',
                  }}
                />
              )}
            </div>
          </div>

          {/* View More Button */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
          }}>
            <button 
              onClick={() => window.location.href = '/before-after'}
              style={{
                background: 'linear-gradient(135deg, #001E50 0%, #003080 100%)',
                color: '#FFFFFF',
                border: 'none',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 700,
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0, 30, 80, 0.3)',
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.5px',
                width: '100%',
                maxWidth: '400px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 30, 80, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #003080 0%, #001E50 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #001E50 0%, #003080 100%)';
              }}
            >
              View More Before & After Images
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose OTON Section Component
function WhyChooseOtonSection() {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [homesCleaned, setHomesCleaned] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const incrementYears = 15 / steps;
      const incrementHomes = 5000 / steps;
      const incrementSatisfaction = 99.8 / steps;
      
      let currentYears = 0;
      let currentHomes = 0;
      let currentSatisfaction = 0;
      let step = 0;
      
      const counterInterval = setInterval(() => {
        if (step >= steps) {
          clearInterval(counterInterval);
          setYearsExperience(15);
          setHomesCleaned(5000);
          setSatisfactionRate(99.8);
          return;
        }
        
        currentYears += incrementYears;
        currentHomes += incrementHomes;
        currentSatisfaction += incrementSatisfaction;
        
        setYearsExperience(Math.floor(currentYears));
        setHomesCleaned(Math.floor(currentHomes));
        setSatisfactionRate(parseFloat(currentSatisfaction.toFixed(1)));
        
        step++;
      }, duration / steps);
    };
    
    const timer = setTimeout(animateCounters, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      position: 'relative' as const,
    }}>
      {/* Section Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        textAlign: 'center' as const,
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 215, 0, 0.1)',
          padding: '10px 20px',
          borderRadius: '50px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          marginBottom: '20px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <div style={{
            fontSize: '18px',
            transition: 'all 0.3s ease',
          }}>✨</div>
          <span style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#001E50',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }}>
            The OTON Difference
          </span>
        </div>
        
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#001E50',
          lineHeight: 1.2,
          fontFamily: "'Playfair Display', serif",
          margin: '0 0 20px 0',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          Why Choose OTON Cleaning for your{' '}
          <span style={{ color: '#FFD700', transition: 'all 0.3s ease' }}>Deep Cleaning in Boston?</span>
        </h2>
        
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 400,
          color: '#666666',
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto 30px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#001E50';
          e.currentTarget.style.transform = 'scale(1.01)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#666666';
          e.currentTarget.style.transform = 'scale(1)';
        }}>
           When it comes to deep cleaning in Boston, OTON Cleaning stands out for a multitude of reasons. Our commitment to restoring your home's freshness, intensive attention to neglected areas, and focus on creating a truly healthier environment are just a few of the factors that set us apart. Here's why homeowners seeking a comprehensive refresh choose us:
        </p>
        
        {/* Animated Stats Counter */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          marginTop: '30px',
          maxWidth: '800px',
          margin: '30px auto',
        }}>
          <div style={{
            textAlign: 'center' as const,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#001E50',
              fontFamily: "'Montserrat', sans-serif",
              marginBottom: '8px',
              transition: 'all 0.3s ease',
            }}>
              {yearsExperience}+
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#666666',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
            }}>
              Years of Excellence
            </div>
          </div>
          
          <div style={{
            textAlign: 'center' as const,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#001E50',
              fontFamily: "'Montserrat', sans-serif",
              marginBottom: '8px',
              transition: 'all 0.3s ease',
            }}>
              {homesCleaned.toLocaleString()}+
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#666666',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
            }}>
              Homes Transformed
            </div>
          </div>
          
          <div style={{
            textAlign: 'center' as const,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#001E50',
              fontFamily: "'Montserrat', sans-serif",
              marginBottom: '8px',
              transition: 'all 0.3s ease',
            }}>
              {satisfactionRate}%
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#666666',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
            }}>
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
      
      {/* Luxury Service Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        
        {/* Card 1: Experienced Team */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 30, 80, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 30, 80, 0.05)',
          paddingBottom: '30px',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 30, 80, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.05)';
        }}>
          <div style={{
            position: 'relative' as const,
            height: '250px',
            overflow: 'hidden',
            marginBottom: '25px',
          }}>
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional cleaning team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div style={{
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0, 30, 80, 0.1) 0%, transparent 50%)',
            }}></div>
          </div>
          
          <div style={{
            padding: '0 25px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}>
                01
              </span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#001E50',
                fontFamily: "'Playfair Display', serif",
                margin: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#001E50';
              }}>
                Elite Team of Cleaning Connoisseurs
              </h3>
            </div>
            
            <p style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#666666',
              lineHeight: 1.6,
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#001E50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
            }}>
              Our team isn't just trained—they're artisans of cleanliness. Each member undergoes 
              200+ hours of specialized training in luxury home protocols, eco-conscious cleaning 
              methodologies, and discretion etiquette for high-profile residences.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '12px',
              marginBottom: '25px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  200+ Hours Specialized Training
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Background Checked & Insured
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Continuous Performance Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 2: Unmatched Quality & Detail */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 30, 80, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 30, 80, 0.05)',
          paddingBottom: '30px',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 30, 80, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.05)';
        }}>
          <div style={{
            position: 'relative' as const,
            height: '250px',
            overflow: 'hidden',
            marginBottom: '25px',
          }}>
            <img 
              src="https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Detailed cleaning work"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div style={{
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0, 30, 80, 0.1) 0%, transparent 50%)',
            }}></div>
          </div>
          
          <div style={{
            padding: '0 25px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}>
                02
              </span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#001E50',
                fontFamily: "'Playfair Display', serif",
                margin: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#001E50';
              }}>
                The Art of Impeccable Detail
              </h3>
            </div>
            
            <p style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#666666',
              lineHeight: 1.6,
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#001E50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
            }}>
              Where others see cleaning, we see storytelling. Our 247-point inspection checklist 
              ensures no detail escapes our notice—from the precise alignment of picture frames 
              to the microscopic sanitation of high-touch surfaces.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '12px',
              marginBottom: '25px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  247-Point Quality Checklist
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Proprietary Luxury-Grade Solutions
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Microscopic Attention to Detail
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 3: Guaranteed Happiness */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 30, 80, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 30, 80, 0.05)',
          paddingBottom: '30px',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 30, 80, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.05)';
        }}>
          <div style={{
            position: 'relative' as const,
            height: '250px',
            overflow: 'hidden',
            marginBottom: '25px',
          }}>
            <img 
              src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Satisfied customer"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div style={{
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0, 30, 80, 0.1) 0%, transparent 50%)',
            }}></div>
          </div>
          
          <div style={{
            padding: '0 25px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}>
                03
              </span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#001E50',
                fontFamily: "'Playfair Display', serif",
                margin: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#001E50';
              }}>
                Happiness, Guaranteed & Insured
              </h3>
            </div>
            
            <p style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#666666',
              lineHeight: 1.6,
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#001E50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
            }}>
              Our promise isn't just a tagline—it's our company's DNA. Every OTON service 
              comes with our unprecedented Triple-Guarantee for complete peace of mind.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '12px',
              marginBottom: '25px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Triple-Guarantee Protection
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  48-Hour Happiness Window
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  $1M Comprehensive Insurance
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card 4: Convenient & Customizable */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 30, 80, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 30, 80, 0.05)',
          paddingBottom: '30px',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 30, 80, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 30, 80, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.05)';
        }}>
          <div style={{
            position: 'relative' as const,
            height: '250px',
            overflow: 'hidden',
            marginBottom: '25px',
          }}>
            <img 
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Customized cleaning service"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div style={{
              position: 'absolute' as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0, 30, 80, 0.1) 0%, transparent 50%)',
            }}></div>
          </div>
          
          <div style={{
            padding: '0 25px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFD700',
                background: 'rgba(255, 215, 0, 0.1)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              }}>
                04
              </span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#001E50',
                fontFamily: "'Playfair Display', serif",
                margin: 0,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#001E50';
              }}>
                Bespoke Service Tailored to You
              </h3>
            </div>
            
            <p style={{
              fontSize: '1rem',
              fontWeight: 400,
              color: '#666666',
              lineHeight: 1.6,
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#001E50';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
            }}>
              Your home is as unique as your fingerprint, and your cleaning service should be too. 
              Our concierge approach means we design every aspect of your service around your 
              lifestyle, schedule, and specific needs.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '12px',
              marginBottom: '25px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Personalized Concierge Planning
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Flexible Scheduling (24/7 Access)
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: 'rgba(0, 30, 80, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#001E50',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                }}>
                  Eco & Family-Safe Customization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Airbnb Cleaning Services Section
function AirbnbCleaningServices() {
  const services = [
    {
      id: 1,
      title: "Kitchen Deep Cleaning",
      description: "Complete sanitization of countertops, appliances, sinks, and cabinets. We ensure all cooking surfaces are spotless and food-safe for your next guests.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Bathroom Sanitization",
      description: "Thorough disinfection of toilets, showers, tubs, and sinks. We eliminate germs and leave bathrooms sparkling with fresh linens properly arranged.",
      image: "https://images.pexels.com/photos/1873094/pexels-photo-1873094.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Bedroom & Living Area",
      description: "Dusting, vacuuming, and detailed cleaning of all surfaces. We make beds with fresh linens and ensure all areas are guest-ready and welcoming.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Floor Care",
      description: "Vacuuming carpets, mopping hard floors, and attention to corners and edges. We ensure all flooring is clean, safe, and visually appealing.",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Window & Glass Cleaning",
      description: "Streak-free cleaning of all windows, mirrors, and glass surfaces. We ensure maximum natural light and clear views throughout the property.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "High-Touch Surface Disinfection",
      description: "Complete disinfection of door handles, light switches, remotes, and other frequently touched surfaces to ensure guest safety and health.",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: '#FFFFFF',
      position: 'relative' as const,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center' as const,
          marginBottom: '60px',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#001E50',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            What is included in our{' '}
            <span style={{ color: '#FFD700', transition: 'all 0.3s ease' }}>Deep cleaning service?</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 30px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#001E50';
            e.currentTarget.style.transform = 'scale(1.01)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666666';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Our cleaning company has highly trained and experienced Deep cleaners in handling all types of cleaning tasks. Some of the categories included in our Deep cleaning service include:
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px',
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 30, 80, 0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0, 30, 80, 0.05)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 30, 80, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 30, 80, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.05)';
            }}>
              {/* Service Image */}
              <div style={{
                position: 'relative' as const,
                height: '200px',
                overflow: 'hidden',
              }}>
                <img 
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' as const,
                    objectPosition: 'center',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute' as const,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0, 30, 80, 0.1) 0%, transparent 50%)',
                }}></div>
              </div>
              
              {/* Service Content */}
              <div style={{
                padding: '25px',
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#001E50',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '12px',
                  lineHeight: 1.3,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#001E50';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#666666',
                  lineHeight: 1.6,
                  marginBottom: '0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#001E50';
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#666666';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Check-in Preparation Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 30, 80, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)',
          borderRadius: '20px',
          padding: '40px 20px',
          textAlign: 'center' as const,
          border: '1px solid rgba(255, 215, 0, 0.2)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 30, 80, 0.08) 0%, rgba(255, 215, 0, 0.08) 100%)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 30, 80, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 30, 80, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 900,
            color: '#001E50',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '24px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.color = '#FFD700';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#001E50';
          }}>
            <span style={{ color: '#FFD700', transition: 'all 0.3s ease' }}>Check-in Preparation</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 500,
            color: '#333333',
            lineHeight: 1.7,
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: "'Playfair Display', serif",
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#001E50';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#333333';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            We organize and restock the property, making sure it is fully prepared and inviting for the next guest's arrival.
          </p>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included in a maid service cleaning?",
      answer: "Our maid service cleaning includes comprehensive dusting, vacuuming, mopping, kitchen and bathroom sanitization, surface cleaning, and trash removal. We follow a detailed 247-point checklist to ensure every area of your home is spotless and fresh."
    },
    {
      question: "What time do you offer cleaning services?",
      answer: "We offer flexible scheduling with services available from 7:00 AM to 9:00 PM, 7 days a week. Our premium concierge team can accommodate your specific timing needs, including same-day and emergency cleaning services."
    },
    {
      question: "Will I always get the same cleaner?",
      answer: "Yes! We assign a dedicated cleaning professional to your home to ensure consistency and build familiarity with your specific preferences and property layout. Your cleaner will become intimately familiar with your home's unique needs."
    },
    {
      question: "Are the cleaning supplies included?",
      answer: "Absolutely. We provide all professional-grade cleaning supplies, equipment, and tools. Our team uses eco-friendly, hospital-grade disinfectants and specialized cleaning solutions that deliver superior results while being safe for your family and pets."
    },
    {
      question: "Is your cleaning supplies and products child and pet friendly?",
      answer: "Yes, all our cleaning products are non-toxic, biodegradable, and safe for children and pets. We use EPA-approved green cleaning solutions that effectively eliminate germs without harmful chemicals or strong odors."
    },
    {
      question: "What forms of payments do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), digital payments (Apple Pay, Google Pay), bank transfers, and cash. For recurring services, we offer convenient automatic billing with multiple payment options."
    },
    {
      question: "What is a deep clean?",
      answer: "A deep clean is an intensive, detailed cleaning service that goes beyond regular maintenance. It includes cleaning areas often overlooked in routine cleaning, such as inside appliances, baseboards, window tracks, light fixtures, and grout cleaning. Perfect for move-in/move-out or seasonal cleaning."
    },
    {
      question: "How much does it cost to clean my home?",
      answer: "Pricing is customized based on your home's size, specific needs, and frequency of service. We offer transparent pricing with no hidden fees. Contact our concierge team for a personalized quote tailored to your exact requirements."
    },
    {
      question: "Do I have to be home for the cleaning?",
      answer: "Not at all! We offer keyless entry solutions and have secure key management systems. Many of our clients provide us with access codes or keys for convenient access, allowing you to go about your day while we transform your space."
    },
    {
      question: "How can I book online?",
      answer: "You can easily book through our website's booking portal, via our mobile app, or by calling our premium concierge line. Our online system allows you to schedule, reschedule, or modify services 24/7 with instant confirmation."
    },
    {
      question: "How long does it take to clean my house?",
      answer: "Cleaning time varies based on home size, condition, and specific services requested. Typically, a standard cleaning for a 3-bedroom home takes 3-4 hours, while deep cleans may take 5-6 hours. We'll provide an accurate time estimate during your consultation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      position: 'relative' as const,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative' as const,
        zIndex: 2,
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center' as const,
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 215, 0, 0.1)',
            padding: '10px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            marginBottom: '20px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '18px',
              transition: 'all 0.3s ease',
            }}>❓</div>
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#001E50',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
            }}>
              Got Questions?
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#001E50',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            margin: '0 0 20px 0',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Frequently Asked <span style={{ color: '#FFD700', transition: 'all 0.3s ease' }}>Questions</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 30px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#001E50';
            e.currentTarget.style.transform = 'scale(1.01)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666666';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Find answers to common questions about our premium cleaning services. 
            If you don't see your question here, contact our concierge team for personalized assistance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                marginBottom: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 30, 80, 0.08)',
                border: '1px solid rgba(0, 30, 80, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 30, 80, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 30, 80, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  background: openIndex === index ? 'rgba(255, 215, 0, 0.05)' : '#FFFFFF',
                  border: 'none',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left' as const,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 215, 0, 0.08)';
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = openIndex === index ? 'rgba(255, 215, 0, 0.05)' : '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flex: 1,
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#001E50',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    Q{index + 1}
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#001E50',
                    fontFamily: "'Playfair Display', serif",
                    margin: 0,
                    lineHeight: 1.4,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#001E50';
                  }}>
                    {faq.question}
                  </h3>
                </div>
                
                <div style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                  marginLeft: '10px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1.2)' : 'rotate(0deg) scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(1)';
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              {/* Answer Content */}
              <div style={{
                maxHeight: openIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: openIndex === index ? 'rgba(0, 30, 80, 0.02)' : 'transparent',
              }}>
                <div style={{
                  padding: openIndex === index ? '0 20px 20px 68px' : '0 20px',
                  opacity: openIndex === index ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: 'rgba(0, 30, 80, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#001E50',
                      flexShrink: 0,
                      marginTop: '3px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.background = 'rgba(0, 30, 80, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.background = 'rgba(0, 30, 80, 0.1)';
                    }}>
                      A
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: '#666666',
                      lineHeight: 1.6,
                      margin: 0,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#001E50';
                      e.currentTarget.style.transform = 'scale(1.01)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#666666';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px 20px',
          background: 'linear-gradient(135deg, rgba(0, 30, 80, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 30, 80, 0.08) 0%, rgba(255, 215, 0, 0.08) 100%)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 30, 80, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 30, 80, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#001E50',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFD700';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#001E50';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Still Have Questions?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto 24px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#001E50';
            e.currentTarget.style.transform = 'scale(1.01)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#666666';
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            Our premium concierge team is available 24/7 to answer any questions and help you schedule your cleaning service.
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '16px',
            justifyContent: 'center',
          }}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={{
                background: 'linear-gradient(135deg, #001E50 0%, #003080 100%)',
                color: '#FFFFFF',
                border: 'none',
                padding: '16px 24px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(0, 30, 80, 0.3)',
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.5px',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 30, 80, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #003080 0%, #001E50 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 30, 80, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #001E50 0%, #003080 100%)';
              }}
            >
              Contact Our Concierge
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+12815551234'}
              style={{
                background: 'transparent',
                color: '#001E50',
                border: '2px solid rgba(0, 30, 80, 0.3)',
                padding: '16px 24px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.5px',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 30, 80, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.color = '#FFD700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(0, 30, 80, 0.3)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.color = '#001E50';
              }}
            >
              Call (281) 555-1234
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bottom CTA Buttons Component
function BottomCTAButtons() {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '15px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      zIndex: 999,
      pointerEvents: 'auto',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '50px',
      padding: '8px',
      boxShadow: '0 8px 30px rgba(0, 30, 80, 0.2)',
      border: '1px solid rgba(255, 215, 0, 0.3)',
      width: 'calc(100vw - 30px)',
      maxWidth: '500px',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 30, 80, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 30, 80, 0.2)';
    }}>
      {/* Call Now Button */}
      <button
        onClick={handleContactClick}
        style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
          color: '#001E50',
          border: 'none',
          width: '105px',
          height: '45px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase' as const,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.6)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #FFE55C 0%, #FFD700 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)';
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#001E50"/>
            <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#001E50"/>
          </svg>
          Call Now
        </span>
      </button>

      {/* Get Quote Button */}
      <button
        onClick={handleContactClick}
        style={{
          background: 'linear-gradient(135deg, #001E50 0%, #003080 100%)',
          color: '#FFFFFF',
          border: 'none',
          width: '105px',
          height: '45px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 15px rgba(0, 30, 80, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase' as const,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 30, 80, 0.6)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #003080 0%, #001E50 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 30, 80, 0.4)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #001E50 0%, #003080 100%)';
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Get Quote
        </span>
      </button>

      {/* Book Now Button */}
      <button
        onClick={handleContactClick}
        style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
          color: '#001E50',
          border: 'none',
          width: '105px',
          height: '45px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase' as const,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.6)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #FFE55C 0%, #FFD700 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
          e.currentTarget.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)';
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M12 5L19 12L12 19" stroke="#001E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Book Now
        </span>
      </button>
    </div>
  );
}

// Footer Component
function Footer() {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM6 9H2V21H6V9ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z' },
  ];

  const servicesLinks = [
    { name: "Deep Cleaning", url: "/deep-cleaning" },
    { name: "Move In/Out Cleaning", url: "/move-in-move-out-cleaning" },
    { name: "Regular Maintenance", url: "/regular-maintenance" },
    { name: "Post Construction", url: "/post-construction" },
    { name: "Commercial Cleaning", url: "/commercial-cleaning" },
  ];

  const companyLinks = [
    { name: "About Us", url: "/about" },
    { name: "Meet the Team", url: "/meet-the-team" },
    { name: "Careers", url: "/careers" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Gallery", url: "/gallery" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Sitemap", url: "/sitemap" },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #001E50 0%, #002D6E 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 20px 40px',
        position: 'relative',
      }}>
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          marginBottom: '60px',
        }}>
          {/* Brand Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => window.location.href = '/'}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.3)';
              }}>
                <span style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  color: '#001E50',
                  fontFamily: "'Playfair Display', serif",
                  transition: 'all 0.3s ease',
                }}>
                  O
                </span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '1px',
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                }}>
                  OTON
                </span>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FFD700',
                  letterSpacing: '3px',
                  textTransform: 'uppercase' as const,
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                }}>
                  PREMIUM CLEANING SERVICES
                </span>
              </div>
            </div>
            
            <p style={{
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '20px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              Boston's #1 rated luxury cleaning service. Transforming spaces 
              into pristine sanctuaries with white-glove attention to detail.
            </p>
            
            {/* Social Media Only - No Newsletter */}
            <div style={{
              marginTop: '20px',
            }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '12px',
              }}>
                {socialLinks.map((social, index) => (
                  <button 
                    key={index}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      color: '#FFFFFF',
                      
                    }}
                    onClick={() => window.open(social.url, '_blank')}
                    aria-label={social.name}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                      e.currentTarget.style.color = '#FFD700';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d={social.icon} stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Quick Links Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
          }}>
            {/* Services Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '24px',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Our Services
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {servicesLinks.map((link, index) => (
                  <li key={index} style={{
                    marginBottom: '8px',
                  }}>
                    <button
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        textAlign: 'left' as const,
                      }}
                      onClick={() => handleNavigation(link.url)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFD700';
                        e.currentTarget.style.transform = 'translateX(5px) scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0) scale(1)';
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '24px',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {companyLinks.map((link, index) => (
                  <li key={index} style={{
                    marginBottom: '8px',
                  }}>
                    <button
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        textAlign: 'left' as const,
                      }}
                      onClick={() => handleNavigation(link.url)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFD700';
                        e.currentTarget.style.transform = 'translateX(5px) scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0) scale(1)';
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '24px',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFD700';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Contact Info
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBottom: '30px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92C2 16.37 2.28 15.86 2.76 15.58L10.76 10.58C11.44 10.21 12.24 10.21 12.92 10.58L20.92 15.58C21.4 15.86 21.68 16.37 21.68 16.92H22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 12L2 6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#FFD700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      transition: 'all 0.3s ease',
                    }}>
                      Email
                    </div>
                    <button style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      textAlign: 'left' as const,
                    }}
                    onClick={() => window.location.href = 'mailto:info@otoncleaningservices.com'}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      info@otoncleaningservices.com
                    </button>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFD700"/>
                      <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFD700"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#FFD700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      transition: 'all 0.3s ease',
                    }}>
                      Phone
                    </div>
                    <button style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      textAlign: 'left' as const,
                    }}
                    onClick={() => window.location.href = 'tel:+12815551234'}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      (281) 555-1234
                    </button>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#FFD700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      transition: 'all 0.3s ease',
                    }}>
                      Location
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      Serving Boston, MA & Surrounding Areas
                    </div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    marginTop: '2px',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#FFD700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      transition: 'all 0.3s ease',
                    }}>
                      Business Hours
                    </div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                      Mon-Sun: 7AM - 9PM
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div style={{
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L15 15M12 12L9 9M12 12V6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFD700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase' as const,
                    transition: 'all 0.3s ease',
                  }}>
                    Emergency Service
                  </div>
                  <button style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left' as const,
                  }}
                  onClick={() => window.location.href = 'tel:+12815551234'}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    (281) 555-EMERGENCY
                  </button>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  }}>
                    24/7 Emergency Cleaning Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          margin: '40px 0',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 215, 0, 0.3)';
          e.currentTarget.style.transform = 'scaleX(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'scaleX(1)';
        }}></div>
        
        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            textAlign: 'center' as const,
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.6)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              © {new Date().getFullYear()} Oton Premium Cleaning Services. All rights reserved.
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {legalLinks.map((link, index) => (
                <span key={index} style={{
                  transition: 'all 0.3s ease',
                }}>
                  <button
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                    }}
                    onClick={() => handleNavigation(link.url)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {link.name}
                  </button>
                  {index < legalLinks.length - 1 && (
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.3)',
                      marginLeft: '12px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFD700';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.3)';
                    }}>•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          {/* Trust Seals */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '8px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease',
                }}>
                  Licensed & Insured
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '8px 12px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92C2 16.37 2.28 15.86 2.76 15.58L10.76 10.58C11.44 10.21 12.24 10.21 12.92 10.58L20.92 15.58C21.4 15.86 21.68 16.37 21.68 16.92H22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 12L2 6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease',
                }}>
                  Google Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button 
          style={{
            position: 'absolute',
            right: '20px',
            top: '80px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '2px solid rgba(255, 215, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#FFD700',
            
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 15L12 8L19 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default function HeroSection() {
  const handleBookNow = () => {
    window.location.href = '/contact';
  };

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#FFFFFF',
    }}>
      {/* Header */}
      <Header />

      {/* Bottom CTA Buttons */}
      <BottomCTAButtons />

      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#001E50',
        paddingTop: '80px',
        width: '100%',
        overflowX: 'hidden',
      }}>
        {/* Full-Width Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          width: '100%',
          overflow: 'hidden',
        }}>
          {/* Background Image - Full Width */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.pexels.com/photos/1873094/pexels-photo-1873094.jpeg?auto=compress&cs=tinysrgb&w=2070")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minWidth: '100%',
            transition: 'all 0.3s ease',
          }} />
          
          {/* Lighter Dark Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 30, 80, 0.45)',
            width: '100%',
            transition: 'all 0.3s ease',
          }} />
          
          {/* Subtle Gradient Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 30, 80, 0.3) 0%, rgba(0, 45, 110, 0.25) 40%, rgba(255, 215, 0, 0.08) 100%)',
            width: '100%',
            transition: 'all 0.3s ease',
          }} />
        </div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1400px',
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          {/* Main Heading */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            marginBottom: '24px',
            lineHeight: 1.1,
            letterSpacing: '-0.5px',
            textShadow: '0 4px 25px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Playfair Display', serif",
            maxWidth: '1100px',
            width: '100%',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.textShadow = '0 6px 30px rgba(0, 0, 0, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.textShadow = '0 4px 25px rgba(0, 0, 0, 0.5)';
          }}>
            Deep Cleaning Services in <span style={{
              color: '#FFD700',
              position: 'relative',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              Boston
              <span style={{
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                right: 0,
                height: '5px',
                background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                transition: 'all 0.3s ease',
              }} />
            </span>
          </h1>

          {/* Tagline */}
          <p style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '40px',
            lineHeight: 1.6,
            maxWidth: '900px',
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
            width: '100%',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.textShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.4)';
          }}>
           Elevate Your Home's Foundation with Professional, Reliable, and Detailed Deep Cleaning Services, Tailored to Restore and Refresh Boston's Homes from the Ground Up.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={handleBookNow}
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
              color: '#001E50',
              border: 'none',
              padding: '18px 40px',
              fontSize: '16px',
              fontWeight: 900,
              borderRadius: '40px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.5px',
              boxShadow: '0 12px 35px rgba(255, 215, 0, 0.4)',
              position: 'relative',
              overflow: 'hidden',
              fontFamily: "'Playfair Display', serif",
              textTransform: 'uppercase' as const,
              marginBottom: '40px',
              width: '100%',
              maxWidth: '400px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 215, 0, 0.5)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFE55C 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>
              Book Your Appointment Now
            </span>
          </button>

          {/* Stats or Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginTop: '40px',
            maxWidth: '800px',
            width: '100%',
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderRadius = '15px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderRadius = '0';
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFD700',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 3px 15px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s ease',
              }}>
                24/7
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase' as const,
                letterSpacing: '2px',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
              }}>
                Availability
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderRadius = '15px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderRadius = '0';
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFD700',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 3px 15px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s ease',
              }}>
                100%
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase' as const,
                letterSpacing: '2px',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
              }}>
                Satisfaction
              </div>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderRadius = '15px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderRadius = '0';
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFD700',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 3px 15px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.3s ease',
              }}>
                5-Star
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase' as const,
                letterSpacing: '2px',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
              }}>
                Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Body Content Section */}
      <div style={{
        background: '#FFFFFF',
        padding: '80px 20px',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
      }}>
        {/* Decorative Top Border */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
          transition: 'all 0.3s ease',
        }} />

        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
        }}>
          {/* Section Title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '30px',
                height: '1px',
                background: '#FFD700',
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#FFD700',
                letterSpacing: '2px',
                textTransform: 'uppercase' as const,
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.letterSpacing = '3px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.letterSpacing = '2px';
              }}>
                Excellence in Every Detail
              </span>
              <div style={{
                width: '30px',
                height: '1px',
                background: '#FFD700',
                transition: 'all 0.3s ease',
              }} />
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              color: '#001E50',
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif",
              marginBottom: '20px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              Premium Cleaning for<br />
              <span style={{
                color: '#FFD700',
                position: 'relative',
                display: 'inline-block',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Boston's Finest Properties
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
                  transition: 'all 0.3s ease',
                }} />
              </span>
            </h2>
          </div>

          {/* Main Content - Only First Paragraph Remains */}
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '30px',
          }}>
            {/* First Paragraph */}
            <div style={{
              position: 'relative',
              paddingLeft: '25px',
              width: '100%',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.paddingLeft = '30px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.paddingLeft = '25px';
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '3px',
                height: '100%',
                background: 'linear-gradient(to bottom, #FFD700, #FFC107)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
              }} />
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#333333',
                lineHeight: 1.8,
                fontFamily: "'Playfair Display', serif",
                marginBottom: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#001E50';
                e.currentTarget.style.transform = 'scale(1.01)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#333333';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                 In a city as vibrant and bustling as Boston, everyday cleaning can only go so far against the grit, pollen, and wear-and-tear of urban life. Boston's distinct seasons and high foot traffic demand a more thorough solution. A professional deep cleaning goes beyond the surface to sanitize, refresh, and protect your home or apartment. It's essential for maintaining a truly healthy living environment, tackling neglected areas, and restoring your space to its most pristine condition, ensuring comfort and satisfaction for residents and guests alike.
              </p>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#333333',
                lineHeight: 1.8,
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#001E50';
                e.currentTarget.style.transform = 'scale(1.01)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#333333';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                Cleanliness is a key factor that influences guest experiences and ratings, which in turn impacts your occupancy and revenue. A spotless property not only enhances guest comfort but also elevates your reputation as a host.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* Why Choose OTON Section */}
      <WhyChooseOtonSection />

      {/* Airbnb Cleaning Services Section */}
      <AirbnbCleaningServices />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <Footer />

      {/* Responsive CSS */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
          }
          50% {
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.7);
          }
          100% {
            boxShadow: 0 8px 25px rgba(255, 215, 0, 0.4);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          font-family: 'Playfair Display', serif;
          background: #FFFFFF;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');
        
        /* Mobile Devices */
        @media (max-width: 1024px) {
          /* Header - Hide desktop nav, show hamburger on mobile */
          header nav {
            display: none !important;
          }
          
          .desktop-cta {
            display: none !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
          }
          
          /* Hero Section */
          .hero-heading {
            font-size: 1.8rem !important;
            line-height: 1.2 !important;
            padding: 0 10px !important;
          }
          
          .hero-tagline {
            font-size: 1rem !important;
            padding: 0 15px !important;
          }
          
          .hero-stats {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
            max-width: 100% !important;
            padding: 0 10px !important;
          }
          
          .hero-stats div {
            padding: 15px 10px !important;
          }
          
          .hero-stats div div:first-child {
            font-size: 1.8rem !important;
          }
          
          .hero-stats div div:last-child {
            font-size: 11px !important;
            letterSpacing: 1px !important;
          }
          
          header > div {
            padding: 15px !important;
          }
          
          /* Footer */
          .footer-top {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .footer-links-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .footer-links-column {
            text-align: center !important;
          }
          
          .contact-item {
            justify-content: center !important;
            text-align: center !important;
          }
          
          .emergency-contact {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          .social-media-links {
            justify-content: center !important;
          }
          
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
            gap: 20px !important;
          }
          
          .back-to-top-button {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            margin: 30px auto 0 !important;
          }
          
          /* Before & After Section */
          .before-after-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .before-after-images {
            height: 250px !important;
          }
          
          /* Why Choose Cards */
          .why-choose-grid {
            grid-templateColumns: 1fr !important;
            gap: 20px !important;
          }
          
          /* Services Grid */
          .services-grid {
            grid-templateColumns: 1fr !important;
          }
          
          /* FAQ Section */
          .faq-item {
            padding: 15px !important;
          }
          
          /* Section Padding */
          section {
            padding: 60px 15px !important;
          }
          
          /* Headings */
          h2 {
            font-size: 1.8rem !important;
            padding: 0 10px !important;
          }
          
          h3 {
            font-size: 1.3rem !important;
          }
          
          /* Stats Counter */
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 15px !important;
          }
          
          .stats-grid div:first-child {
            font-size: 1.8rem !important;
          }
        }
        
        /* Very Small Mobile Devices */
        @media (max-width: 480px) {
          /* Hero Section */
          .hero-heading {
            font-size: 1.6rem !important;
            line-height: 1.1 !important;
          }
          
          .hero-tagline {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
          
          .hero-stats {
            gap: 5px !important;
          }
          
          .hero-stats div {
            padding: 12px 5px !important;
          }
          
          .hero-stats div div:first-child {
            font-size: 1.5rem !important;
          }
          
          .hero-stats div div:last-child {
            font-size: 10px !important;
            letterSpacing: 0.5px !important;
          }
          
          /* CTA Button */
          .hero-cta-button {
            padding: 14px 30px !important;
            font-size: 14px !important;
            max-width: 90% !important;
          }
          
          /* Footer */
          footer {
            padding: 60px 15px 30px !important;
          }
          
          .footer-logo {
            flex-direction: column !important;
            text-align: center !important;
            gap: 20px !important;
          }
          
          .footer-logo-text {
            align-items: center !important;
          }
          
          /* Section Padding */
          section {
            padding: 40px 10px !important;
          }
          
          /* Headings */
          h2 {
            font-size: 1.6rem !important;
          }
          
          /* Cards and Grids */
          .why-choose-grid div,
          .services-grid div {
            min-height: auto !important;
          }
          
          /* Stats Counter */
          .stats-grid {
            gap: 10px !important;
          }
          
          .stats-grid div:first-child {
            font-size: 1.5rem !important;
          }
          
          .stats-grid div:last-child {
            font-size: 9px !important;
          }
        }
        
        /* Large Desktop Screens */
        @media (min-width: 1600px) {
          .container {
            max-width: 1500px !important;
            margin: 0 auto !important;
          }
        }
        
        /* Touch Devices Optimization */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px !important;
            min-width: 44px !important;
          }
          
          /* Ensure hover effects work on touch devices */
          button:active, a:active {
            opacity: 0.8 !important;
          }
          
          /* Mobile hover simulation */
          button:hover, a:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 20px rgba(0, 30, 80, 0.2) !important;
          }
          
          .card-hover:hover {
            transform: translateY(-8px) !important;
            boxShadow: 0 25px 60px rgba(0, 30, 80, 0.15) !important;
          }
          
          .text-hover:hover {
            color: #FFD700 !important;
            transform: scale(1.02) !important;
          }
          
          .button-hover:hover {
            transform: translateY(-3px) scale(1.05) !important;
            boxShadow: 0 8px 20px rgba(0, 30, 80, 0.6) !important;
          }
        }
        
        /* Print Styles */
        @media print {
          .bottom-cta,
          button[aria-label="mobile-menu"],
          .mobile-menu,
          .back-to-top-button {
            display: none !important;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Image optimization */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Button focus states for accessibility */
        button:focus, a:focus {
          outline: 2px solid #FFD700;
          outline-offset: 2px;
        }
        
        /* Prevent text selection on interactive elements */
        button, a {
          user-select: none;
        }
        
        /* Ensure all content fits within viewport */
        .hero-content {
          width: 100% !important;
          box-sizing: border-box !important;
        }
        
        /* Fix for very small screens */
        @media (max-width: 320px) {
          .hero-heading {
            font-size: 1.4rem !important;
          }
          
          .hero-tagline {
            font-size: 0.9rem !important;
          }
          
          .hero-stats div div:first-child {
            font-size: 1.2rem !important;
          }
          
          .hero-stats div div:last-child {
            font-size: 8px !important;
          }
          
          .bottom-cta-buttons {
            width: calc(100vw - 20px) !important;
            padding: 6px !important;
            gap: 5px !important;
          }
          
          .bottom-cta-buttons button {
            width: 90px !important;
            height: 40px !important;
            font-size: 9px !important;
          }
        }
        
        /* Universal hover support for all devices */
        @media (hover: hover) and (pointer: fine) {
          /* Hover effects for desktop with mouse */
          .hover-effect:hover {
            transition: all 0.3s ease !important;
          }
        }
        
        @media (hover: none) and (pointer: coarse) {
          /* Active states for mobile/touch devices */
          .hover-effect:active {
            opacity: 0.8 !important;
            transform: scale(0.98) !important;
          }
          
          /* Enhanced touch feedback */
          button:active, a:active, .clickable:active {
            background-color: rgba(0, 30, 80, 0.1) !important;
            transform: scale(0.98) !important;
            transition: all 0.1s ease !important;
          }
        }
      `}</style>
    </div>
  );
}