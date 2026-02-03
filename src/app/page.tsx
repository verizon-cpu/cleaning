"use client";

import { useState, useEffect, FormEvent, ChangeEvent, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Bottom CTA Buttons Component
interface BottomCTAButtonsProps {
  onCallClick?: () => void;
  onQuoteClick?: () => void;
  onBookClick?: () => void;
  phoneNumber?: string;
  callText?: string;
  quoteText?: string;
  bookText?: string;
  containerStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  showPhoneIcon?: boolean;
  showQuoteIcon?: boolean;
  showBookIcon?: boolean;
}

function BottomCTAButtons({
  onCallClick = () => window.location.href = '/contact',
  onQuoteClick = () => window.location.href = '/contact',
  onBookClick = () => window.location.href = '/contact',
  phoneNumber = '(281) 555-1234',
  callText = 'Call Now',
  quoteText = 'Get Quote',
  bookText = 'Book Now',
  containerStyle = {},
  buttonStyle = {},
  showPhoneIcon = true,
  showQuoteIcon = true,
  showBookIcon = true
}: BottomCTAButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleCallClick = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = 'tel:' + phoneNumber.replace(/[^\d+]/g, '');
    }
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      window.location.href = '/contact';
    }
  };

  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      window.location.href = '/contact';
    }
  };

  const baseButtonStyle: React.CSSProperties = {
    width: '105px',
    height: '45px',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '11px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...buttonStyle
  };

  const callButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
    color: '#001E50',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
  };

  const quoteButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #001E50 0%, #003080 100%)',
    color: '#FFFFFF',
    boxShadow: '0 4px 15px rgba(0, 30, 80, 0.4)',
  };

  const bookButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
    color: '#001E50',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
  };

  const buttonHoverStyle: React.CSSProperties = {
    transform: 'translateY(-3px) scale(1.05)',
  };

  const callHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(255, 215, 0, 0.6)',
    background: 'linear-gradient(135deg, #FFE55C 0%, #FFD700 100%)',
  };

  const quoteHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(0, 30, 80, 0.6)',
    background: 'linear-gradient(135deg, #003080 0%, #001E50 100%)',
  };

  const bookHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(255, 215, 0, 0.6)',
    background: 'linear-gradient(135deg, #FFE55C 0%, #FFD700 100%)',
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        zIndex: 9999,
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
        ...containerStyle
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 30, 80, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 30, 80, 0.2)';
      }}
    >
      {/* Call Now Button */}
      <button
        onClick={handleCallClick}
        onMouseEnter={() => setHoveredButton('call')}
        onMouseLeave={() => setHoveredButton(null)}
        style={{
          ...callButtonStyle,
          ...(hoveredButton === 'call' ? callHoverStyle : {})
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
          {showPhoneIcon && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#001E50"/>
              <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#001E50"/>
            </svg>
          )}
          {callText}
        </span>
      </button>

      {/* Get Quote Button */}
      <button
        onClick={handleQuoteClick}
        onMouseEnter={() => setHoveredButton('quote')}
        onMouseLeave={() => setHoveredButton(null)}
        style={{
          ...quoteButtonStyle,
          ...(hoveredButton === 'quote' ? quoteHoverStyle : {})
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
          {showQuoteIcon && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {quoteText}
        </span>
      </button>

      {/* Book Now Button */}
      <button
        onClick={handleBookClick}
        onMouseEnter={() => setHoveredButton('book')}
        onMouseLeave={() => setHoveredButton(null)}
        style={{
          ...bookButtonStyle,
          ...(hoveredButton === 'book' ? bookHoverStyle : {})
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
          {showBookIcon && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="#001E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {bookText}
        </span>
      </button>
    </div>
  );
}

const HeroSection = () => {
  // State for sticky header
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    service: 'deep-cleaning'
  });
  
  // State for services dropdown
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  // Hover states for all devices - using both hover and active states
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileService, setActiveMobileService] = useState<number | null>(null);
  const [excellenceBadgeActive, setExcellenceBadgeActive] = useState(false);
  const [googleBadgeActive, setGoogleBadgeActive] = useState(false);
  const [googleReviewsActive, setGoogleReviewsActive] = useState(false);
  const [trustCardActive, setTrustCardActive] = useState<number | null>(null);
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  
  // Formspree integration
  const [formspreeState, handleFormspreeSubmit] = useForm("xqeedjny");

  // State to track if component has mounted (to avoid hydration errors)
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Set hasMounted to true on client side
    setHasMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Close mobile menu if resizing to desktop
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

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Submit to Formspree
    await handleFormspreeSubmit(e);
    
    // Only clear form if submission was successful
    if (formspreeState.succeeded) {
      alert('Thank you! We will contact you within 15 minutes.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        zip: '',
        service: 'deep-cleaning'
      });
    }
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  // Handle navigation
  const handleNavigation = (path: string) => {
    window.location.href = path;
    closeMobileMenu();
  };
  
  // Handle Google reviews click
  const handleGoogleReviewsClick = () => {
    const googleReviewsLink = "https://g.page/r/CYOUR_GOOGLE_REVIEWS_LINK_HERE";
    window.open(googleReviewsLink, '_blank');
  };
  
  // Services data
  const services = [
    { name: "Airbnb Cleaning", url: "/airbnb-cleaning" },
    { name: "Housekeeping", url: "/housekeeping" },
    { name: "Move In/Move Out Cleaning", url: "/move-in-move-out-cleaning" },
    { name: "Apartment Cleaning", url: "/apartment-cleaning" },
    { name: "Commercial Cleaning", url: "/commercial-cleaning" },
    { name: "Deep Cleaning", url: "/deep-cleaning" }
  ];

  // Touch event handlers for mobile interactions
  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  // Define CSS-in-JS styles with BOLD Playfair Display
  const baseStyles: any = {
    heroSection: {
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#001E50',
      overflow: 'hidden',
      fontFamily: "'Playfair Display', serif",
    },

    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px 40px',
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
      gap: '16px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    
    logoCircle: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
    },
    
    logoLetter: {
      fontSize: '24px',
      fontWeight: 900,
      color: '#001E50',
      fontFamily: "'Playfair Display', serif",
    },
    
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    
    logoName: {
      fontSize: '28px',
      fontWeight: 900,
      color: '#FFFFFF',
      letterSpacing: '1px',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    
    logoTagline: {
      fontSize: '11px',
      fontWeight: 900,
      color: '#FFD700',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
    },
    
    navigation: {
      display: 'flex',
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
    
    serviceItemIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    serviceItemText: {
      fontSize: '14px',
      fontWeight: 900,
      fontFamily: "'Playfair Display', serif",
    },
    
    ctaSection: {
      display: 'flex',
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
      display: 'none',
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

    backgroundContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      zIndex: 1,
    },
    
    overlayGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0, 30, 80, 0.4) 0%, rgba(0, 30, 80, 0.3) 100%)',
      zIndex: 2,
    },

    heroContent: {
      position: 'relative',
      zIndex: 10,
      paddingTop: '160px',
      paddingBottom: '80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    
    heroGrid: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: '4rem',
      alignItems: 'center',
    },
    
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },

    excellenceBadge: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      backgroundColor: active ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.25)',
      border: active ? '4px solid #FFD700' : '3px solid #FFD700',
      borderRadius: '60px',
      padding: '1.25rem 2rem',
      width: 'fit-content',
      backdropFilter: 'blur(10px)',
      boxShadow: active 
        ? '0 20px 50px rgba(255, 215, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.1) inset' 
        : '0 12px 40px rgba(255, 215, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
      transform: active ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
    }),
    
    numberOneBadge: (active: boolean) => ({
      width: '70px',
      height: '70px',
      backgroundColor: active ? '#FFC107' : '#FFD700',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontWeight: '900',
      boxShadow: active 
        ? '0 10px 30px rgba(255, 215, 0, 0.8), 0 0 0 3px rgba(255, 255, 255, 0.2) inset' 
        : '0 6px 20px rgba(255, 215, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.1) inset',
      transform: active ? 'scale(1.15)' : 'scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
    
    numberOne: {
      color: '#001E50',
      fontWeight: '900',
      fontSize: '2rem',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    
    badgeText: {
      fontSize: '1.25rem',
      fontWeight: '900',
      color: '#FFFFFF',
      lineHeight: '1.3',
      letterSpacing: '1px',
      fontFamily: "'Playfair Display', serif",
      textTransform: 'uppercase',
    },
    
    houstonBold: {
      fontWeight: '900',
      color: '#FFD700',
      fontSize: '1.4rem',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
      display: 'inline',
    },

    headline: {
      fontSize: '4rem',
      fontWeight: '900',
      color: '#FFFFFF',
      lineHeight: '1',
      margin: 0,
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '-0.5px',
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    
    headlineHighlight: {
      background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
    },

    subheadline: {
      fontSize: '1.5rem',
      color: 'rgba(255, 255, 255, 0.95)',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: 0,
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    },

    trustGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
    },
    
    trustCard: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: active ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '1.25rem 1rem',
      border: `1px solid ${active ? '#FFD700' : 'rgba(255, 255, 255, 0.2)'}`,
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
    }),
    
    trustIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: 'rgba(255, 215, 0, 0.15)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    
    trustTitle: {
      fontSize: '0.875rem',
      fontWeight: '900',
      color: '#FFD700',
      marginBottom: '0.25rem',
      fontFamily: "'Playfair Display', serif",
    },
    
    trustDesc: {
      fontSize: '0.75rem',
      color: 'rgba(255, 255, 255, 0.9)',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
    },

    reviewsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    
    stars: {
      display: 'flex',
      gap: '0.25rem',
    },
    
    starIcon: {
      color: '#FFD700',
      fontSize: '1.75rem',
      fontWeight: '900',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    
    reviewText: {
      fontSize: '1.125rem',
      color: 'rgba(255, 255, 255, 0.95)',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
    },
    
    reviewRating: {
      color: '#FFD700',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.25rem',
    },
    
    googleBadge: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: active ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.2)',
      padding: '1.25rem 1.75rem',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      border: active ? '3px solid rgba(255, 215, 0, 0.8)' : '3px solid rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: active ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      boxShadow: active ? '0 12px 30px rgba(0, 0, 0, 0.3)' : '0 8px 20px rgba(0, 0, 0, 0.2)',
    }),
    
    googleText: {
      fontSize: '1.125rem',
      color: '#FFFFFF',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '0.5px',
    },

    // NEW: Google Reviews CTA Button Style
    googleReviewsCTA: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: active ? '#FFD700' : 'rgba(255, 215, 0, 0.1)',
      color: active ? '#001E50' : '#FFFFFF',
      border: active ? '3px solid #FFD700' : '3px solid rgba(255, 215, 0, 0.3)',
      padding: '1.25rem 2rem',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: active ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      boxShadow: active ? '0 12px 30px rgba(255, 215, 0, 0.4)' : '0 8px 20px rgba(0, 0, 0, 0.2)',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    }),
    
    googleReviewsText: {
      fontSize: '1.125rem',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '0.5px',
    },
    
    reviewsCTAContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    },

    bostonSection: {
      marginTop: '1rem',
    },
    
    bostonBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(0, 45, 110, 0.6)',
      padding: '0.75rem 1rem',
      borderRadius: '20px',
      width: 'fit-content',
      backdropFilter: 'blur(10px)',
    },
    
    bostonIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    bostonText: {
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.95)',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },

    rightColumn: {},
    
    bookingCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '20px',
      padding: '2.5rem 2rem',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      border: '2px solid rgba(255, 215, 0, 0.3)',
    },
    
    cardHeader: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    
    formTitle: {
      fontSize: '1.75rem',
      fontWeight: '900',
      color: '#001E50',
      margin: '0 0 0.5rem 0',
      lineHeight: '1.2',
      fontFamily: "'Playfair Display', serif",
    },
    
    formSubtitle: {
      fontSize: '1rem',
      color: '#666',
      margin: 0,
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
    },
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    
    inputLabel: {
      fontSize: '0.875rem',
      fontWeight: '900',
      color: '#001E50',
      fontFamily: "'Playfair Display', serif",
    },
    
    formInput: {
      padding: '1rem 1.25rem',
      borderRadius: '10px',
      border: '2px solid #E5E7EB',
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
      '&:focus': {
        borderColor: '#FFD700',
        boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.2)',
      },
      '&::placeholder': {
        color: '#9CA3AF',
        fontWeight: '900',
        fontFamily: "'Playfair Display', serif",
      },
    },
    
    formRow: {
      display: 'flex',
      gap: '1rem',
    },
    
    formSelect: {
      padding: '1rem 1.25rem',
      borderRadius: '10px',
      border: '2px solid #E5E7EB',
      fontSize: '0.875rem',
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
      '&:focus': {
        borderColor: '#FFD700',
        boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.2)',
      },
    },
    
    submitButton: (active: boolean) => ({
      marginTop: '0.5rem',
      padding: '1.25rem 2.5rem',
      backgroundColor: '#001E50',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1.125rem',
      fontWeight: '900',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #001E50 0%, #002D6E 100%)',
      fontFamily: "'Playfair Display', serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active ? '0 15px 40px rgba(0, 30, 80, 0.4)' : '0 10px 30px rgba(0, 30, 80, 0.3)',
    }),
    
    buttonText: {
      fontWeight: '900',
    },
    
    buttonArrow: {
      transition: 'transform 0.3s ease',
    },
    
    formNote: {
      fontSize: '0.75rem',
      color: '#6B7280',
      textAlign: 'center',
      marginTop: '1rem',
      lineHeight: '1.5',
      fontFamily: "'Playfair Display', serif",
      fontWeight: '900',
    },
    
    securityBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '2px solid #E5E7EB',
    },
    
    securityIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    securityText: {
      fontSize: '0.75rem',
      color: '#6B7280',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
  };

  // Get responsive styles for different screen sizes
  const getResponsiveStyles = () => {
    if (!hasMounted) {
      return baseStyles;
    }

    const responsive = { ...baseStyles };
    
    const isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;
    const isMobileDevice = window.innerWidth < 768;
    
    if (isTablet) {
      responsive.headerContainer = {
        ...responsive.headerContainer,
        padding: '1rem 2rem',
      };
      responsive.heroGrid = {
        ...responsive.heroGrid,
        gridTemplateColumns: '1fr',
        gap: '3rem',
        maxWidth: '90%',
      };
      responsive.headline = {
        ...responsive.headline,
        fontSize: '3.25rem',
        lineHeight: '1',
      };
      responsive.subheadline = {
        ...responsive.subheadline,
        fontSize: '1.375rem',
        maxWidth: '90%',
      };
      responsive.badgeText = {
        ...responsive.badgeText,
        fontSize: '1.1rem',
      };
      responsive.houstonBold = {
        ...responsive.houstonBold,
        fontSize: '1.2rem',
      };
      responsive.numberOne = {
        ...responsive.numberOne,
        fontSize: '1.75rem',
      };
      responsive.trustGrid = {
        ...responsive.trustGrid,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
      };
      responsive.googleText = {
        ...responsive.googleText,
        fontSize: '1rem',
      };
      responsive.googleReviewsText = {
        fontSize: '1rem',
        fontWeight: '900',
      };
      responsive.reviewsContainer = {
        ...responsive.reviewsContainer,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
      };
      responsive.reviewsCTAContainer = {
        ...responsive.reviewsCTAContainer,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
      };
      responsive.bookingCard = {
        ...responsive.bookingCard,
        padding: '2rem 2rem',
        maxWidth: '90%',
        margin: '0 auto',
      };
      responsive.rightColumn = {
        ...responsive.rightColumn,
        marginTop: '0',
      };
      
    } else if (isMobileDevice) {
      responsive.headerContainer = {
        ...responsive.headerContainer,
        padding: '1rem',
      };
      responsive.navigation = {
        ...responsive.navigation,
        display: 'none',
      };
      responsive.ctaSection = {
        ...responsive.ctaSection,
        display: 'none',
      };
      responsive.mobileMenuButton = {
        ...responsive.mobileMenuButton,
        display: 'flex',
      };
      responsive.heroContent = {
        ...responsive.heroContent,
        paddingTop: '120px',
        paddingBottom: '60px',
      };
      responsive.heroGrid = {
        ...responsive.heroGrid,
        gridTemplateColumns: '1fr',
        gap: '2.5rem',
        padding: '0 1rem',
        maxWidth: '100%',
      };
      responsive.headline = {
        ...responsive.headline,
        fontSize: '2.75rem',
        lineHeight: '1.1',
      };
      responsive.subheadline = {
        ...responsive.subheadline,
        fontSize: '1.25rem',
        maxWidth: '100%',
      };
      responsive.badgeText = {
        ...responsive.badgeText,
        fontSize: '1rem',
        lineHeight: '1.2',
      };
      responsive.houstonBold = {
        ...responsive.houstonBold,
        fontSize: '1.1rem',
      };
      responsive.numberOne = {
        ...responsive.numberOne,
        fontSize: '1.5rem',
      };
      responsive.trustGrid = {
        ...responsive.trustGrid,
        gridTemplateColumns: '1fr',
        gap: '0.75rem',
      };
      responsive.googleText = {
        ...responsive.googleText,
        fontSize: '0.95rem',
        fontWeight: '900',
      };
      responsive.googleReviewsText = {
        fontSize: '0.95rem',
        fontWeight: '900',
      };
      responsive.reviewsContainer = {
        ...responsive.reviewsContainer,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1rem',
      };
      responsive.reviewsCTAContainer = {
        ...responsive.reviewsCTAContainer,
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '1rem',
      };
      responsive.bookingCard = {
        ...responsive.bookingCard,
        padding: '2rem 1.5rem',
        maxWidth: '100%',
      };
      responsive.formTitle = {
        ...responsive.formTitle,
        fontSize: '1.5rem',
      };
      responsive.formRow = {
        ...responsive.formRow,
        flexDirection: 'column',
        gap: '1rem',
      };
      responsive.rightColumn = {
        ...responsive.rightColumn,
        marginTop: '1rem',
      };
      responsive.starIcon = {
        ...responsive.starIcon,
        fontSize: '1.5rem',
      };
      responsive.reviewText = {
        ...responsive.reviewText,
        fontSize: '1rem',
      };
      responsive.reviewRating = {
        ...responsive.reviewRating,
        fontSize: '1.1rem',
      };
    }
    
    return responsive;
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <section style={baseStyles.heroSection}>
      {isMobileMenuOpen && (
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
                <a 
                  href="tel:+12815551234" 
                  style={baseStyles.mobilePhoneNumber(activeMobileItem === 'phoneNumber')}
                  onMouseEnter={() => setActiveMobileItem('phoneNumber')}
                  onMouseLeave={() => setActiveMobileItem(null)}
                  onTouchStart={() => handleTouchStart(setActiveMobileItem, 'phoneNumber')}
                  onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
                >
                  (281) 555-1234
                </a>
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

      <header style={{
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
      }}>
        <div style={responsiveStyles.headerContainer}>
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
          
          {hasMounted && !isMobile && (
            <nav style={responsiveStyles.navigation}>
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
                  onMouseEnter={() => setActiveItem('services')}
                  onMouseLeave={() => setActiveItem(null)}
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
                  <div style={baseStyles.servicesDropdown}>
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
                        <div style={baseStyles.serviceItemIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
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
                style={baseStyles.navItem(activeItem === 'contact')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('contact')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'contact')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Contact
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
          
          {hasMounted && !isMobile && (
            <div style={responsiveStyles.ctaSection}>
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
                  <a 
                    href="tel:+12815551234" 
                    style={baseStyles.phoneNumber(activeItem === 'phoneNumber')}
                    onMouseEnter={() => setActiveItem('phoneNumber')}
                    onMouseLeave={() => setActiveItem(null)}
                    onTouchStart={() => handleTouchStart(setActiveItem, 'phoneNumber')}
                    onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
                  >
                    (281) 555-1234
                  </a>
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
          
          {hasMounted && isMobile && (
            <button 
              style={responsiveStyles.mobileMenuButton} 
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
      
      <div style={baseStyles.backgroundContainer}>
        <div style={baseStyles.overlayGradient}></div>
      </div>
      
      <div style={responsiveStyles.heroContent}>
        <div style={responsiveStyles.heroGrid}>
          <div style={baseStyles.leftColumn}>
            <div 
              style={responsiveStyles.excellenceBadge(excellenceBadgeActive)}
              onMouseEnter={() => setExcellenceBadgeActive(true)}
              onMouseLeave={() => setExcellenceBadgeActive(false)}
              onTouchStart={() => handleTouchStart(setExcellenceBadgeActive, true)}
              onTouchEnd={() => handleTouchEnd(setExcellenceBadgeActive, false)}
            >
              <div style={responsiveStyles.numberOneBadge(excellenceBadgeActive)}>
                <span style={responsiveStyles.numberOne}>#1</span>
              </div>
              <span style={responsiveStyles.badgeText}>
                <strong style={responsiveStyles.houstonBold}>HOUSTON'S #1 RATED</strong> LUXURY CLEANING SERVICE
              </span>
            </div>
            
            <h1 style={responsiveStyles.headline}>
              Experience The Pinnacle
              <span style={baseStyles.headlineHighlight}> of Clean</span>
            </h1>
            
            <p style={responsiveStyles.subheadline}>
              Where meticulous attention to detail meets unparalleled service excellence. 
              We transform spaces into pristine sanctuaries of comfort and luxury.
            </p>
            
            <div style={responsiveStyles.trustGrid}>
              <div 
                style={baseStyles.trustCard(trustCardActive === 0)}
                onMouseEnter={() => setTrustCardActive(0)}
                onMouseLeave={() => setTrustCardActive(null)}
                onTouchStart={() => handleTouchStart(setTrustCardActive, 0)}
                onTouchEnd={() => handleTouchEnd(setTrustCardActive, null)}
              >
                <div style={baseStyles.trustIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>5-Star Rated</div>
                  <div style={baseStyles.trustDesc}>500+ Luxury Homes</div>
                </div>
              </div>
              
              <div 
                style={baseStyles.trustCard(trustCardActive === 1)}
                onMouseEnter={() => setTrustCardActive(1)}
                onMouseLeave={() => setTrustCardActive(null)}
                onTouchStart={() => handleTouchStart(setTrustCardActive, 1)}
                onTouchEnd={() => handleTouchEnd(setTrustCardActive, null)}
              >
                <div style={baseStyles.trustIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C20.2837 15 21 15.7163 21 16.6V19.4C21 20.2837 20.2837 21 19.4 21H4.6C3.71634 21 3 20.2837 3 19.4V16.6C3 15.7163 3.71634 15 4.6 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7C16 8.65685 14.6569 10 13 10C11.3431 10 10 8.65685 10 7C10 5.34315 11.3431 4 13 4C14.6569 4 16 5.34315 16 7Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>Certified Experts</div>
                  <div style={baseStyles.trustDesc}>Trained Specialists</div>
                </div>
              </div>
              
              <div 
                style={baseStyles.trustCard(trustCardActive === 2)}
                onMouseEnter={() => setTrustCardActive(2)}
                onMouseLeave={() => setTrustCardActive(null)}
                onTouchStart={() => handleTouchStart(setTrustCardActive, 2)}
                onTouchEnd={() => handleTouchEnd(setTrustCardActive, null)}
              >
                <div style={baseStyles.trustIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>Satisfaction</div>
                  <div style={baseStyles.trustDesc}>100% Guaranteed</div>
                </div>
              </div>
            </div>
            
            <div style={responsiveStyles.reviewsContainer}>
              <div style={baseStyles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={responsiveStyles.starIcon}>★</span>
                ))}
              </div>
              <div style={responsiveStyles.reviewText}>
                <strong style={responsiveStyles.reviewRating}>4.9/5</strong> from 247 Google Reviews
              </div>
              <div style={responsiveStyles.reviewText}>
                <strong style={responsiveStyles.reviewRating}>4.9/5</strong> click the button below to read our reviews
              </div>
              <div style={responsiveStyles.reviewsCTAContainer}>
                <div 
                  style={responsiveStyles.googleBadge(googleBadgeActive)}
                  onClick={handleGoogleReviewsClick}
                  onMouseEnter={() => setGoogleBadgeActive(true)}
                  onMouseLeave={() => setGoogleBadgeActive(false)}
                  onTouchStart={() => handleTouchStart(setGoogleBadgeActive, true)}
                  onTouchEnd={() => handleTouchEnd(setGoogleBadgeActive, false)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span style={responsiveStyles.googleText}>Google's Choice</span>
                </div>
                {/* NEW: Read all Google reviews CTA button */}
                <div 
                  style={responsiveStyles.googleReviewsCTA(googleReviewsActive)}
                  onClick={handleGoogleReviewsClick}
                  onMouseEnter={() => setGoogleReviewsActive(true)}
                  onMouseLeave={() => setGoogleReviewsActive(false)}
                  onTouchStart={() => handleTouchStart(setGoogleReviewsActive, true)}
                  onTouchEnd={() => handleTouchEnd(setGoogleReviewsActive, false)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99478 18.5291 5.47087C20.0052 6.94696 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={responsiveStyles.googleReviewsText}>Read All Google Reviews</span>
                </div>
              </div>
            </div>
            
            <div style={baseStyles.bostonSection}>
              <div style={baseStyles.bostonBadge}>
                <div style={baseStyles.bostonIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={baseStyles.bostonText}>Also serving Boston as OTON Cleaning Services</span>
              </div>
            </div>
          </div>
          
          <div style={responsiveStyles.rightColumn}>
            <div style={responsiveStyles.bookingCard}>
              <div style={baseStyles.cardHeader}>
                <h3 style={responsiveStyles.formTitle}>Schedule Your Luxury Experience</h3>
                <p style={baseStyles.formSubtitle}>Complimentary consultation & quote</p>
              </div>
              
              <form onSubmit={handleSubmit} style={baseStyles.form}>
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={baseStyles.formInput}
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={formspreeState.errors}
                  />
                </div>
                
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    style={baseStyles.formInput}
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={formspreeState.errors}
                  />
                </div>
                
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={baseStyles.formInput}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={formspreeState.errors}
                  />
                </div>
                
                <div style={responsiveStyles.formRow}>
                  <div style={{...baseStyles.formGroup, flex: 1}}>
                    <label style={baseStyles.inputLabel}>Zip Code *</label>
                    <input
                      type="text"
                      name="zip"
                      placeholder="77001"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                      style={baseStyles.formInput}
                    />
                    <ValidationError 
                      prefix="Zip" 
                      field="zip"
                      errors={formspreeState.errors}
                    />
                  </div>
                  
                  <div style={{...baseStyles.formGroup, flex: 1}}>
                    <label style={baseStyles.inputLabel}>Service Type</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                      style={baseStyles.formSelect}
                    >
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="move-in-out">Move In/Out</option>
                      <option value="regular-maintenance">Regular Maintenance</option>
                      <option value="post-construction">Post Construction</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  style={responsiveStyles.submitButton(submitButtonActive)}
                  disabled={formspreeState.submitting}
                  onMouseEnter={() => setSubmitButtonActive(true)}
                  onMouseLeave={() => setSubmitButtonActive(false)}
                  onTouchStart={() => handleTouchStart(setSubmitButtonActive, true)}
                  onTouchEnd={() => handleTouchEnd(setSubmitButtonActive, false)}
                >
                  <span style={baseStyles.buttonText}>
                    {formspreeState.submitting ? 'Sending...' : 'Request Priority Service'}
                  </span>
                  <span style={baseStyles.buttonArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {formspreeState.succeeded && (
                  <p style={{...baseStyles.formNote, color: '#10B981', fontWeight: 900}}>
                    ✓ Thank you! We'll contact you within 15 minutes.
                  </p>
                )}
                
                <p style={baseStyles.formNote}>
                  Your request receives priority attention. We'll contact you within 30 minutes.
                </p>
                
                <div style={baseStyles.securityBadge}>
                  <div style={baseStyles.securityIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={baseStyles.securityText}>Secure & Confidential Booking</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Testimonial Card Component with embedded video player
const VideoTestimonialCard = ({ 
  video, 
  index, 
  activeVideo, 
  setActiveVideo,
  playingVideo,
  setPlayingVideo 
}: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (playingVideo === video.id) {
      // If this video is already playing, pause it
      if (videoRef.current) {
        videoRef.current.pause();
        setPlayingVideo(null);
      }
    } else {
      // Stop any currently playing video
      setPlayingVideo(video.id);
      // Play this video after a short delay to ensure ref is available
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 100);
    }
  };

  const handleVideoEnded = () => {
    setPlayingVideo(null);
  };

  // Touch event handlers
  const handleTouchStart = () => {
    setActiveVideo(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setActiveVideo(null), 150);
  };

  return (
    <div 
      style={{
        backgroundColor: activeVideo === index ? '#F9FAFB' : '#FFFFFF',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: activeVideo === index 
          ? '0 30px 60px rgba(0, 0, 0, 0.15)' 
          : '0 20px 40px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 30, 80, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: activeVideo === index ? 'translateY(-10px)' : 'translateY(0)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setActiveVideo(index)}
      onMouseLeave={() => setActiveVideo(null)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handlePlayVideo}
    >
      {/* Video Thumbnail or Player */}
      <div style={{
        position: 'relative',
        height: '250px',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}>
        {playingVideo === video.id ? (
          // Video Player
          <video
            ref={videoRef}
            src={video.videoUrl}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
            onEnded={handleVideoEnded}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          // Video Thumbnail with Play Button
          <>
            <img 
              src={video.videoThumbnail} 
              alt={`Video testimonial from ${video.name}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: activeVideo === index ? 'brightness(0.7)' : 'brightness(1)',
                transition: 'filter 0.3s ease',
              }}
            />
            
            {/* Always Visible Play Button Indicator */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: '#FFD700',
              color: '#001E50',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: '900',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              zIndex: 2,
            }}>
              ▶
            </div>
            
            {/* Hover Overlay with Big Play Button */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 30, 80, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: activeVideo === index ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: activeVideo === index ? 'scale(1)' : 'scale(0.8)',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{
                  color: '#001E50',
                  fontSize: '2rem',
                  marginLeft: '8px',
                  fontWeight: '900',
                }}>
                  ▶
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Video Content */}
      <div style={{
        padding: '32px 24px',
        textAlign: 'left',
      }}>
        <h4 style={{
          fontSize: '1.5rem',
          fontWeight: '900',
          color: '#001E50',
          margin: '0 0 8px 0',
          fontFamily: "'Playfair Display', serif",
        }}>
          {video.name}
        </h4>
        <p style={{
          fontSize: '1rem',
          color: '#6B7280',
          fontWeight: '900',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '12px',
        }}>
          {video.location}
        </p>
        <div style={{
          fontSize: '0.875rem',
          color: '#FFD700',
          fontWeight: '900',
          fontFamily: "'Playfair Display', serif",
          backgroundColor: 'rgba(255, 215, 0, 0.1)',
          padding: '4px 12px',
          borderRadius: '20px',
          display: 'inline-block',
          marginBottom: '16px',
        }}>
          {video.role}
        </div>
        <p style={{
          fontSize: '1rem',
          color: '#4B5563',
          lineHeight: '1.6',
          margin: 0,
          fontWeight: '900',
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
        }}>
          "{video.content}"
        </p>
      </div>
    </div>
  );
};

// Stats Counter Component
const StatsCounter = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [homesCleaned, setHomesCleaned] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  
  useEffect(() => {
    // Animated counters
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
    
    // Start counters when component mounts
    const timer = setTimeout(animateCounters, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [activeStat, setActiveStat] = useState<number | null>(null);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      maxWidth: '800px',
      margin: '30px auto',
    }}>
      {/* Years of Experience */}
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 0 ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(0)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(0)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#001E50',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {yearsExperience}+
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 900,
          color: '#666666',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Playfair Display', serif",
        }}>
          Years of Excellence
        </div>
      </div>
      
      {/* Homes Cleaned */}
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 1 ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(1)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(1)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#001E50',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {homesCleaned.toLocaleString()}+
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 900,
          color: '#666666',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Playfair Display', serif",
        }}>
          Homes Transformed
        </div>
      </div>
      
      {/* Satisfaction Rate */}
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 2 ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(2)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(2)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#001E50',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {satisfactionRate}%
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: 900,
          color: '#666666',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Playfair Display', serif",
        }}>
          Satisfaction Rate
        </div>
      </div>
    </div>
  );
};

// FAQ Section Component
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  containerStyle?: React.CSSProperties;
  faqItemStyle?: React.CSSProperties;
  showToggleIcon?: boolean;
  initiallyOpenIndex?: number | null;
}

function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our premium cleaning services. If you don\'t see your question here, contact our concierge team for personalized assistance.',
  faqs = [
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
  ],
  accentColor = '#FFD700',
  textColor = '#001E50',
  backgroundColor = '#FFFFFF',
  containerStyle = {},
  faqItemStyle = {},
  showToggleIcon = true,
  initiallyOpenIndex = null
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initiallyOpenIndex);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const baseStyles = {
    faqSection: {
      padding: isMobile ? '60px 20px' : '80px 40px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      position: 'relative' as const,
      backgroundColor: backgroundColor,
      ...containerStyle
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative' as const,
      zIndex: 2,
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '60px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.1)`,
      padding: '10px 20px',
      borderRadius: '50px',
      border: `1px solid ${accentColor}33`,
      marginBottom: '20px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    badgeIcon: {
      fontSize: '18px',
      transition: 'all 0.3s ease',
    },
    badgeText: {
      fontSize: '14px',
      fontWeight: 600,
      color: textColor,
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
    },
    title: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 900,
      color: textColor,
      lineHeight: 1.2,
      fontFamily: "'Playfair Display', serif",
      margin: '0 0 20px 0',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '0 auto 30px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    faqContainer: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    faqItem: (isOpen: boolean) => ({
      background: '#FFFFFF',
      borderRadius: '16px',
      marginBottom: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 30, 80, 0.08)',
      border: `1px solid ${textColor}1A`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      ...faqItemStyle
    }),
    questionButton: (isOpen: boolean) => ({
      width: '100%',
      background: isOpen ? `${accentColor}0D` : '#FFFFFF',
      border: 'none',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      textAlign: 'left' as const,
      transition: 'all 0.3s ease',
    }),
    questionContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flex: 1,
    },
    questionNumber: {
      width: '32px',
      height: '32px',
      background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}CC 100%)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 700,
      color: textColor,
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    questionText: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: 700,
      color: textColor,
      fontFamily: "'Playfair Display', serif",
      margin: 0,
      lineHeight: 1.4,
      transition: 'all 0.3s ease',
    },
    toggleIcon: (isOpen: boolean) => ({
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease',
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
      flexShrink: 0,
      marginLeft: '10px',
    }),
    answerContainer: (isOpen: boolean) => ({
      maxHeight: isOpen ? '500px' : '0',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isOpen ? `${textColor}05` : 'transparent',
    }),
    answerContent: (isOpen: boolean) => ({
      padding: isOpen ? '0 20px 20px 68px' : '0 20px',
      opacity: isOpen ? 1 : 0,
      transition: 'opacity 0.3s ease 0.2s',
    }),
    answerWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    answerIcon: {
      width: '20px',
      height: '20px',
      background: `${textColor}1A`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 700,
      color: textColor,
      flexShrink: 0,
      marginTop: '3px',
      transition: 'all 0.3s ease',
    },
    answerText: {
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      margin: 0,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    ctaContainer: {
      textAlign: 'center',
      marginTop: '60px',
      padding: isMobile ? '30px 20px' : '40px 20px',
      background: `linear-gradient(135deg, ${textColor}0D 0%, ${accentColor}0D 100%)`,
      borderRadius: '20px',
      border: `1px solid ${accentColor}33`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    ctaTitle: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      fontWeight: 800,
      color: textColor,
      fontFamily: "'Playfair Display', serif",
      marginBottom: '20px',
      transition: 'all 0.3s ease',
    },
    ctaDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      maxWidth: '600px',
      margin: '0 auto 24px',
      transition: 'all 0.3s ease',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    primaryButton: {
      background: `linear-gradient(135deg, ${textColor} 0%, ${textColor}CC 100%)`,
      color: '#FFFFFF',
      border: 'none',
      padding: '16px 24px',
      fontSize: '15px',
      fontWeight: 700,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: `0 8px 25px ${textColor}4D`,
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '0.5px',
      width: isMobile ? '100%' : 'auto',
      maxWidth: '300px',
    },
    secondaryButton: {
      background: 'transparent',
      color: textColor,
      border: `2px solid ${textColor}4D`,
      padding: '16px 24px',
      fontSize: '15px',
      fontWeight: 700,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '0.5px',
      width: isMobile ? '100%' : 'auto',
      maxWidth: '300px',
    },
  };

  return (
    <section style={baseStyles.faqSection}>
      <div style={baseStyles.container}>
        {/* Section Header */}
        <div style={baseStyles.header}>
          <div style={baseStyles.badge}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.2)`;
              e.currentTarget.style.boxShadow = `0 8px 20px ${accentColor}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.1)`;
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={baseStyles.badgeIcon}>❓</div>
            <span style={baseStyles.badgeText}>
              Got Questions?
            </span>
          </div>
          
          <h2 style={baseStyles.title}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            {title.split(' ').map((word, index, array) => 
              index === array.length - 1 ? (
                <span key={index} style={{ color: accentColor, transition: 'all 0.3s ease' }}>
                  {word}
                </span>
              ) : (
                word + ' '
              )
            )}
          </h2>
          
          <p style={baseStyles.subtitle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={baseStyles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={baseStyles.faqItem(openIndex === index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 30, 80, 0.15)';
                e.currentTarget.style.borderColor = `${accentColor}4D`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 30, 80, 0.08)';
                e.currentTarget.style.borderColor = `${textColor}1A`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                style={baseStyles.questionButton(openIndex === index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${accentColor}14`;
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = openIndex === index ? `${accentColor}0D` : '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={baseStyles.questionContent}>
                  <div style={baseStyles.questionNumber}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                    Q{index + 1}
                  </div>
                  <h3 style={baseStyles.questionText}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = textColor;
                    }}>
                    {faq.question}
                  </h3>
                </div>
                
                {showToggleIcon && (
                  <div style={baseStyles.toggleIcon(openIndex === index)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1.2)' : 'rotate(0deg) scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(1)';
                    }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
              
              {/* Answer Content */}
              <div style={baseStyles.answerContainer(openIndex === index)}>
                <div style={baseStyles.answerContent(openIndex === index)}>
                  <div style={baseStyles.answerWrapper}>
                    <div style={baseStyles.answerIcon}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.background = `${textColor}33`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = `${textColor}1A`;
                      }}>
                      A
                    </div>
                    <p style={baseStyles.answerText}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = textColor;
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
        <div style={baseStyles.ctaContainer}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.background = `linear-gradient(135deg, ${textColor}14 0%, ${accentColor}14 100%)`;
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 30, 80, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = `linear-gradient(135deg, ${textColor}0D 0%, ${accentColor}0D 100%)`;
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <h3 style={baseStyles.ctaTitle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accentColor;
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            Still Have Questions?
          </h3>
          <p style={baseStyles.ctaDescription}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            Our premium concierge team is available 24/7 to answer any questions and help you schedule your cleaning service.
          </p>
          <div style={baseStyles.buttonContainer}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={baseStyles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = `0 12px 30px ${textColor}66`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${textColor}CC 0%, ${textColor} 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${textColor}4D`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${textColor} 0%, ${textColor}CC 100%)`;
              }}
            >
              Contact Our Concierge
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+12815551234'}
              style={baseStyles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${textColor}0D`;
                e.currentTarget.style.borderColor = `${textColor}80`;
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.color = accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = `${textColor}4D`;
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.color = textColor;
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

const BodySection = () => {
  // Active states for all devices
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<number | null>(null);
  const [activeReview, setActiveReview] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [activeScheduleCard, setActiveScheduleCard] = useState<number | null>(null);
  const [activeScheduleButton, setActiveScheduleButton] = useState<string | null>(null);
  const [activeFeatureCard, setActiveFeatureCard] = useState<number | null>(null);
  const [activeMoreVideos, setActiveMoreVideos] = useState(false);
  const [activeConsultation, setActiveConsultation] = useState(false);
  const [activeBeforeAfterButton, setActiveBeforeAfterButton] = useState(false);

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

  // Touch event handlers for mobile interactions
  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  // Transformations Data - REDUCED TO 2 ITEMS
  const transformations = [
    {
      id: 1,
      title: "#1 Kitchen Transformation",
      beforeImage: "https://t3.ftcdn.net/jpg/00/39/40/52/360_F_39405233_UL1bFX3UOo1mjGxq2WtPCXvhl6Qm9OrU.jpg",
      afterImage: "https://t3.ftcdn.net/jpg/06/36/14/94/240_F_636149478_CBpitAd8ZEClAhCKw0ui27gHSQhZ6h2e.jpg",
      description: "From greasy, cluttered kitchen to spotless culinary workspace"
    },
    {
      id: 2,
      title: "#2 Bathroom Transformation",
      beforeImage: "https://t4.ftcdn.net/jpg/03/03/81/55/240_F_303815576_vBDDsTnvxS9o71lHYMxx61LZhC3ugOOS.jpg",
      afterImage: "https://t3.ftcdn.net/jpg/00/73/18/64/240_F_73186485_K4zhlw5QhtZ69XpqDiGOL6M1PjFFTGud.jpg",
      description: "Moldy, stained bathroom to sparkling clean sanctuary"
    }
  ];

  // Video Testimonials Data with real video URLs
  const videoTestimonials = [
    {
      id: 1,
      name: "Jennifer K.",
      location: "River Oaks Estate",
      role: "Verified Client",
      content: "OTON transformed our 12,000 sq ft home. Their attention to detail is simply unparalleled. The team is professional, discreet, and perfectionists.",
      videoThumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Robert & Sarah M.",
      location: "Memorial Area Mansion",
      role: "Verified Client",
      content: "We've tried every luxury cleaning service in Houston. OTON is the only one that truly understands what 'white glove' service means.",
      videoThumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      location: "West University Place",
      role: "Verified Client",
      content: "As a physician, I appreciate their medical-grade sanitation standards. My home has never been cleaner or felt more pristine.",
      videoThumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "The Williams Family",
      location: "Highland Village Residence",
      role: "Verified Client",
      content: "With three young children and pets, we needed a service that could handle it all. OTON exceeds our expectations every single time.",
      videoThumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Elizabeth Van D.",
      location: "Tanglewood Luxury Condo",
      role: "Verified Client",
      content: "Their concierge approach is what sets them apart. They coordinate with my household staff and always accommodate last-minute requests.",
      videoThumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "/videos/jaco7.mp4"
    },
    {
      id: 6,
      name: "David & Maria Rodriguez",
      location: "Galleria Penthouse",
      role: "Verified Client",
      content: "The attention to detail is extraordinary. They even cleaned areas we didn't know needed cleaning. Truly a premium service.",
      videoThumbnail: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "River Oaks",
      service: "Deep Cleaning",
      rating: 5,
      content: "OTON transformed our home! The attention to detail is incredible. They noticed things we didn't even know needed cleaning.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvPKUQMSN0wjDX6D4pHPvmFforYqw_RKraQ&s"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Memorial",
      service: "Regular Maintenance",
      rating: 5,
      content: "As a busy professional, I need reliability. OTON shows up on time, every time, and does exceptional work. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Jessica Williams",
      location: "West University",
      service: "Move-Out Cleaning",
      rating: 5,
      content: "Our move-out cleaning was flawless. The landlord returned our full deposit and complimented the cleaning. Thank you OTON!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Robert Garcia",
      location: "Highland Village",
      service: "Post-Construction",
      rating: 5,
      content: "I've tried many cleaning services in Houston. None compare to OTON. Their team is professional, thorough, and trustworthy.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Features Data - UPDATED: Numbers removed from images and placed beside theme
  const features = [
    {
      number: '01',
      title: 'Elite Team of Cleaning Connoisseurs',
      description: 'Our team isn\'t just trained—they\'re artisans of cleanliness. Each member undergoes 200+ hours of specialized training in luxury home protocols, eco-conscious cleaning methodologies, and discretion etiquette for high-profile residences. They don\'t just clean your home; they understand it, treating each space with the reverence of a gallery curator handling priceless art.',
      listItems: [
        '200+ Hours Specialized Training',
        'Background Checked & Insured',
        'Continuous Performance Excellence'
      ],
      image: 'https://t3.ftcdn.net/jpg/02/17/25/42/360_F_217254228_LXpIn9UanEygxR4j3T6LM5ASzKI8gSKr.jpg',
      imageAlt: 'Professional cleaning team working meticulously'
    },
    {
      number: '02',
      title: 'The Art of Impeccable Detail',
      description: 'Where others see cleaning, we see storytelling. Our 247-point inspection checklist ensures no detail escapes our notice—from the precise alignment of picture frames to the microscopic sanitation of high-touch surfaces. We employ proprietary cleaning solutions that not only sanitize but preserve and enhance your home\'s natural beauty, leaving behind nothing but the subtle scent of perfection.',
      listItems: [
        '247-Point Quality Checklist',
        'Proprietary Luxury-Grade Solutions',
        'Microscopic Attention to Detail'
      ],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Detailed cleaning work with attention to every corner'
    },
    {
      number: '03',
      title: 'Happiness, Guaranteed & Insured',
      description: 'Our promise isn\'t just a tagline—it\'s our company\'s DNA. Every BraBos service comes with our unprecedented Triple-Guarantee: (1) 100% Satisfaction or we\'ll reclean any area at no cost, (2) 48-Hour Happiness Window where we\'ll address any concerns immediately, and (3) $1 Million Liability Insurance for complete peace of mind. When you choose BraBos, you\'re not hiring a cleaner—you\'re gaining a partner in perfection.',
      listItems: [
        'Triple-Guarantee Protection',
        '48-Hour Happiness Window',
        '$1M Comprehensive Insurance'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Satisfied customer reviewing cleaning service'
    },
    {
      number: '04',
      title: 'Bespoke Service Tailored to You',
      description: 'Your home is as unique as your fingerprint, and your cleaning service should be too. Our concierge approach means we design every aspect of your service around your lifestyle, schedule, and specific needs. From selecting eco-friendly products for your children\'s rooms to coordinating with your household staff—we handle every detail so you can focus on what matters most: enjoying your perfectly maintained sanctuary.',
      listItems: [
        'Personalized Concierge Planning',
        'Flexible Scheduling (24/7 Access)',
        'Eco & Family-Safe Customization'
      ],
      image: 'https://www.taskbird.com/_next/image?url=https%3A%2F%2Fstark-shiny-house.media.strapiapp.com%2FAirbnb_cleaner_ceceaee334.jpg&w=3840&q=75',
      imageAlt: 'Customized cleaning service consultation'
    }
  ];

  // Stats Data - SIMPLIFIED FOR HORIZONTAL LAYOUT
  const stats = [
    {
      number: '15+',
      title: 'Years',
    },
    {
      number: '5,000+',
      title: 'Homes',
    },
    {
      number: '99.8%',
      title: 'Satisfaction',
    },
    {
      number: '100%',
      title: 'Insured',
    }
  ];

  // Cleaning Schedule Plans
  const cleaningPlans = [
    {
      id: 1,
      badge: "WEEKLY",
      title: "Weekly Cleaning",
      frequency: "Every Week",
      description: "Perfect for busy households",
      details: "Perfect for busy parents, active professionals, or anyone who wishes for their home to be in great shape at all times. During your weekly home cleaning, our team makes sure every surface gets the attention it deserves and your living space is left fresh and bright.",
      features: [
        "Consistent freshness & cleanliness",
        "Perfect for high-traffic homes",
        "Allergen reduction & dust control",
        "Priority scheduling"
      ],
      buttonText: "Book Weekly Service",
      color: "#001E50"
    },
    {
      id: 2,
      badge: "BI-WEEKLY",
      title: "Bi-Weekly Cleaning",
      frequency: "Every Two Weeks",
      description: "Ideal balance of value & freshness",
      details: "Looking to strike a balance between constant attention and practicality? Our bi-weekly cleaning service could be just what you need. We visit every two weeks to handle tasks like vacuuming, dusting, and mopping, all to keep your residence sparkling.",
      features: [
        "Perfect balance of freshness & value",
        "Ideal for moderate-use homes",
        "Deep clean maintenance",
        "Flexible scheduling options"
      ],
      buttonText: "Book Bi-Weekly Service",
      color: "#FFD700"
    },
    {
      id: 3,
      badge: "MONTHLY",
      title: "Monthly Cleaning",
      frequency: "Once a Month",
      description: "Thorough maintenance cleaning",
      details: "Our monthly house cleaning is great for keeping things in check without a major commitment. Whether you simply prefer to tackle daily upkeep yourself or don't like spending that much time at home, we'll ensure cleanliness with our monthly visits.",
      features: [
        "Thorough deep cleaning each visit",
        "Perfect for low-occupancy homes",
        "Budget-friendly maintenance",
        "Schedule flexibility"
      ],
      buttonText: "Book Monthly Service",
      color: "#001E50"
    }
  ];

  // Base styles with ULTRA BOLD Playfair Display typography
  const baseBodyStyles: any = {
    bodyContainer: {
      backgroundColor: '#FFFFFF',
      padding: '120px 40px',
      fontFamily: "'Playfair Display', serif",
    },
    
    differenceSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px auto',
      textAlign: 'center',
    },
    
    differenceBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: 'rgba(255, 215, 0, 0.1)',
      padding: '16px 32px',
      borderRadius: '50px',
      marginBottom: '40px',
      border: '2px solid rgba(255, 215, 0, 0.3)',
      backdropFilter: 'blur(10px)',
    },
    
    diamondIcon: {
      color: '#FFD700',
      fontWeight: '900',
      fontSize: '24px',
    },
    
    differenceBadgeText: {
      fontSize: '18px',
      fontWeight: '900',
      color: '#001E50',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    
    differenceTitle: {
      fontSize: '4.5rem',
      fontWeight: '900',
      color: '#001E50',
      margin: '0 0 16px 0',
      lineHeight: '1',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '-1px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    
    navySubtitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#001E50',
      margin: '0 0 8px 0',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '-0.5px',
    },
    
    goldSubtitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#FFD700',
      margin: '0 0 48px 0',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      letterSpacing: '-0.5px',
    },
    
    // FIXED: Use separate margin properties instead of shorthand
    differenceDescription: {
      fontSize: '1.5rem',
      color: '#4B5563',
      lineHeight: '1.7',
      maxWidth: '900px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: '80px',
      marginLeft: 'auto',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    // UPDATED: Feature card styles without buttons and with number beside theme
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '64px',
      maxWidth: '1400px',
      margin: '0 auto 120px auto',
    },
    
    featureCard: (active: boolean) => ({
      backgroundColor: active ? '#F9FAFB' : '#FFFFFF',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 30px 60px rgba(0, 0, 0, 0.15)' 
        : '0 20px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 30, 80, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
    }),
    
    featureImageContainer: {
      position: 'relative',
      height: '300px',
      overflow: 'hidden',
    },
    
    featureImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    
    // UPDATED: Number badge placed in content instead of on image
    featureNumberBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001E50',
      color: '#FFFFFF',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      fontSize: '1.5rem',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      marginRight: '20px',
      flexShrink: 0,
    },
    
    featureContent: {
      padding: '48px 40px',
    },
    
    // UPDATED: Title container with number beside it
    featureTitleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    
    featureTitle: {
      fontSize: '2.25rem',
      fontWeight: '900',
      color: '#001E50',
      margin: 0,
      lineHeight: '1.2',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '-0.25px',
    },
    
    featureDescription: {
      fontSize: '1.25rem',
      color: '#4B5563',
      lineHeight: '1.8',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '32px',
      marginLeft: 0,
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '40px',
      marginLeft: 0,
    },
    
    featureListItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    
    checkIcon: {
      color: '#FFD700',
      fontWeight: '900',
      fontSize: '24px',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    featureListItemText: {
      fontSize: '1.125rem',
      color: '#374151',
      lineHeight: '1.6',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },

    transformationsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px auto',
      textAlign: 'center',
    },
    
    transformationsHeader: {
      marginBottom: '60px',
    },
    
    transformationsTitleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    
    navyTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      lineHeight: '1.1',
    },
    
    goldTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#FFD700',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      lineHeight: '1.1',
    },
    
    transformationsSubtitle: {
      fontSize: '1.5rem',
      color: '#4B5563',
      lineHeight: '1.6',
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    beforeAfterContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    
    transformationCard: (active: boolean) => ({
      backgroundColor: active ? '#F9FAFB' : '#FFFFFF',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 30px 60px rgba(0, 0, 0, 0.15)' 
        : '0 20px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 30, 80, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-10px)' : 'translateY(0)',
    }),
    
    transformationTitle: {
      fontSize: '2.25rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '30px',
      marginLeft: 0,
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
      padding: '40px 40px 0 40px',
    },
    
    beforeAfterGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '30px',
      padding: '0 40px 40px 40px',
    },
    
    imageContainer: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      height: '400px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    
    imageLabel: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: '#001E50',
      color: '#FFFFFF',
      padding: '8px 20px',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      zIndex: 2,
    },
    
    beforeLabel: {
      backgroundColor: '#EF4444',
    },
    
    afterLabel: {
      backgroundColor: '#10B981',
    },
    
    transformationImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    
    transformationDescription: {
      fontSize: '1.25rem',
      color: '#4B5563',
      lineHeight: '1.6',
      marginTop: '30px',
      marginRight: '40px',
      marginBottom: '40px',
      marginLeft: '40px',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      textAlign: 'center',
      borderTop: '2px solid #E5E7EB',
      paddingTop: '30px',
    },

    videoTestimonialsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px auto',
      textAlign: 'center',
    },
    
    videoTestimonialsHeader: {
      marginBottom: '60px',
    },
    
    videoTitleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    
    videoNavyTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      lineHeight: '1.1',
    },
    
    videoGoldTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#FFD700',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      lineHeight: '1.1',
    },
    
    videoSubtitle: {
      fontSize: '1.5rem',
      color: '#4B5563',
      lineHeight: '1.6',
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    videoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto 80px auto',
    },
    
    moreVideosButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? '#001E50' : 'transparent',
      color: active ? '#FFFFFF' : '#001E50',
      border: '2px solid #001E50',
      padding: '20px 40px',
      borderRadius: '50px',
      fontSize: '1.125rem',
      fontWeight: '900',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Playfair Display', serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active ? '0 20px 40px rgba(0, 0, 0, 0.15)' : 'none',
    }),
    
    reviewsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px auto',
      textAlign: 'center',
    },
    
    reviewsHeader: {
      marginBottom: '60px',
    },
    
    reviewsTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      lineHeight: '1.1',
    },
    
    reviewsSubtitle: {
      fontSize: '1.5rem',
      color: '#4B5563',
      lineHeight: '1.6',
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    
    reviewCard: (active: boolean) => ({
      backgroundColor: active ? '#F9FAFB' : '#FFFFFF',
      borderRadius: '24px',
      padding: '40px 32px',
      textAlign: 'left',
      border: active ? '2px solid #FFD700' : '2px solid rgba(0, 30, 80, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-10px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 30px 60px rgba(0, 0, 0, 0.15)' 
        : '0 20px 40px rgba(0, 0, 0, 0.08)',
    }),
    
    reviewHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '24px',
    },
    
    reviewAvatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #FFD700',
    },
    
    reviewerInfo: {
      flex: 1,
    },
    
    reviewerName: {
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
    },
    
    reviewerDetails: {
      fontSize: '1rem',
      color: '#6B7280',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '8px',
    },
    
    starsContainer: {
      display: 'flex',
      gap: '4px',
    },
    
    starIcon: {
      color: '#FFD700',
      fontSize: '1.25rem',
      fontWeight: '900',
    },
    
    reviewContent: {
      fontSize: '1.125rem',
      color: '#4B5563',
      lineHeight: '1.7',
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
    },
    
    // New Flexible Solutions Section Styles
    flexibleSolutionsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px auto',
      textAlign: 'center',
    },
    
    flexibleSolutionsHeader: {
      marginBottom: '60px',
    },
    
    flexibleSolutionsBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: 'rgba(255, 215, 0, 0.1)',
      padding: '16px 32px',
      borderRadius: '50px',
      marginBottom: '30px',
      border: '2px solid rgba(255, 215, 0, 0.3)',
      backdropFilter: 'blur(10px)',
    },
    
    flexibleSolutionsBadgeText: {
      fontSize: '18px',
      fontWeight: '900',
      color: '#001E50',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    
    flexibleSolutionsTitle: {
      fontSize: '4.5rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      lineHeight: '1',
      fontFamily: "'Playfair Display', serif",
      letterSpacing: '-1px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    
    flexibleSolutionsSubtitle: {
      fontSize: '2.5rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '16px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      lineHeight: '1.2',
    },
    
    // FIXED: Use separate margin properties
    flexibleSolutionsDescription: {
      fontSize: '1.5rem',
      color: '#4B5563',
      lineHeight: '1.7',
      maxWidth: '900px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: '60px',
      marginLeft: 'auto',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    cleaningPlansGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      maxWidth: '1400px',
      margin: '0 auto 80px auto',
    },
    
    cleaningPlanCard: (active: boolean, color: string) => ({
      backgroundColor: active ? '#F9FAFB' : '#FFFFFF',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 30px 60px rgba(0, 0, 0, 0.15)' 
        : '0 20px 40px rgba(0, 0, 0, 0.08)',
      border: active ? `3px solid ${color}` : '2px solid rgba(0, 30, 80, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px)' : 'translateY(0)',
      display: 'flex',
      flexDirection: 'column',
    }),
    
    planHeader: (color: string) => ({
      backgroundColor: color,
      padding: '40px 32px',
      textAlign: 'center',
      color: color === '#FFD700' ? '#001E50' : '#FFFFFF',
    }),
    
    planBadge: {
      display: 'inline-block',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      padding: '8px 20px',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '900',
      marginBottom: '20px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontFamily: "'Playfair Display', serif",
    },
    
    planTitle: {
      fontSize: '2.5rem',
      fontWeight: '900',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '12px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      lineHeight: '1.1',
    },
    
    planFrequency: {
      fontSize: '1.5rem',
      fontWeight: '900',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      opacity: 0.9,
    },
    
    planDescription: {
      fontSize: '1.25rem',
      fontWeight: '900',
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
    },
    
    planContent: {
      padding: '40px 32px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    
    planDetails: {
      fontSize: '1.125rem',
      color: '#4B5563',
      lineHeight: '1.7',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '32px',
      marginLeft: 0,
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      flex: 1,
    },
    
    planFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '40px',
    },
    
    planFeature: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
    },
    
    planFeatureIcon: {
      color: '#FFD700',
      fontWeight: '900',
      fontSize: '20px',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    planFeatureText: {
      fontSize: '1.125rem',
      color: '#374151',
      lineHeight: '1.5',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
    },
    
    // UPDATED: Plan button now navigates to contact page
    planButton: (active: boolean, color: string) => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      backgroundColor: active ? color : 'transparent',
      color: active ? (color === '#FFD700' ? '#001E50' : '#FFFFFF') : color,
      border: `3px solid ${color}`,
      padding: '20px 32px',
      borderRadius: '50px',
      fontSize: '1.125rem',
      fontWeight: '900',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Playfair Display', serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active ? '0 15px 30px rgba(0, 0, 0, 0.15)' : 'none',
    }),
    
    consultationSection: {
      backgroundColor: 'rgba(0, 30, 80, 0.03)',
      borderRadius: '24px',
      padding: '60px 40px',
      textAlign: 'center',
      border: '2px solid rgba(255, 215, 0, 0.2)',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    
    consultationTitle: {
      fontSize: '3rem',
      fontWeight: '900',
      color: '#001E50',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '24px',
      marginLeft: 0,
      fontFamily: "'Playfair Display', serif",
      lineHeight: '1.2',
    },
    
    // FIXED: Use separate margin properties
    consultationDescription: {
      fontSize: '1.5rem',
      color: '#4B5563',
      lineHeight: '1.7',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: '40px',
      marginLeft: 'auto',
      fontWeight: '900',
      fontFamily: "'Playfair Display', serif",
      maxWidth: '800px',
    },
    
    // UPDATED: Consultation button now navigates to contact page
    consultationButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? '#FFD700' : '#001E50',
      color: active ? '#001E50' : '#FFFFFF',
      border: 'none',
      padding: '20px 48px',
      borderRadius: '50px',
      fontSize: '1.25rem',
      fontWeight: '900',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Playfair Display', serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 20px 40px rgba(255, 215, 0, 0.4)' 
        : '0 15px 30px rgba(0, 30, 80, 0.3)',
    }),
    
    // NEW: Before & After CTA Button Style
    beforeAfterCTA: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? '#FFD700' : '#001E50',
      color: active ? '#001E50' : '#FFFFFF',
      border: 'none',
      padding: '20px 40px',
      borderRadius: '50px',
      fontSize: '1.125rem',
      fontWeight: '900',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Playfair Display', serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 15px 30px rgba(255, 215, 0, 0.4)' 
        : '0 10px 25px rgba(0, 30, 80, 0.3)',
      marginTop: '40px',
    }),
  };

  // Get responsive styles
  const getResponsiveStyles = () => {
    const responsive = { ...baseBodyStyles };
    
    if (isTablet) {
      responsive.bodyContainer = {
        ...responsive.bodyContainer,
        padding: '80px 32px',
      };
      responsive.differenceTitle = {
        ...responsive.differenceTitle,
        fontSize: '4rem',
      };
      responsive.navySubtitle = {
        ...responsive.navySubtitle,
        fontSize: '3rem',
      };
      responsive.goldSubtitle = {
        ...responsive.goldSubtitle,
        fontSize: '3rem',
      };
      responsive.flexibleSolutionsTitle = {
        ...responsive.flexibleSolutionsTitle,
        fontSize: '4rem',
      };
      responsive.flexibleSolutionsSubtitle = {
        ...responsive.flexibleSolutionsSubtitle,
        fontSize: '2.5rem',
      };
      responsive.featuresGrid = {
        ...responsive.featuresGrid,
        gridTemplateColumns: '1fr',
        gap: '48px',
      };
      responsive.cleaningPlansGrid = {
        ...responsive.cleaningPlansGrid,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
      };
      responsive.navyTitle = {
        ...responsive.navyTitle,
        fontSize: '3rem',
      };
      responsive.goldTitle = {
        ...responsive.goldTitle,
        fontSize: '3rem',
      };
      responsive.videoNavyTitle = {
        ...responsive.videoNavyTitle,
        fontSize: '3rem',
      };
      responsive.videoGoldTitle = {
        ...responsive.videoGoldTitle,
        fontSize: '3rem',
      };
      responsive.transformationsTitle = {
        ...responsive.transformationsTitle,
        fontSize: '3rem',
      };
      responsive.reviewsTitle = {
        ...responsive.reviewsTitle,
        fontSize: '3rem',
      };
      responsive.consultationTitle = {
        ...responsive.consultationTitle,
        fontSize: '2.5rem',
      };
      responsive.beforeAfterGrid = {
        ...responsive.beforeAfterGrid,
        gridTemplateColumns: '1fr',
        gap: '24px',
      };
      responsive.imageContainer = {
        ...responsive.imageContainer,
        height: '300px',
      };
      responsive.videoGrid = {
        ...responsive.videoGrid,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
      };
      responsive.reviewsGrid = {
        ...responsive.reviewsGrid,
        gridTemplateColumns: '1fr',
        gap: '24px',
      };
      responsive.featureImageContainer = {
        ...responsive.featureImageContainer,
        height: '250px',
      };
      responsive.featureContent = {
        ...responsive.featureContent,
        padding: '32px 24px',
      };
      responsive.planTitle = {
        ...responsive.planTitle,
        fontSize: '2rem',
      };
      // FIXED: Use separate margin properties
      responsive.differenceDescription = {
        ...responsive.differenceDescription,
        fontSize: '1.375rem',
        marginBottom: '80px',
      };
      responsive.flexibleSolutionsDescription = {
        ...responsive.flexibleSolutionsDescription,
        fontSize: '1.375rem',
        marginBottom: '60px',
      };
      responsive.consultationDescription = {
        ...responsive.consultationDescription,
        fontSize: '1.375rem',
        marginBottom: '40px',
      };
    } else if (isMobile) {
      responsive.bodyContainer = {
        ...responsive.bodyContainer,
        padding: '60px 24px',
      };
      responsive.differenceSection = {
        ...responsive.differenceSection,
        marginBottom: '80px',
      };
      responsive.differenceTitle = {
        ...responsive.differenceTitle,
        fontSize: '3rem',
      };
      responsive.navySubtitle = {
        ...responsive.navySubtitle,
        fontSize: '2.5rem',
      };
      responsive.goldSubtitle = {
        ...responsive.goldSubtitle,
        fontSize: '2.5rem',
      };
      responsive.flexibleSolutionsTitle = {
        ...responsive.flexibleSolutionsTitle,
        fontSize: '3rem',
      };
      responsive.flexibleSolutionsSubtitle = {
        ...responsive.flexibleSolutionsSubtitle,
        fontSize: '2rem',
      };
      responsive.consultationTitle = {
        ...responsive.consultationTitle,
        fontSize: '2rem',
      };
      // FIXED: Use separate margin properties
      responsive.differenceDescription = {
        ...responsive.differenceDescription,
        fontSize: '1.25rem',
        marginBottom: '60px',
      };
      responsive.flexibleSolutionsDescription = {
        ...responsive.flexibleSolutionsDescription,
        fontSize: '1.25rem',
        marginBottom: '40px',
      };
      responsive.consultationDescription = {
        ...responsive.consultationDescription,
        fontSize: '1.25rem',
        marginBottom: '40px',
      };
      responsive.featuresGrid = {
        ...responsive.featuresGrid,
        gridTemplateColumns: '1fr',
        gap: '32px',
      };
      responsive.cleaningPlansGrid = {
        ...responsive.cleaningPlansGrid,
        gridTemplateColumns: '1fr',
        gap: '32px',
      };
      responsive.navyTitle = {
        ...responsive.navyTitle,
        fontSize: '2.5rem',
      };
      responsive.goldTitle = {
        ...responsive.goldTitle,
        fontSize: '2.5rem',
      };
      responsive.videoNavyTitle = {
        ...responsive.videoNavyTitle,
        fontSize: '2.5rem',
      };
      responsive.videoGoldTitle = {
        ...responsive.videoGoldTitle,
        fontSize: '2.5rem',
      };
      responsive.transformationsSubtitle = {
        ...responsive.transformationsSubtitle,
        fontSize: '1.25rem',
      };
      responsive.videoSubtitle = {
        ...responsive.videoSubtitle,
        fontSize: '1.25rem',
      };
      responsive.reviewsTitle = {
        ...responsive.reviewsTitle,
        fontSize: '2.5rem',
      };
      responsive.reviewsSubtitle = {
        ...responsive.reviewsSubtitle,
        fontSize: '1.25rem',
      };
      responsive.imageContainer = {
        ...responsive.imageContainer,
        height: '250px',
      };
      responsive.transformationTitle = {
        ...responsive.transformationTitle,
        fontSize: '1.75rem',
        padding: '30px 20px 0 20px',
      };
      responsive.beforeAfterGrid = {
        ...responsive.beforeAfterGrid,
        gridTemplateColumns: '1fr',
        gap: '20px',
        padding: '0 20px 30px 20px',
      };
      responsive.transformationDescription = {
        ...responsive.transformationDescription,
        fontSize: '1.125rem',
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '30px',
        marginLeft: '20px',
        paddingTop: '20px',
      };
      responsive.videoGrid = {
        ...responsive.videoGrid,
        gridTemplateColumns: '1fr',
        gap: '20px',
      };
      responsive.reviewsGrid = {
        ...responsive.reviewsGrid,
        gridTemplateColumns: '1fr',
        gap: '20px',
      };
      responsive.reviewCard = (active: boolean) => ({
        ...baseBodyStyles.reviewCard(active),
        padding: '30px 20px',
      });
      responsive.featureImageContainer = {
        ...responsive.featureImageContainer,
        height: '200px',
      };
      responsive.featureContent = {
        ...responsive.featureContent,
        padding: '24px 20px',
      };
      responsive.featureTitle = {
        ...responsive.featureTitle,
        fontSize: '1.75rem',
      };
      responsive.featureDescription = {
        ...responsive.featureDescription,
        fontSize: '1.125rem',
      };
      responsive.planHeader = (color: string) => ({
        ...baseBodyStyles.planHeader(color),
        padding: '30px 24px',
      });
      responsive.planContent = {
        ...responsive.planContent,
        padding: '30px 24px',
      };
      responsive.planTitle = {
        ...responsive.planTitle,
        fontSize: '2rem',
      };
      responsive.planFrequency = {
        ...responsive.planFrequency,
        fontSize: '1.25rem',
      };
      responsive.planDescription = {
        ...responsive.planDescription,
        fontSize: '1.125rem',
      };
      responsive.planDetails = {
        ...responsive.planDetails,
        fontSize: '1rem',
      };
      responsive.consultationSection = {
        ...responsive.consultationSection,
        padding: '40px 24px',
      };
    }
    
    return responsive;
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <section style={responsiveStyles.bodyContainer}>
      {/* The BraBos Difference Section */}
      <div style={responsiveStyles.differenceSection}>
        <div style={baseBodyStyles.differenceBadge}>
          <span style={baseBodyStyles.diamondIcon}>✦</span>
          <span style={baseBodyStyles.differenceBadgeText}>The BraBos Difference</span>
        </div>
        
        <div>
          <h2 style={responsiveStyles.navySubtitle}>
            What You Can Expect from BraBos
          </h2>
          <h3 style={responsiveStyles.goldSubtitle}>
            The Top-Rated Cleaning Services in Boston
          </h3>
        </div>
        
        <p style={responsiveStyles.differenceDescription}>
          While our competitors clean, we transform. Every BraBos service is a meticulous 
          journey from ordinary to extraordinary, where we don't just meet expectations—we 
          shatter them. This isn't just cleaning; it's an elevated experience designed for 
          those who appreciate the difference between adequate and exceptional.
        </p>
        
        {/* UPDATED: Replaced old stats with animated StatsCounter */}
        <StatsCounter />
      </div>

      {/* UPDATED: Features Grid Section without buttons and with number beside theme */}
      <div style={responsiveStyles.featuresGrid}>
        {features.map((feature, index) => (
          <div 
            key={index}
            style={responsiveStyles.featureCard(activeFeatureCard === index)}
            onMouseEnter={() => setActiveFeatureCard(index)}
            onMouseLeave={() => setActiveFeatureCard(null)}
            onTouchStart={() => handleTouchStart(setActiveFeatureCard, index)}
            onTouchEnd={() => handleTouchEnd(setActiveFeatureCard, null)}
          >
            <div style={baseBodyStyles.featureImageContainer}>
              <img 
                src={feature.image} 
                alt={feature.imageAlt}
                style={{
                  ...baseBodyStyles.featureImage,
                  transform: activeFeatureCard === index ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            </div>
            
            <div style={baseBodyStyles.featureContent}>
              {/* UPDATED: Title container with number badge beside it */}
              <div style={baseBodyStyles.featureTitleContainer}>
                <div style={baseBodyStyles.featureNumberBadge}>
                  {feature.number}
                </div>
                <h3 style={baseBodyStyles.featureTitle}>
                  {feature.title}
                </h3>
              </div>
              
              <p style={baseBodyStyles.featureDescription}>
                {feature.description}
              </p>
              
              <div style={baseBodyStyles.featureList}>
                {feature.listItems.map((item, itemIndex) => (
                  <div key={itemIndex} style={baseBodyStyles.featureListItem}>
                    <span style={baseBodyStyles.checkIcon}>✓</span>
                    <span style={baseBodyStyles.featureListItemText}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* REMOVED: Button removed as requested */}
            </div>
          </div>
        ))}
      </div>

      {/* Transformations Section - UPDATED: Now only 2 before/afters */}
      <div style={responsiveStyles.transformationsSection}>
        <div style={baseBodyStyles.transformationsHeader}>
          <div style={baseBodyStyles.transformationsTitleContainer}>
            <h2 style={responsiveStyles.navyTitle}>
              See the BraBos Difference:
            </h2>
            <h2 style={responsiveStyles.goldTitle}>
              Before & After
            </h2>
          </div>
          <p style={responsiveStyles.transformationsSubtitle}>
            See how we turn neglected spaces into pristine sanctuaries with our professional luxury cleaning.
          </p>
        </div>
        
        <div style={baseBodyStyles.beforeAfterContainer}>
          {transformations.map((transformation, index) => (
            <div 
              key={transformation.id}
              style={responsiveStyles.transformationCard(activeBeforeAfter === index)}
              onMouseEnter={() => setActiveBeforeAfter(index)}
              onMouseLeave={() => setActiveBeforeAfter(null)}
              onTouchStart={() => handleTouchStart(setActiveBeforeAfter, index)}
              onTouchEnd={() => handleTouchEnd(setActiveBeforeAfter, null)}
            >
              <h3 style={responsiveStyles.transformationTitle}>
                {transformation.title}
              </h3>
              
              <div style={responsiveStyles.beforeAfterGrid}>
                <div style={baseBodyStyles.imageContainer}>
                  <div style={{...baseBodyStyles.imageLabel, ...baseBodyStyles.beforeLabel}}>
                    BEFORE
                  </div>
                  <img 
                    src={transformation.beforeImage} 
                    alt="Before transformation"
                    style={{
                      ...baseBodyStyles.transformationImage,
                      transform: activeBeforeAfter === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
                
                <div style={baseBodyStyles.imageContainer}>
                  <div style={{...baseBodyStyles.imageLabel, ...baseBodyStyles.afterLabel}}>
                    AFTER
                  </div>
                  <img 
                    src={transformation.afterImage} 
                    alt="After transformation"
                    style={{
                      ...baseBodyStyles.transformationImage,
                      transform: activeBeforeAfter === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
              </div>
              
              <p style={responsiveStyles.transformationDescription}>
                {transformation.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* NEW: CTA Button for Before & After Page */}
        <button
          style={baseBodyStyles.beforeAfterCTA(activeBeforeAfterButton)}
          onMouseEnter={() => setActiveBeforeAfterButton(true)}
          onMouseLeave={() => setActiveBeforeAfterButton(false)}
          onTouchStart={() => handleTouchStart(setActiveBeforeAfterButton, true)}
          onTouchEnd={() => handleTouchEnd(setActiveBeforeAfterButton, false)}
          onClick={() => {
            window.location.href = '/before-after';
          }}
        >
          See More Transformations
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none"
            style={{
              transition: 'transform 0.3s ease',
              transform: activeBeforeAfterButton ? 'translateX(5px)' : 'translateX(0)'
            }}
          >
            <path 
              d="M5 12H19M19 12L12 5M19 12L12 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Video Testimonials Section */}
      <div style={responsiveStyles.videoTestimonialsSection}>
        <div style={baseBodyStyles.videoTestimonialsHeader}>
          <div style={baseBodyStyles.videoTitleContainer}>
            <h2 style={responsiveStyles.videoNavyTitle}>
              Video Testimonials
            </h2>
            <h2 style={responsiveStyles.videoGoldTitle}>
              From Our Bostonian Clients
            </h2>
          </div>
          <p style={responsiveStyles.videoSubtitle}>
            Hear directly from clients who have experienced the BraBos transformation
          </p>
        </div>
        
        <div style={responsiveStyles.videoGrid}>
          {videoTestimonials.map((video, index) => (
            <VideoTestimonialCard
              key={video.id}
              video={video}
              index={index}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
              playingVideo={playingVideo}
              setPlayingVideo={setPlayingVideo}
            />
          ))}
        </div>
        
        
      </div>

      {/* Reviews Section */}
      <div style={responsiveStyles.reviewsSection}>
        <div style={baseBodyStyles.reviewsHeader}>
          <h2 style={responsiveStyles.reviewsTitle}>
            Real reviews from our customers
          </h2>
          <p style={responsiveStyles.reviewsSubtitle}>
            Hear directly from Houston homeowners who have experienced the BraBos difference firsthand
          </p>
        </div>
        
        <div style={responsiveStyles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              style={responsiveStyles.reviewCard(activeReview === index)}
              onMouseEnter={() => setActiveReview(index)}
              onMouseLeave={() => setActiveReview(null)}
              onTouchStart={() => handleTouchStart(setActiveReview, index)}
              onTouchEnd={() => handleTouchEnd(setActiveReview, null)}
            >
              <div style={baseBodyStyles.reviewHeader}>
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  style={baseBodyStyles.reviewAvatar}
                />
                <div style={baseBodyStyles.reviewerInfo}>
                  <h4 style={baseBodyStyles.reviewerName}>
                    {review.name}
                  </h4>
                  <p style={baseBodyStyles.reviewerDetails}>
                    {review.location} • {review.service}
                  </p>
                  <div style={baseBodyStyles.starsContainer}>
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} style={baseBodyStyles.starIcon}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p style={baseBodyStyles.reviewContent}>
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet The Visionaries Section */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 120px auto',
        padding: isMobile ? '0 20px' : '0 40px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '80px',
          alignItems: 'center',
        }}>
          
          {/* Left Column - Owners Image */}
          <div style={{
            flex: 1,
            position: 'relative',
          }}>
            <div style={{
              backgroundColor: '#001E50',
              borderRadius: '30px',
              padding: '8px',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(0, 30, 80, 0.3)',
            }}>
              <img 
                src="https://i.pinimg.com/736x/cc/0c/e0/cc0ce07fd30b038b573610c481791779.jpg" 
                alt="Mike & Ruth - Founders of OTON"
                style={{
                  width: '100%',
                  height: isMobile ? '400px' : '600px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: '4px solid #FFD700',
                }}
              />
              
              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                bottom: isMobile ? '-20px' : '-30px',
                left: isMobile ? '20px' : '40px',
                right: isMobile ? '20px' : '40px',
                backgroundColor: '#FFD700',
                padding: isMobile ? '20px' : '30px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.4)',
                transform: 'rotate(-2deg)',
              }}>
                <div style={{
                  fontSize: isMobile ? '18px' : '24px',
                  fontWeight: '900',
                  color: '#001E50',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Owners & Quality Inspectors
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div style={{
            flex: 1,
            textAlign: isMobile ? 'center' : 'left',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              padding: '16px 32px',
              borderRadius: '50px',
              marginBottom: '40px',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                color: '#FFD700',
                fontWeight: '900',
                fontSize: '24px',
                fontFamily: "'Playfair Display', serif",
              }}>
                ✦
              </span>
              <span style={{
                fontSize: '18px',
                fontWeight: '900',
                color: '#001E50',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: "'Playfair Display', serif",
              }}>
                Meet The Visionaries
              </span>
            </div>
            
            {/* Owners Title */}
            <div style={{
              marginBottom: '30px',
            }}>
              <h2 style={{
                fontSize: isMobile ? '2.5rem' : '4.5rem',
                fontWeight: '900',
                color: '#001E50',
                marginTop: 0,
                marginRight: 0,
                marginBottom: '8px',
                marginLeft: 0,
                fontFamily: "'Playfair Display', serif",
                lineHeight: '1',
                letterSpacing: '-1px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}>
                Meet The Owners:
              </h2>
              <h2 style={{
                fontSize: isMobile ? '3.5rem' : '6rem',
                fontWeight: '900',
                color: '#001E50',
                marginTop: 0,
                marginRight: 0,
                marginBottom: '8px',
                marginLeft: 0,
                fontFamily: "'Playfair Display', serif",
                lineHeight: '0.9',
              }}>
                Mike{" "}
                <span style={{
                  color: '#FFD700',
                  fontSize: isMobile ? '4rem' : '7rem',
                  display: 'inline-block',
                  margin: '0 20px',
                  transform: 'translateY(5px)',
                }}>
                  &
                </span>
                {" "}Ruth
              </h2>
            </div>
            
            {/* Description */}
            <p style={{
              fontSize: isMobile ? '1.25rem' : '1.5rem',
              color: '#4B5563',
              lineHeight: '1.7',
              marginTop: 0,
              marginRight: 0,
              marginBottom: '30px',
              marginLeft: 0,
              fontWeight: '900',
              fontFamily: "'Playfair Display', serif",
            }}>
              The passionate husband-and-wife team behind Boston's most trusted luxury cleaning service. 
              Their hands-on approach and commitment to excellence is what sets BraBos apart.
            </p>
            
            {/* Story Section */}
            <div style={{
              backgroundColor: 'rgba(0, 30, 80, 0.03)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 215, 0, 0.2)',
              marginBottom: '40px',
            }}>
              <h3 style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: '900',
                color: '#001E50',
                marginTop: 0,
                marginRight: 0,
                marginBottom: '20px',
                marginLeft: 0,
                fontFamily: "'Playfair Display', serif",
              }}>
                Our Story of Excellence
              </h3>
              <p style={{
                fontSize: '1.125rem',
                color: '#4B5563',
                lineHeight: '1.8',
                marginTop: 0,
                marginRight: 0,
                marginBottom: '20px',
                marginLeft: 0,
                fontWeight: '900',
                fontFamily: "'Playfair Display', serif",
              }}>
                With over 15 years combined experience in luxury hospitality and premium service industries, 
                Mike and Ruth founded BraBos with one simple mission: to redefine what exceptional cleaning 
                service means in Houston and Boston.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#4B5563',
                lineHeight: '1.8',
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                fontWeight: '900',
                fontFamily: "'Playfair Display', serif",
              }}>
                What started as a passion project has grown into Houston's #1 rated luxury cleaning service, 
                serving over 5,000 homes and maintaining a 99.8% satisfaction rate. Their hands-on approach 
                means they're involved in every aspect of your service, from initial consultation to final 
                quality inspection.
              </p>
            </div>
            
            {/* CTA Button */}
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#001E50',
                color: '#FFFFFF',
                border: 'none',
                padding: '20px 40px',
                borderRadius: '50px',
                fontSize: '1.125rem',
                fontWeight: '900',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontFamily: "'Playfair Display', serif",
                transform: activeButton === 'learnMore' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: activeButton === 'learnMore' 
                  ? '0 20px 40px rgba(0, 30, 80, 0.4)' 
                  : '0 10px 30px rgba(0, 30, 80, 0.3)',
              }}
              onMouseEnter={() => setActiveButton('learnMore')}
              onMouseLeave={() => setActiveButton(null)}
              onTouchStart={() => handleTouchStart(setActiveButton, 'learnMore')}
              onTouchEnd={() => handleTouchEnd(setActiveButton, null)}
              onClick={() => {
                window.location.href = '/about';
              }}
            >
              Learn More About Us
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                style={{
                  transition: 'transform 0.3s ease',
                  transform: activeButton === 'learnMore' ? 'translateX(5px)' : 'translateX(0)'
                }}
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Flexible Solutions Section - Now after Meet The Visionaries */}
      <div style={responsiveStyles.flexibleSolutionsSection}>
        <div style={baseBodyStyles.flexibleSolutionsHeader}>
          <div style={baseBodyStyles.flexibleSolutionsBadge}>
            <span style={baseBodyStyles.diamondIcon}>✦</span>
            <span style={baseBodyStyles.flexibleSolutionsBadgeText}>Flexible Solutions</span>
          </div>
          
          <h2 style={responsiveStyles.flexibleSolutionsTitle}>
            Flexible Solutions for Busy Households
          </h2>
          <h3 style={responsiveStyles.flexibleSolutionsSubtitle}>
            <span style={{ color: '#FFD700' }}>Recurring House Cleaning</span> That Fits Your Schedule
          </h3>
          
          <p style={responsiveStyles.flexibleSolutionsDescription}>
            Choose the perfect cleaning schedule that matches your lifestyle and budget. 
            Whether you need weekly maintenance or monthly deep cleaning, we've got you covered.
          </p>
        </div>
        
        <div style={responsiveStyles.cleaningPlansGrid}>
          {cleaningPlans.map((plan, index) => (
            <div 
              key={plan.id}
              style={responsiveStyles.cleaningPlanCard(activeScheduleCard === index, plan.color)}
              onMouseEnter={() => setActiveScheduleCard(index)}
              onMouseLeave={() => setActiveScheduleCard(null)}
              onTouchStart={() => handleTouchStart(setActiveScheduleCard, index)}
              onTouchEnd={() => handleTouchEnd(setActiveScheduleCard, null)}
            >
              <div style={responsiveStyles.planHeader(plan.color)}>
                <div style={baseBodyStyles.planBadge}>
                  {plan.badge}
                </div>
                <h3 style={baseBodyStyles.planTitle}>
                  {plan.title}
                </h3>
                <p style={baseBodyStyles.planFrequency}>
                  {plan.frequency}
                </p>
                <p style={baseBodyStyles.planDescription}>
                  {plan.description}
                </p>
              </div>
              
              <div style={baseBodyStyles.planContent}>
                <p style={baseBodyStyles.planDetails}>
                  {plan.details}
                </p>
                
                <div style={baseBodyStyles.planFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={baseBodyStyles.planFeature}>
                      <span style={baseBodyStyles.planFeatureIcon}>✓</span>
                      <span style={baseBodyStyles.planFeatureText}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* UPDATED: Button now navigates to contact page */}
                <button
                  style={responsiveStyles.planButton(
                    activeScheduleButton === `plan-${plan.id}`,
                    plan.color
                  )}
                  onMouseEnter={() => setActiveScheduleButton(`plan-${plan.id}`)}
                  onMouseLeave={() => setActiveScheduleButton(null)}
                  onTouchStart={() => handleTouchStart(setActiveScheduleButton, `plan-${plan.id}`)}
                  onTouchEnd={() => handleTouchEnd(setActiveScheduleButton, null)}
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  {plan.buttonText}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: activeScheduleButton === `plan-${plan.id}` ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={responsiveStyles.consultationSection}>
          <h3 style={responsiveStyles.consultationTitle}>
            Not Sure Which Plan Is Right For You?
          </h3>
          <p style={responsiveStyles.consultationDescription}>
            Our cleaning experts will assess your home and recommend the perfect schedule 
            based on your lifestyle, home size, and cleaning needs.
          </p>
          {/* UPDATED: Button now navigates to contact page */}
          <button
            style={responsiveStyles.consultationButton(activeConsultation)}
            onMouseEnter={() => setActiveConsultation(true)}
            onMouseLeave={() => setActiveConsultation(false)}
            onTouchStart={() => handleTouchStart(setActiveConsultation, true)}
            onTouchEnd={() => handleTouchEnd(setActiveConsultation, false)}
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Get Free Consultation
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              style={{
                transition: 'transform 0.3s ease',
                transform: activeConsultation ? 'translateX(5px)' : 'translateX(0)'
              }}
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* FAQ Section - Added after "Not Sure Which Plan Is Right For You?" section */}
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our premium cleaning services. If you don't see your question here, contact our concierge team for personalized assistance."
        accentColor="#FFD700"
        textColor="#001E50"
        backgroundColor="#FFFFFF"
        containerStyle={{
          marginTop: '0',
          marginBottom: '0',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      />
    </section>
  );
};

// Footer Component - Added responsive footer
function Footer() {
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
        padding: isMobile ? '60px 20px 30px' : isTablet ? '70px 30px 35px' : '80px 40px 40px',
        position: 'relative',
      }}>
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr',
          gap: isMobile ? '40px' : isTablet ? '50px' : '60px',
          marginBottom: isMobile ? '40px' : '60px',
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
              gap: isMobile ? '12px' : '16px',
              marginBottom: isMobile ? '12px' : '16px',
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
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
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
                  fontSize: isMobile ? '24px' : '28px',
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
                  fontSize: isMobile ? '26px' : '32px',
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
                  fontSize: isMobile ? '10px' : '12px',
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
              fontSize: isMobile ? '14px' : '16px',
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
              Houston's #1 rated luxury cleaning service. Transforming spaces 
              into pristine sanctuaries with white-glove attention to detail.
            </p>
            
            {/* Social Media */}
            <div style={{
              marginTop: '20px',
            }}>
              <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
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
                flexWrap: 'wrap',
              }}>
                {socialLinks.map((social, index) => (
                  <button 
                    key={index}
                    style={{
                      width: isMobile ? '44px' : '48px',
                      height: isMobile ? '44px' : '48px',
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
        </div>

        {/* Quick Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? '30px' : isTablet ? '40px' : '40px',
          marginBottom: isMobile ? '30px' : '40px',
        }}>
          {/* Services Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <h4 style={{
              fontSize: isMobile ? '18px' : '20px',
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
              gap: isMobile ? '10px' : '12px',
            }}>
              {servicesLinks.map((link, index) => (
                <li key={index} style={{
                  marginBottom: isMobile ? '6px' : '8px',
                }}>
                  <a 
                    href={link.url} 
                    style={{
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.url);
                    }}
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
              fontSize: isMobile ? '18px' : '20px',
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
              gap: isMobile ? '10px' : '12px',
            }}>
              {companyLinks.map((link, index) => (
                <li key={index} style={{
                  marginBottom: isMobile ? '6px' : '8px',
                }}>
                  <a 
                    href={link.url} 
                    style={{
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.url);
                    }}
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
                  </a>
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
              fontSize: isMobile ? '18px' : '20px',
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
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase' as const,
                    transition: 'all 0.3s ease',
                  }}>
                    Email
                  </div>
                  <a href="mailto:info@otoncleaningservices.com" style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    info@otoncleaningservices.com
                  </a>
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
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase' as const,
                    transition: 'all 0.3s ease',
                  }}>
                    Phone
                  </div>
                  <a href="tel:+12815551234" style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFD700';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    (281) 555-1234
                  </a>
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
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase' as const,
                    transition: 'all 0.3s ease',
                  }}>
                    Location
                  </div>
                  <div style={{
                    fontSize: isMobile ? '14px' : '16px',
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
                    Serving Houston, MA & Surrounding Areas
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
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: 600,
                    color: '#FFD700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase' as const,
                    transition: 'all 0.3s ease',
                  }}>
                    Business Hours
                  </div>
                  <div style={{
                    fontSize: isMobile ? '14px' : '16px',
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
              padding: isMobile ? '16px' : '20px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '12px' : '16px',
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
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: 700,
                  color: '#FFD700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase' as const,
                  transition: 'all 0.3s ease',
                }}>
                  Emergency Service
                </div>
                <a href="tel:+12815551234" style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onClick={(e) => e.preventDefault()}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFD700';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  (281) 555-EMERGENCY
                </a>
                <div style={{
                  fontSize: isMobile ? '11px' : '12px',
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
        
        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          margin: isMobile ? '30px 0' : '40px 0',
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
          gap: isMobile ? '16px' : '20px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '10px' : '12px',
            textAlign: 'center' as const,
          }}>
            <div style={{
              fontSize: isMobile ? '12px' : '14px',
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
              gap: isMobile ? '8px' : '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {legalLinks.map((link, index) => (
                <span key={index} style={{
                  transition: 'all 0.3s ease',
                }}>
                  <a 
                    href={link.url} 
                    style={{
                      fontSize: isMobile ? '12px' : '14px',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(link.url);
                    }}
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
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.3)',
                      marginLeft: isMobile ? '8px' : '12px',
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
            gap: isMobile ? '20px' : '30px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '12px' : '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: isMobile ? '6px 10px' : '8px 12px',
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
                  fontSize: isMobile ? '11px' : '12px',
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
                padding: isMobile ? '6px 10px' : '8px 12px',
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
                  fontSize: isMobile ? '11px' : '12px',
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
            position: isMobile ? 'fixed' : 'absolute',
            right: isMobile ? '20px' : '20px',
            bottom: isMobile ? '90px' : 'auto',
            top: isMobile ? 'auto' : '80px',
            width: isMobile ? '44px' : '48px',
            height: isMobile ? '44px' : '48px',
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '2px solid rgba(255, 215, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#FFD700',
            zIndex: 1000,
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

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BodySection />
      <Footer />
      {/* Add the Bottom CTA Buttons */}
      <BottomCTAButtons 
        phoneNumber="+12815551234"
        callText="Call Now"
        quoteText="Get Quote"
        bookText="Book Now"
      />
    </>
  );
};

export default HomePage;