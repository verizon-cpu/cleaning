"use client";

import { useState, useEffect, useRef } from 'react';

// ==================== RESPONSIVE HEADER COMPONENT ====================
interface HeaderProps {
  logoName?: string;
  logoTagline?: string;
  phoneNumber?: string;
  services?: Array<{ name: string; url: string }>;
}

function Header({
  logoName = "OTON",
  logoTagline = "PREMIUM CLEANING SERVICES",
  phoneNumber = "(281) 555-1234",
  services = [
    { name: "Airbnb Cleaning", url: "/airbnb-cleaning" },
    { name: "Housekeeping", url: "/housekeeping" },
    { name: "Move In/Move Out Cleaning", url: "/move-in-move-out-cleaning" },
    { name: "Apartment Cleaning", url: "/apartment-cleaning" },
    { name: "Commercial Cleaning", url: "/commercial-cleaning" },
    { name: "Deep Cleaning", url: "/deep-cleaning" }
  ]
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileService, setActiveMobileService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
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
      width: '100vw',
      boxSizing: 'border-box',
    },
    
    innerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '0.75rem 1rem' : isTablet ? '1rem 1.5rem' : '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    brandSection: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      minWidth: isMobile ? 'auto' : '200px',
    },
    
    logoMark: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.75rem' : '1rem',
      textDecoration: 'none',
      cursor: 'pointer',
      padding: '0.25rem 0',
    },
    
    logoCircle: {
      width: isMobile ? '36px' : isTablet ? '44px' : '50px',
      height: isMobile ? '36px' : isTablet ? '44px' : '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
      flexShrink: 0,
    },
    
    logoLetter: {
      fontSize: isMobile ? '18px' : isTablet ? '22px' : '24px',
      fontWeight: 900,
      color: '#001E50',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1,
    },
    
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minWidth: isMobile ? 'auto' : '140px',
    },
    
    logoName: {
      fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
      fontWeight: 900,
      color: '#FFFFFF',
      letterSpacing: isMobile ? '0.5px' : '1px',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
    },
    
    logoTagline: {
      fontSize: isMobile ? '8px' : isTablet ? '9px' : '10px',
      fontWeight: 900,
      color: '#FFD700',
      letterSpacing: isMobile ? '2px' : '3px',
      textTransform: 'uppercase',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      marginTop: '2px',
    },
    
    navigation: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isTablet ? '1.5rem' : '2rem',
      flex: 1,
      minWidth: 0,
    },
    
    navItem: (active: boolean) => ({
      fontSize: isTablet ? '14px' : '15px',
      fontWeight: 900,
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      padding: '0.5rem 0',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
      whiteSpace: 'nowrap',
      position: 'relative',
    }),
    
    servicesDropdownContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    
    servicesButton: (active: boolean, open: boolean) => ({
      background: open ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
      border: 'none',
      color: active || open ? '#FFD700' : '#FFFFFF',
      fontSize: isTablet ? '14px' : '15px',
      fontWeight: 900,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontFamily: "'Playfair Display', serif",
      whiteSpace: 'nowrap',
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
      minWidth: '220px',
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
      gap: isTablet ? '1rem' : '1.5rem',
      flexShrink: 0,
      minWidth: isTablet ? '200px' : '240px',
      justifyContent: 'flex-end',
    },
    
    phoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    
    phoneIcon: (active: boolean) => ({
      width: isTablet ? '32px' : '36px',
      height: isTablet ? '32px' : '36px',
      borderRadius: '50%',
      background: active ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      flexShrink: 0,
    }),
    
    phoneLabel: {
      fontSize: isTablet ? '9px' : '10px',
      fontWeight: 900,
      color: '#FFD700',
      letterSpacing: '0.5px',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
      whiteSpace: 'nowrap',
    },
    
    phoneNumber: (active: boolean) => ({
      fontSize: isTablet ? '14px' : '15px',
      fontWeight: 900,
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
      whiteSpace: 'nowrap',
    }),
    
    headerButton: (active: boolean) => ({
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      color: '#001E50',
      border: 'none',
      padding: isTablet ? '10px 20px' : '12px 24px',
      fontSize: isTablet ? '13px' : '14px',
      fontWeight: 900,
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      letterSpacing: '0.5px',
      boxShadow: active ? '0 12px 30px rgba(255, 215, 0, 0.4)' : '0 8px 25px rgba(255, 215, 0, 0.3)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Playfair Display', serif",
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }),
    
    mobileMenuButton: {
      display: isMobile ? 'flex' : 'none',
      background: 'transparent',
      border: 'none',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
      padding: '6px',
      flexShrink: 0,
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
      width: '100vw',
      height: '100vh',
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    
    mobileMenuHeader: {
      padding: isMobile ? '1rem' : '1.25rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
      minHeight: '60px',
    },
    
    mobileMenuContent: {
      padding: isMobile ? '1rem' : '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      flex: 1,
      overflowY: 'auto',
      width: '100%',
      boxSizing: 'border-box',
      WebkitOverflowScrolling: 'touch',
    },
    
    mobileNavItem: (active: boolean) => ({
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      fontWeight: 900,
      fontSize: isMobile ? '16px' : '18px',
      padding: isMobile ? '0.875rem 0' : '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
      textAlign: 'left',
    }),
    
    mobileServicesButton: (active: boolean, open: boolean) => ({
      background: 'transparent',
      border: 'none',
      color: active || open ? '#FFD700' : '#FFFFFF',
      fontWeight: 900,
      fontSize: isMobile ? '16px' : '18px',
      padding: isMobile ? '0.875rem 0' : '1rem 0',
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
      padding: isMobile ? '0.5rem 0 0.5rem 1rem' : '0.75rem 0 0.75rem 1.5rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    mobileServiceItem: (active: boolean) => ({
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      fontWeight: 900,
      fontSize: isMobile ? '14px' : '16px',
      padding: isMobile ? '0.625rem 0.875rem' : '0.75rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      backgroundColor: active ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    }),
    
    mobileCTASection: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '1rem' : '1.25rem',
      padding: isMobile ? '1rem' : '1.25rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    mobilePhoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      width: '100%',
    },
    
    mobilePhoneIcon: (active: boolean) => ({
      width: isMobile ? '36px' : '40px',
      height: isMobile ? '36px' : '40px',
      backgroundColor: active ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255, 215, 0, 0.2)',
      transition: 'all 0.3s ease',
      flexShrink: 0,
    }),
    
    mobilePhoneLabel: {
      fontSize: isMobile ? '12px' : '13px',
      color: '#FFD700',
      fontWeight: 900,
      lineHeight: '1.2',
      fontFamily: "'Playfair Display', serif",
    },
    
    mobilePhoneNumber: (active: boolean) => ({
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: 900,
      color: active ? '#FFD700' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileHeaderButton: (active: boolean) => ({
      padding: isMobile ? '0.875rem 1.25rem' : '1rem 1.5rem',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      color: '#001E50',
      border: 'none',
      borderRadius: '30px',
      fontWeight: 900,
      fontSize: isMobile ? '14px' : '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
      boxSizing: 'border-box',
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
            >
              <div style={baseStyles.logoCircle}>
                <span style={baseStyles.logoLetter}>O</span>
              </div>
              <div style={baseStyles.logoTextContainer}>
                <span style={baseStyles.logoName}>{logoName}</span>
                <span style={baseStyles.logoTagline}>{logoTagline}</span>
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
              >
                Home
              </div>
              
              <div style={baseStyles.servicesDropdownContainer}>
                <button 
                  style={baseStyles.servicesButton(activeItem === 'services', servicesDropdownOpen)}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setActiveItem('services')}
                  onMouseLeave={() => setActiveItem(null)}
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
                  <div style={baseStyles.servicesDropdown}>
                    {services.map((service, index) => (
                      <div
                        key={index}
                        style={baseStyles.serviceItem(activeService === index)}
                        onClick={() => handleNavigation(service.url)}
                        onMouseEnter={() => setActiveService(index)}
                        onMouseLeave={() => setActiveService(null)}
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
              >
                About
              </div>
              
              <div 
                style={baseStyles.navItem(activeItem === 'contact')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('contact')}
                onMouseLeave={() => setActiveItem(null)}
              >
                Contact
              </div>
              <div 
                style={baseStyles.navItem(activeItem === 'Before/After Gallery')}
                onClick={() => handleNavigation('/before-after')}
                onMouseEnter={() => setActiveItem('Before/After Gallery')}
                onMouseLeave={() => setActiveItem(null)}
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
                     onMouseLeave={() => setActiveItem(null)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFFFFF"/>
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.phoneLabel}>Premium Concierge</div>
                  <a 
                    href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} 
                    style={baseStyles.phoneNumber(activeItem === 'phoneNumber')}
                    onMouseEnter={() => setActiveItem('phoneNumber')}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
              <button 
                style={baseStyles.headerButton(activeItem === 'bookNow')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('bookNow')}
                onMouseLeave={() => setActiveItem(null)}
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
      
      {isMobileMenuOpen && isMobile && (
        <div style={baseStyles.mobileMenuOverlay}>
          <div style={baseStyles.mobileMenuHeader}>
            <div style={baseStyles.brandSection}>
              <div 
                style={baseStyles.logoMark}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveMobileItem('logo')}
                onMouseLeave={() => setActiveMobileItem(null)}
              >
                <div style={baseStyles.logoCircle}>
                  <span style={baseStyles.logoLetter}>O</span>
                </div>
                <div style={baseStyles.logoTextContainer}>
                  <span style={baseStyles.logoName}>{logoName}</span>
                  <span style={baseStyles.logoTagline}>{logoTagline}</span>
                </div>
              </div>
            </div>
            <button 
              style={baseStyles.closeMenuButton(activeMobileItem === 'close')} 
              onClick={toggleMobileMenu}
              onMouseEnter={() => setActiveMobileItem('close')}
              onMouseLeave={() => setActiveMobileItem(null)}
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
            >
              Home
            </div>
            
            <button 
              style={baseStyles.mobileServicesButton(activeMobileItem === 'services', mobileServicesOpen)}
              onClick={toggleMobileServices}
              onMouseEnter={() => setActiveMobileItem('services')}
              onMouseLeave={() => setActiveMobileItem(null)}
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
            >
              About
            </div>
            
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'Before/After Gallery')}
              onClick={() => handleNavigation('/before-after')}
              onMouseEnter={() => setActiveMobileItem('Before/After Gallery')}
              onMouseLeave={() => setActiveMobileItem(null)}
            >
              Before/After Gallery

          
            </div>
          </div>
          
          <div style={baseStyles.mobileCTASection}>
            <div style={baseStyles.mobilePhoneWrapper}>
              <div style={baseStyles.mobilePhoneIcon(activeMobileItem === 'phoneIcon')}
                   onMouseEnter={() => setActiveMobileItem('phoneIcon')}
                   onMouseLeave={() => setActiveMobileItem(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFFFFF"/>
                  <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <div>
                <div style={baseStyles.mobilePhoneLabel}>Premium Concierge</div>
                <a 
                  href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} 
                  style={baseStyles.mobilePhoneNumber(activeMobileItem === 'phoneNumber')}
                  onMouseEnter={() => setActiveMobileItem('phoneNumber')}
                  onMouseLeave={() => setActiveMobileItem(null)}
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
            <button 
              style={baseStyles.mobileHeaderButton(activeMobileItem === 'mobileBookNow')}
              onClick={() => handleNavigation('/contact')}
              onMouseEnter={() => setActiveMobileItem('mobileBookNow')}
              onMouseLeave={() => setActiveMobileItem(null)}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== RESPONSIVE FOOTER COMPONENT ====================
interface FooterProps {
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  location?: string;
  businessHours?: string;
  emergencyPhone?: string;
  servicesLinks?: Array<{ name: string; url: string }>;
  companyLinks?: Array<{ name: string; url: string }>;
  legalLinks?: Array<{ name: string; url: string }>;
}

function Footer({
  companyName = "OTON",
  tagline = "PREMIUM CLEANING SERVICES",
  email = "info@otoncleaningservices.com",
  phone = "(281) 555-1234",
  location = "Serving Houston, MA & Surrounding Areas",
  businessHours = "Mon-Sun: 7AM - 9PM",
  emergencyPhone = "(281) 555-EMERGENCY",
  servicesLinks = [
    { name: "Deep Cleaning", url: "/deep-cleaning" },
    { name: "Move In/Out Cleaning", url: "/move-in-move-out-cleaning" },
    { name: "House keeping", url: "/housekeeping" },
    { name: "House cleaning", url: "/house-cleaning" },
    { name: "Commercial Cleaning", url: "/commercial-cleaning" },
  ],
  companyLinks = [
    { name: "About Us", url: "/about" },
    { name: "contact", url: "/contact" },
    
    { name: "Before/After Gallery", url: "/before-after" },
  ],
  legalLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Sitemap", url: "/sitemap" },
  ]
}: FooterProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [backToTopHover, setBackToTopHover] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM6 9H2V21H6V9ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #001E50 0%, #002D6E 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      boxSizing: 'border-box',
      left: 0,
      right: 0,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '2rem 1rem 1rem' : isTablet ? '2.5rem 1.5rem 1.25rem' : '3rem 2rem 1.5rem',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          {/* Column 1: Brand & Social */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
            }}
            onClick={() => handleNavigation('/')}>
              <div style={{
                width: isMobile ? '44px' : isTablet ? '52px' : '60px',
                height: isMobile ? '44px' : isTablet ? '52px' : '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
                flexShrink: 0,
              }}>
                <span style={{
                  fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
                  fontWeight: 900,
                  color: '#001E50',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  O
                </span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
              }}>
                <span style={{
                  fontSize: isMobile ? '20px' : isTablet ? '26px' : '30px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.5px',
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  lineHeight: 1.1,
                }}>
                  {companyName}
                </span>
                <span style={{
                  fontSize: isMobile ? '9px' : isTablet ? '10px' : '11px',
                  fontWeight: 600,
                  color: '#FFD700',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                  marginTop: '2px',
                }}>
                  {tagline}
                </span>
              </div>
            </div>
            
            <p style={{
              fontSize: isMobile ? '13px' : '14px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.6,
              marginBottom: '0.75rem',
            }}>
              Houston's #1 rated luxury cleaning service. Transforming spaces 
              into pristine sanctuaries with white-glove attention to detail.
            </p>
            
            {/* Social Media */}
            <div style={{
              marginTop: '0.5rem',
            }}>
              <h4 style={{
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '0.75rem',
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}>
                {socialLinks.map((social, index) => (
                  <button 
                    key={index}
                    style={{
                      width: isMobile ? '36px' : '40px',
                      height: isMobile ? '36px' : '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => window.open(social.url, '_blank')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d={social.icon} stroke="#FFD700" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services & Company Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '1.5rem' : isTablet ? '1.5rem' : '2rem',
          }}>
            {/* Services Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h4 style={{
                fontSize: isMobile ? '16px' : '17px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1rem',
                fontFamily: "'Playfair Display', serif",
              }}>
                Our Services
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      style={{
                        fontSize: isMobile ? '13px' : '14px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                        lineHeight: 1.4,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.url);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFD700';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      {link.name}
                    </a>
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
                fontSize: isMobile ? '16px' : '17px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1rem',
                fontFamily: "'Playfair Display', serif",
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      style={{
                        fontSize: isMobile ? '13px' : '14px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                        lineHeight: 1.4,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.url);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFD700';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <h4 style={{
              fontSize: isMobile ? '16px' : '17px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1rem',
              fontFamily: "'Playfair Display', serif",
            }}>
              Contact Info
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '0.75rem' : '1rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92C2 16.37 2.28 15.86 2.76 15.58L10.76 10.58C11.44 10.21 12.24 10.21 12.92 10.58L20.92 15.58C21.4 15.86 21.68 16.37 21.68 16.92H22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 12L2 6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    Email
                  </div>
                  <a href={`mailto:${email}`} style={{
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                  }}>
                    {email}
                  </a>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFD700"/>
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFD700"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    Phone
                  </div>
                  <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={{
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                  }}>
                    {phone}
                  </a>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    Location
                  </div>
                  <div style={{
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    lineHeight: 1.4,
                  }}>
                    {location}
                  </div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                  }}>
                    Business Hours
                  </div>
                  <div style={{
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    lineHeight: 1.4,
                  }}>
                    {businessHours}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div style={{
              background: 'rgba(255, 215, 0, 0.1)',
              borderRadius: '10px',
              padding: isMobile ? '1rem' : '1.25rem',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '1rem',
            }}>
              <div style={{
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L15 15M12 12L9 9M12 12V6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
              }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#FFD700',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}>
                  Emergency Service
                </div>
                <a href={`tel:${emergencyPhone.replace(/[^\d+]/g, '')}`} style={{
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: 1.2,
                }}>
                  {emergencyPhone}
                </a>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.3,
                }}>
                  24/7 Emergency Cleaning Service
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          margin: isMobile ? '1.5rem 0' : '2rem 0',
          width: '100%',
        }}></div>
        
        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          textAlign: 'center',
          width: '100%',
        }}>
          <div style={{
            fontSize: isMobile ? '11px' : '12px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.4,
          }}>
            © {new Date().getFullYear()} {companyName} Premium Cleaning Services. All rights reserved.
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {legalLinks.map((link, index) => (
              <span key={index}>
                <a 
                  href={link.url} 
                  style={{
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.url);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                  }}
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.3)',
                    marginLeft: '0.5rem',
                  }}>•</span>
                )}
              </span>
            ))}
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button 
          style={{
            position: isMobile ? 'fixed' : 'absolute',
            right: isMobile ? '1rem' : '1.5rem',
            bottom: isMobile ? '5rem' : 'auto',
            top: isMobile ? 'auto' : '2rem',
            width: isMobile ? '40px' : '44px',
            height: isMobile ? '40px' : '44px',
            borderRadius: '50%',
            background: backToTopHover ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.1)',
            border: '2px solid rgba(255, 215, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#FFD700',
            zIndex: 1000,
            boxSizing: 'border-box',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          onMouseEnter={() => setBackToTopHover(true)}
          onMouseLeave={() => setBackToTopHover(false)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 15L12 8L19 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

// ==================== RESPONSIVE GALLERY PAGE ====================

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  serviceType: string;
  timeTaken: string;
  clientQuote: string;
}

// Custom Image Comparison Component
function ImageComparison({ beforeImage, afterImage, isMobile, isTablet }: { 
  beforeImage: string; 
  afterImage: string; 
  isMobile: boolean;
  isTablet: boolean;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleInteractionStart = () => {
    isDragging.current = true;
  };

  const handleInteractionMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 5), 95));
  };

  const handleInteractionEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleInteractionMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        handleInteractionMove(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      handleInteractionEnd();
    };

    const handleTouchEnd = () => {
      handleInteractionEnd();
    };

    if (isDragging.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging.current]);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percentage, 5), 95));
    }
  };

  const handleSize = isMobile ? 28 : isTablet ? 32 : 36;
  const labelPadding = isMobile ? '4px 8px' : '6px 10px';
  const labelFontSize = isMobile ? '10px' : '11px';
  const imageHeight = isMobile ? '220px' : isTablet ? '260px' : '300px';

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: imageHeight,
        overflow: 'hidden',
        borderRadius: '8px',
        cursor: isMobile ? 'pointer' : 'col-resize',
        touchAction: 'none',
        boxSizing: 'border-box',
      }}
      onMouseDown={(e) => {
        if (!isMobile) {
          handleInteractionStart();
          handleInteractionMove(e.clientX);
        }
      }}
      onTouchStart={(e) => {
        handleInteractionStart();
        if (e.touches[0]) {
          handleInteractionMove(e.touches[0].clientX);
        }
      }}
      onClick={handleContainerClick}
    >
      {/* Before Image */}
      <img 
        src={beforeImage} 
        alt="Before cleaning"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
        }}
      />
      
      {/* After Image (clipped) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${sliderPosition}%`,
        height: '100%',
        overflow: 'hidden',
        zIndex: 2,
      }}>
        <img 
          src={afterImage} 
          alt="After cleaning"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      
      {/* Slider Handle */}
      <div 
        style={{
          position: 'absolute',
          top: '0',
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          width: `${handleSize}px`,
          height: `${handleSize}px`,
          background: '#FFD700',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 4,
          cursor: isMobile ? 'pointer' : 'col-resize',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          border: '2px solid #001E50',
          touchAction: 'none',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleInteractionStart();
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          handleInteractionStart();
        }}
      >
        <svg 
          width={isMobile ? '12' : '14'} 
          height={isMobile ? '12' : '14'} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M8.5 5L11.7929 8.29289C12.1834 8.68342 12.8166 8.68342 13.2071 8.29289L16.5 5M8.5 19L11.7929 15.7071C12.1834 15.3166 12.8166 15.3166 13.2071 15.7071L16.5 19M19 12L5 12" 
            stroke="#001E50" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Divider Line */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: `${sliderPosition}%`,
        transform: 'translateX(-1px)',
        width: '2px',
        height: '100%',
        background: '#001E50',
        zIndex: 3,
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
      }}></div>
      
      {/* Labels */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '8px' : '12px',
        left: isMobile ? '8px' : '12px',
        background: 'rgba(0, 30, 80, 0.85)',
        color: '#FFFFFF',
        padding: labelPadding,
        fontSize: labelFontSize,
        fontWeight: 700,
        borderRadius: '4px',
        zIndex: 3,
        letterSpacing: '0.5px',
      }}>
        BEFORE
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '8px' : '12px',
        right: isMobile ? '8px' : '12px',
        background: 'rgba(255, 215, 0, 0.85)',
        color: '#001E50',
        padding: labelPadding,
        fontSize: labelFontSize,
        fontWeight: 700,
        borderRadius: '4px',
        zIndex: 3,
        letterSpacing: '0.5px',
      }}>
        AFTER
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'kitchen',
      title: 'Luxury Kitchen Deep Clean',
      beforeImage: 'https://t3.ftcdn.net/jpg/02/40/81/58/240_F_240815850_Ybe9h54LFYHNB7UYOWGbpd61TAPBTybs.jpg',
      afterImage: 'https://t3.ftcdn.net/jpg/00/39/40/52/240_F_39405233_UL1bFX3UOo1mjGxq2WtPCXvhl6Qm9OrU.jpg',
      description: 'Complete deep cleaning and degreasing of a high-end kitchen. Removed years of built-up grease, restored stainless steel appliances.',
      serviceType: 'Deep Cleaning',
      timeTaken: '4.5 hours',
      clientQuote: 'The transformation was absolutely stunning!'
    },
    {
      id: 2,
      category: 'bathroom',
      title: 'Marble Bathroom Restoration',
      beforeImage: 'https://t4.ftcdn.net/jpg/03/10/60/15/240_F_310601506_nnw8CjaVytLmX6fJ2194kb2SWbiGFy0t.jpg',
      afterImage: 'https://t4.ftcdn.net/jpg/03/03/81/55/240_F_303815576_vBDDsTnvxS9o71lHYMxx61LZhC3ugOOS.jpg',
      description: 'Specialized marble and tile restoration. Removed hard water stains, mold, and soap scum while preserving natural stone.',
      serviceType: 'Marble Restoration',
      timeTaken: '3 hours',
      clientQuote: 'The marble looks brand new!'
    },
    {
      id: 3,
      category: 'living-room',
      title: 'Post-Renovation Cleanup',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800',
      afterImage: 'https://t4.ftcdn.net/jpg/10/05/26/13/240_F_1005261386_JExRMVNdEn95Kxm6kueEjWOZZtE3o6LC.jpg',
      description: 'Complete post-construction cleanup including dust removal, window cleaning, and floor polishing.',
      serviceType: 'Post-Construction',
      timeTaken: '6 hours',
      clientQuote: 'Turned construction site into showroom!'
    },
    {
      id: 4,
      category: 'commercial',
      title: 'Office Lobby Deep Clean',
      beforeImage: 'https://t3.ftcdn.net/jpg/03/69/55/26/240_F_369552688_PaFy1iUdqRdg6CqPUeMCLZFhzMtQti29.jpg',
      afterImage: 'https://t4.ftcdn.net/jpg/02/04/85/81/240_F_204858134_OFGcU9UQLpQWyPmh3YADf7QWvS2cqr85.jpg',
      description: 'Commercial-grade cleaning of a 5,000 sq ft office lobby with marble floors and glass walls.',
      serviceType: 'Commercial Cleaning',
      timeTaken: '8 hours',
      clientQuote: 'Our tenants are thrilled!'
    },
    {
      id: 5,
      category: 'airbnb',
      title: 'Vacation Rental Turnover',
      beforeImage: 'https://t4.ftcdn.net/jpg/03/10/60/15/240_F_310601506_nnw8CjaVytLmX6fJ2194kb2SWbiGFy0t.jpg',
      afterImage: 'https://t4.ftcdn.net/jpg/03/03/81/55/240_F_303815576_vBDDsTnvxS9o71lHYMxx61LZhC3ugOOS.jpg',
      description: 'Airbnb turnover cleaning with white-glove standards including linens and kitchen sanitization.',
      serviceType: 'Airbnb Cleaning',
      timeTaken: '2.5 hours',
      clientQuote: 'Perfect 5-star reviews!'
    },
    {
      id: 6,
      category: 'deep-cleaning',
      title: 'Historical Home Preservation',
      beforeImage: 'https://t4.ftcdn.net/jpg/03/10/60/15/240_F_310601506_nnw8CjaVytLmX6fJ2194kb2SWbiGFy0t.jpg',
      afterImage: 'https://t4.ftcdn.net/jpg/03/10/60/15/240_F_310601506_nnw8CjaVytLmX6fJ2194kb2SWbiGFy0t.jpg',
      description: 'Gentle yet thorough cleaning of a century-old home, preserving original features.',
      serviceType: 'Deep Cleaning',
      timeTaken: '12 hours',
      clientQuote: 'Treated our home with care!'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', count: galleryItems.length },
    { id: 'kitchen', name: 'Kitchen', count: galleryItems.filter(item => item.category === 'kitchen').length },
    { id: 'bathroom', name: 'Bathroom', count: galleryItems.filter(item => item.category === 'bathroom').length },
    { id: 'living-room', name: 'Living Room', count: galleryItems.filter(item => item.category === 'living-room').length },
    { id: 'commercial', name: 'Commercial', count: galleryItems.filter(item => item.category === 'commercial').length },
    { id: 'airbnb', name: 'Airbnb', count: galleryItems.filter(item => item.category === 'airbnb').length },
    { id: 'deep-cleaning', name: 'Deep Cleaning', count: galleryItems.filter(item => item.category === 'deep-cleaning').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Responsive page styles
  const pageStyles: any = {
    pageContainer: {
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: "'Playfair Display', serif",
      width: '100vw',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflowX: 'hidden',
      position: 'relative',
      left: 0,
      right: 0,
    },
    
    heroSection: {
      minHeight: isMobile ? '50vh' : isTablet ? '55vh' : '60vh',
      background: 'linear-gradient(rgba(0, 30, 80, 0.8), rgba(0, 30, 80, 0.6)), url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '5rem 1rem 2rem' : isTablet ? '6rem 1.5rem 3rem' : '7rem 2rem 4rem',
      width: '100vw',
      boxSizing: 'border-box',
      position: 'relative',
      left: 0,
      right: 0,
    },
    
    heroContent: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    
    heroTitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '2.75rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: isMobile ? '0.5rem' : '0.75rem',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
      padding: isMobile ? '0 0.25rem' : '0',
    },
    
    heroSubtitle: {
      fontSize: isMobile ? '0.9rem' : isTablet ? '1.1rem' : '1.25rem',
      fontWeight: 700,
      color: '#FFD700',
      marginBottom: isMobile ? '0.75rem' : '1rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.4,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    
    heroText: {
      fontSize: isMobile ? '0.8rem' : isTablet ? '0.95rem' : '1.1rem',
      color: '#FFFFFF',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      padding: isMobile ? '0 0.5rem' : '0',
    },
    
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '1.5rem 1rem' : isTablet ? '2rem 1.5rem' : '2.5rem 2rem',
      background: '#FFFFFF',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      left: 0,
      right: 0,
    },
    
    sectionTitle: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
      fontWeight: 900,
      color: '#001E50',
      marginBottom: isMobile ? '0.5rem' : '0.75rem',
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
      padding: isMobile ? '0 0.25rem' : '0',
    },
    
    sectionSubtitle: {
      fontSize: isMobile ? '0.8rem' : isTablet ? '0.9rem' : '1rem',
      color: '#666666',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.5,
      padding: isMobile ? '0 0.5rem' : '0',
      maxWidth: '800px',
      margin: '0 auto',
    },
    
    categoriesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: isMobile ? '0.5rem' : '0.75rem',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      width: '100%',
      padding: isMobile ? '0 0.25rem' : '0',
    },
    
    categoryButton: (active: boolean, hover: boolean) => ({
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      background: active ? '#001E50' : hover ? 'rgba(0, 30, 80, 0.1)' : 'transparent',
      border: active ? '2px solid #001E50' : '2px solid rgba(0, 30, 80, 0.2)',
      borderRadius: '30px',
      color: active ? '#FFFFFF' : '#001E50',
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      fontWeight: active ? 800 : 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Playfair Display', serif",
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
    }),
    
    categoryCount: {
      background: '#FFD700',
      color: '#001E50',
      fontSize: isMobile ? '0.65rem' : '0.7rem',
      fontWeight: 800,
      borderRadius: '50%',
      width: isMobile ? '18px' : '20px',
      height: isMobile ? '18px' : '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '1.5rem' : isTablet ? '1.5rem' : '2rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    galleryItem: {
      background: '#FFFFFF',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(0, 30, 80, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    
    premiumBadge: {
      position: 'absolute',
      top: isMobile ? '8px' : '10px',
      right: isMobile ? '8px' : '10px',
      background: '#FFD700',
      color: '#001E50',
      padding: isMobile ? '3px 6px' : '4px 8px',
      fontSize: isMobile ? '0.6rem' : '0.7rem',
      fontWeight: 900,
      borderRadius: '4px',
      zIndex: 3,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    
    itemContent: {
      padding: isMobile ? '1rem' : '1.25rem',
      width: '100%',
      boxSizing: 'border-box',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    
    itemCategory: {
      fontSize: isMobile ? '0.65rem' : '0.75rem',
      fontWeight: 700,
      color: '#FFD700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: isMobile ? '0.4rem' : '0.5rem',
      fontFamily: "'Playfair Display', serif",
    },
    
    itemTitle: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: 900,
      color: '#001E50',
      marginBottom: isMobile ? '0.5rem' : '0.75rem',
      lineHeight: 1.3,
      fontFamily: "'Playfair Display', serif",
    },
    
    itemDescription: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      color: '#666666',
      marginBottom: isMobile ? '0.75rem' : '1rem',
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
      flex: 1,
    },
    
    itemDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: isMobile ? '0.75rem' : '1rem',
      width: '100%',
    },
    
    serviceType: {
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      fontWeight: 700,
      color: '#001E50',
      background: 'rgba(0, 30, 80, 0.1)',
      padding: isMobile ? '3px 8px' : '4px 10px',
      borderRadius: '4px',
      fontFamily: "'Playfair Display', serif",
    },
    
    timeTaken: {
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      fontWeight: 700,
      color: '#FFD700',
      fontFamily: "'Playfair Display', serif",
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      whiteSpace: 'nowrap',
    },
    
    clientQuote: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontStyle: 'italic',
      color: '#001E50',
      borderLeft: '2px solid #FFD700',
      paddingLeft: '0.75rem',
      marginTop: 'auto',
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
    },
    
    statsSection: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '0.75rem' : '1rem',
      marginTop: isMobile ? '1.5rem' : '2rem',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      width: '100%',
      padding: isMobile ? '0 0.25rem' : '0',
    },
    
    statCard: {
      background: '#FFFFFF',
      borderRadius: '8px',
      padding: isMobile ? '0.75rem' : '1rem',
      textAlign: 'center',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(0, 30, 80, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    statNumber: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 900,
      color: '#001E50',
      marginBottom: isMobile ? '0.25rem' : '0.5rem',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1,
    },
    
    statLabel: {
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      color: '#666666',
      fontWeight: 600,
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.3,
    },
    
    ctaSection: {
      background: 'linear-gradient(135deg, #001E50 0%, #002D6E 100%)',
      borderRadius: '10px',
      padding: isMobile ? '1.5rem 1rem' : isTablet ? '2rem 1.5rem' : '2.5rem 2rem',
      marginTop: isMobile ? '2rem' : '2.5rem',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    ctaTitle: {
      fontSize: isMobile ? '1.25rem' : isTablet ? '1.5rem' : '1.75rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: isMobile ? '0.75rem' : '1rem',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
    },
    
    ctaText: {
      fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1.1rem',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: isMobile ? '1.25rem' : '1.5rem',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
      padding: isMobile ? '0 0.5rem' : '0',
    },
    
    ctaButton: {
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      color: '#001E50',
      border: 'none',
      padding: isMobile ? '0.875rem 1.5rem' : isTablet ? '1rem 2rem' : '1.125rem 2.25rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: 900,
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '0.5px',
      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
      marginTop: isMobile ? '0.5rem' : '0.75rem',
      width: '100%',
      maxWidth: '300px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
    },
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBookNow = () => {
    window.location.href = '/contact';
  };

  const stats = [
    { number: '500+', label: 'Transformations' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Service Available' },
    { number: '5-Star', label: 'Average Rating' },
  ];

  return (
    <div style={pageStyles.pageContainer}>
      <Header />
      
      <section style={pageStyles.heroSection}>
        <div style={pageStyles.heroContent}>
          <h1 style={pageStyles.heroTitle}>
            Premium Transformations Gallery
          </h1>
          <p style={pageStyles.heroSubtitle}>
            Witness the Art of Professional Cleaning
          </p>
          <p style={pageStyles.heroText}>
            See how our white-glove service transforms spaces from ordinary to extraordinary. 
            Drag or tap the slider to compare before and after results.
          </p>
        </div>
      </section>
      
      <main style={pageStyles.mainContent}>
        <div style={{width: '100%', marginBottom: isMobile ? '1.5rem' : '2rem'}}>
          <h2 style={pageStyles.sectionTitle}>Our Transformations</h2>
          <p style={pageStyles.sectionSubtitle}>
            Browse our premium cleaning transformations. Click on category buttons to filter by room type.
          </p>
          
          <div style={pageStyles.categoriesContainer}>
            {categories.map((category) => (
              <button
                key={category.id}
                style={pageStyles.categoryButton(
                  selectedCategory === category.id, 
                  hoveredItem === parseInt(category.id.replace('cat', '') || '0')
                )}
                onClick={() => handleCategorySelect(category.id)}
                onMouseEnter={() => setHoveredItem(parseInt(category.id.replace('cat', '') || '0'))}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{category.name}</span>
                <span style={pageStyles.categoryCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div style={pageStyles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} style={pageStyles.statCard}>
              <div style={pageStyles.statNumber}>{stat.number}</div>
              <div style={pageStyles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div style={pageStyles.galleryGrid}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              style={{
                ...pageStyles.galleryItem,
                transform: hoveredItem === item.id ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredItem === item.id ? '0 8px 25px rgba(0, 0, 0, 0.12)' : '0 4px 15px rgba(0, 0, 0, 0.08)',
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={{ position: 'relative', width: '100%' }}>
                <div style={pageStyles.premiumBadge}>
                  Premium
                </div>
                <ImageComparison 
                  beforeImage={item.beforeImage} 
                  afterImage={item.afterImage}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </div>
              
              <div style={pageStyles.itemContent}>
                <div style={pageStyles.itemCategory}>
                  {item.category.toUpperCase()}
                </div>
                <h3 style={pageStyles.itemTitle}>
                  {item.title}
                </h3>
                <p style={pageStyles.itemDescription}>
                  {item.description}
                </p>
                
                <div style={pageStyles.itemDetails}>
                  <span style={pageStyles.serviceType}>
                    {item.serviceType}
                  </span>
                  <span style={pageStyles.timeTaken}>
                    ⏱️ {item.timeTaken}
                  </span>
                </div>
                
                <div style={pageStyles.clientQuote}>
                  "{item.clientQuote}"
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={pageStyles.ctaSection}>
          <h3 style={pageStyles.ctaTitle}>
            Ready for Your Transformation?
          </h3>
          <p style={pageStyles.ctaText}>
            Experience the OTON difference. Our premium cleaning service transforms your space 
            with meticulous attention to detail and white-glove care.
          </p>
          <button 
            style={{
              ...pageStyles.ctaButton,
              transform: hoveredItem === 999 ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hoveredItem === 999 ? '0 6px 20px rgba(255, 215, 0, 0.4)' : '0 4px 15px rgba(255, 215, 0, 0.3)',
            }}
            onClick={handleBookNow}
            onMouseEnter={() => setHoveredItem(999)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Book Your Premium Cleaning
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}