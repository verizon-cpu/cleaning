// src/app/(routes)/projects/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define TypeScript interfaces
interface PortfolioItem {
  id: number;
  name: string;
  category: string;
  image: string;
}

type CategoryKey = 'all' | 'residential' | 'commercial' | 'industrial' | 'infrastructure' | 'renovation' | 'sustainable' | 'hospitality' | 'educational' | 'healthcare';

export default function ConstructionPortfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [activeNav, setActiveNav] = useState<string>('Projects');
  
  const categories: { label: string; key: CategoryKey }[] = [
    { label: 'All Projects', key: 'all' },
    { label: 'Residential', key: 'residential' },
    { label: 'Commercial', key: 'commercial' },
    { label: 'Industrial', key: 'industrial' },
    { label: 'Infrastructure', key: 'infrastructure' },
    { label: 'Renovation', key: 'renovation' },
    { label: 'Sustainable', key: 'sustainable' },
    { label: 'Hospitality', key: 'hospitality' },
    { label: 'Educational', key: 'educational' },
    { label: 'Healthcare', key: 'healthcare' }
  ];
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      name: 'Skyline Towers',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
    },
    {
      id: 2,
      name: 'Commerce Plaza',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    },
    {
      id: 3,
      name: 'Steelworks Factory',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 4,
      name: 'Riverfront Bridge',
      category: 'infrastructure',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 5,
      name: 'Heritage Restoration',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1560185007-cde436f6a6d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 6,
      name: 'Green Living Complex',
      category: 'sustainable',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 7,
      name: 'Grand Horizon Hotel',
      category: 'hospitality',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 8,
      name: 'University Campus',
      category: 'educational',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 9,
      name: 'MediCare Center',
      category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80',
    },
    {
      id: 10,
      name: 'Corporate Hub',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 11,
      name: 'Lakeside Residences',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 12,
      name: 'Eco-Power Facility',
      category: 'sustainable',
      image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleCategoryClick = (category: CategoryKey) => {
    setActiveCategory(category);
  };

  const handleNavClick = (item: string) => {
    setActiveNav(item);
  };

  return (
    <div className="portfolio-container">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
          --primary-black: #0a0a0a;
          --secondary-black: #1a1a1a;
          --burgundy: #800020;
          --light-burgundy: #a04050;
          --white: #ffffff;
          --light-gray: #f5f5f5;
        }
        
        body {
          background-color: var(--primary-black);
          color: var(--white);
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        .container {
          max-width: 100vw;
          margin: 0;
          padding: 0;
        }
        
        /* Hero Section */
        .hero {
          height: 100vh;
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                          url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }
        
        .hero-content {
          z-index: 2;
          max-width: 800px;
          padding: 20px;
        }
        
        .hero h1 {
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
          color: var(--white);
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
        }
        
        .hero .tagline {
          font-size: 1.5rem;
          color: var(--white);
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 40px;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
        }
        
        /* Sub-hero with vertical burgundy line */
        .sub-hero {
          background-color: var(--secondary-black);
          padding: 60px 0;
        }
        
        .citation-container {
          display: flex;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .vertical-line {
          width: 6px;
          height: 120px;
          background-color: var(--burgundy);
          margin-right: 30px;
          flex-shrink: 0;
        }
        
        .citation {
          font-size: 1.8rem;
          font-weight: 300;
          font-style: italic;
          line-height: 1.4;
        }
        
        /* Categories Section */
        .categories-section {
          padding: 60px 0 0 0;
          background-color: var(--primary-black);
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0 20px;
        }
        
        .categories-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
          padding: 0 20px;
        }
        
        .category-btn {
          background-color: transparent;
          border: 2px solid var(--burgundy);
          color: var(--white);
          padding: 12px 25px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        
        .category-btn:hover {
          background-color: var(--burgundy);
          transform: translateY(-3px);
        }
        
        .category-btn.active {
          background-color: var(--burgundy);
        }
        
        /* Portfolio Grid - 2 MASSIVE IMAGES PER ROW */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* 2 images per row */
          gap: 0; /* NO GAP between images */
          width: 100vw;
          max-width: 100vw;
          margin: 0;
          padding: 0;
        }
        
        .portfolio-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          width: 50vw; /* Each takes half the viewport width */
          height: 100vh; /* Each image takes full viewport height */
          margin: 0;
          padding: 0;
        }
        
        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        
        .portfolio-item:hover img {
          transform: scale(1.03);
        }
        
        /* Theme always visible overlay - FULL WIDTH */
        .portfolio-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), transparent);
          padding: 50px; /* Large padding */
          opacity: 1; /* Always visible */
          transform: translateY(0); /* Always in position */
          transition: all 0.3s ease;
          width: 100%;
        }
        
        /* On hover, make the overlay slightly more prominent */
        .portfolio-item:hover .portfolio-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.7), transparent);
          padding-bottom: 60px; /* Slight padding increase on hover */
        }
        
        .project-name {
          font-size: 2.8rem; /* Large font size */
          font-weight: 800;
          color: var(--white);
          margin-bottom: 15px;
          text-shadow: 0 3px 8px rgba(0, 0, 0, 0.9);
          line-height: 1.1;
        }
        
        .project-category {
          font-size: 1.3rem; /* Larger category text */
          color: var(--light-burgundy);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
        }
        
        /* Category indicator badge */
        .category-badge {
          position: absolute;
          top: 30px;
          right: 30px;
          background-color: var(--burgundy);
          color: var(--white);
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: 0 6px 20px rgba(128, 0, 32, 0.6);
          z-index: 2;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .portfolio-item {
            height: 90vh; /* Slightly smaller on large screens */
          }
          
          .project-name {
            font-size: 2.4rem;
          }
        }
        
        @media (max-width: 992px) {
          .hero h1 {
            font-size: 4rem;
          }
          
          .citation {
            font-size: 1.5rem;
          }
          
          .portfolio-item {
            height: 85vh;
          }
          
          .project-name {
            font-size: 2.2rem;
          }
          
          .project-category {
            font-size: 1.2rem;
          }
          
          .portfolio-overlay {
            padding: 40px;
          }
          
          .category-badge {
            top: 25px;
            right: 25px;
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 768px) {
          /* Switch to 1 column on tablets */
          .portfolio-grid {
            grid-template-columns: 1fr; /* 1 column on tablets */
          }
          
          .portfolio-item {
            width: 100vw; /* Full width on tablets */
            height: 80vh;
          }
          
          .hero h1 {
            font-size: 3rem;
          }
          
          .hero .tagline {
            font-size: 1.2rem;
          }
          
          .citation-container {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .vertical-line {
            height: 6px;
            width: 100px;
            margin-bottom: 20px;
          }
          
          .categories-container {
            gap: 10px;
          }
          
          .category-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          
          .project-name {
            font-size: 2rem;
          }
          
          .project-category {
            font-size: 1.1rem;
            letter-spacing: 1.5px;
          }
          
          .category-badge {
            top: 20px;
            right: 20px;
            padding: 7px 14px;
            font-size: 0.8rem;
          }
          
          .portfolio-overlay {
            padding: 35px;
          }
        }
        
        @media (max-width: 576px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .category-btn {
            padding: 8px 15px;
            font-size: 0.8rem;
          }
          
          .portfolio-item {
            height: 75vh;
          }
          
          .project-name {
            font-size: 1.8rem;
          }
          
          .project-category {
            font-size: 1rem;
            letter-spacing: 1px;
          }
          
          .portfolio-overlay {
            padding: 30px;
          }
          
          .category-badge {
            top: 15px;
            right: 15px;
            padding: 6px 12px;
            font-size: 0.75rem;
          }
        }
        
        @media (max-width: 400px) {
          .portfolio-item {
            height: 70vh;
          }
          
          .project-name {
            font-size: 1.6rem;
          }
          
          .project-category {
            font-size: 0.9rem;
          }
          
          .portfolio-overlay {
            padding: 25px;
          }
          
          .category-badge {
            top: 12px;
            right: 12px;
          }
        }
      `}</style>

      {/* INLINE HEADER - GLASSMORPHIC DESIGN */}
      <header style={{
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        maxWidth: '1200px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
      }}>
        {/* Left: Logo with J icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          {/* J Logo Icon */}
          <div style={{
            width: '50px',
            height: '50px',
            background: '#9e2f41',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: '900',
            fontFamily: 'Georgia, serif',
            boxShadow: '0 4px 15px rgba(158, 47, 65, 0.4)'
          }}>
            J
          </div>
          
          {/* JACO with General Constructor */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <Link href="/" style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center'
            }}>
              JACO
            </Link>
            
            {/* Vertical Line */}
            <div style={{
              width: '2px',
              height: '30px',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '1px'
            }}></div>
            
            {/* General Constructor */}
            <div style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.85)',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              General Constructor
            </div>
          </div>
        </div>

        {/* Right: Navigation */}
        <nav style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center'
        }}>
          {['Home', 'Projects', 'Services', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              onClick={() => handleNavClick(item)}
              style={{
                color: activeNav === item ? '#fff' : 'rgba(255, 255, 255, 0.95)',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.05rem',
                position: 'relative',
                padding: '10px 0',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                const line = e.currentTarget.querySelector('.hover-line') as HTMLElement;
                if (line) {
                  line.style.width = '100%';
                  line.style.opacity = '1';
                }
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                if (activeNav !== item) {
                  const line = e.currentTarget.querySelector('.hover-line') as HTMLElement;
                  if (line) {
                    line.style.width = '0%';
                    line.style.opacity = '0';
                  }
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                }
              }}
            >
              {item}
              
              {/* Hover Burgundy Line */}
              <div className="hover-line" style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: activeNav === item ? '100%' : '0%',
                height: '3px',
                background: '#9e2f41',
                borderRadius: '3px',
                transition: 'all 0.3s ease',
                opacity: activeNav === item ? '1' : '0',
                boxShadow: '0 0 8px rgba(158, 47, 65, 0.5)'
              }}></div>
              
              {/* Active Burgundy Line */}
              {activeNav === item && (
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '3px',
                  background: '#9e2f41',
                  borderRadius: '3px',
                  boxShadow: '0 0 12px rgba(158, 47, 65, 0.7)'
                }}></div>
              )}
            </Link>
          ))}
          
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button 
              style={{
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #9e2f41, #b2374a)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(158, 47, 65, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '15px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #b2374a, #c73f55)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(158, 47, 65, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #9e2f41, #b2374a)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(158, 47, 65, 0.4)';
              }}
            >
              <i className="fas fa-phone-alt" style={{ fontSize: '0.9rem' }}></i>
              Call Now
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Portfolio</h1>
          <p className="tagline">Crafting Excellence in Construction, One Project at a Time</p>
        </div>
      </section>

      {/* Sub-hero Section */}
      <section className="sub-hero">
        <div className="container">
          <div className="citation-container">
            <div className="vertical-line"></div>
            <p className="citation">
              &quot;Building is not just about bricks and mortar; it&apos;s about creating spaces that inspire, endure, and transform communities.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Categories & Portfolio Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>

          {/* Category Filters */}
          <div className="categories-container">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - 2 MASSIVE IMAGES PER ROW */}
      <section className="portfolio-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="portfolio-item" 
            data-category={item.category}
            onMouseEnter={(e) => e.currentTarget.style.zIndex = '10'}
            onMouseLeave={(e) => e.currentTarget.style.zIndex = '1'}
          >
            {/* Category Badge */}
            <div className="category-badge">
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </div>
            
            <img src={item.image} alt={item.name} />
            
            {/* Always Visible Overlay */}
            <div className="portfolio-overlay">
              <h3 className="project-name">{item.name}</h3>
              <p className="project-category">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* PRE-FOOTER */}
      <section style={{
        padding: '100px 10%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginTop: '0',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          height: '120px',
          width: '4px',
          backgroundColor: '#9D2235',
          marginRight: '40px',
          borderRadius: '2px'
        }}></div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            lineHeight: '1.2',
            color: '#fff',
            marginBottom: '15px',
            textShadow: '0 1px 5px rgba(0,0,0,0.8)'
          }}>
            Let&apos;s build something to be proud of.
          </div>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '500',
            lineHeight: '1.3',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 1px 3px rgba(0,0,0,0.8)'
          }}>
            Call <span style={{ color: '#D14A5C', fontWeight: '600' }}>(316) 252-8200</span> or message us now.
          </div>
        </div>
        <Link 
          href="/contact"
          style={{
            backgroundColor: '#9D2235',
            color: 'white',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 5px 15px rgba(157, 34, 53, 0.5)',
            marginLeft: '40px',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B52A3F';
            e.currentTarget.style.transform = 'translateX(10px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(157, 34, 53, 0.7)';
          }}

          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#9D2235';
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(157, 34, 53, 0.5)';
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '80px 10% 40px',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #333'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '50px'
        }}>
          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              color: '#D14A5C',
              marginBottom: '30px',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <button 
                onClick={() => window.open('tel:3162528200')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.85)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D14A5C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                }}
              >
                <i className="fas fa-phone" style={{ color: '#D14A5C', marginRight: '10px' }}></i> (316) 252-8200
              </button>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                <i className="fas fa-envelope" style={{ color: '#D14A5C', marginRight: '10px' }}></i> info@jacoconstruction.com
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                <i className="fas fa-clock" style={{ color: '#D14A5C', marginRight: '10px' }}></i> Mon-Fri: 8am-6pm
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                <i className="fas fa-fax" style={{ color: '#D14A5C', marginRight: '10px' }}></i> (316) 252-8201
              </p>
            </div>
          </div>
          
          {/* Headquarters */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              color: '#D14A5C',
              marginBottom: '30px',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Headquarters
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '18px' }}>
              <i className="fas fa-map-marker-alt" style={{ color: '#D14A5C', marginRight: '10px' }}></i> 123 Construction Avenue
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '18px' }}>Building District</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '18px' }}>New York, NY 10001</p>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', marginBottom: '18px' }}>United States</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              color: '#D14A5C',
              marginBottom: '30px',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Link 
                href="/"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D14A5C';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <i className="fas fa-chevron-right" style={{
                  color: '#D14A5C',
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}></i>
                Home
              </Link>
              <Link 
                href="/projects"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D14A5C';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <i className="fas fa-chevron-right" style={{
                  color: '#D14A5C',
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}></i>
                Projects
              </Link>
              <Link 
                href="/contact"
                style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D14A5C';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <i className="fas fa-chevron-right" style={{
                  color: '#D14A5C',
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}></i>
                Contact
              </Link>
            </div>
          </div>
          
          {/* Connect With Us */}
          <div>
            <h4 style={{
              fontSize: '1.3rem',
              color: '#D14A5C',
              marginBottom: '30px',
              fontWeight: '600',
              position: 'relative',
              paddingBottom: '10px'
            }}>
              Connect With Us
            </h4>
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
              {['instagram', 'twitter', 'facebook-f', 'linkedin-in'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    border: '1px solid #444'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D14A5C';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#D14A5C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a1a1a';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#444';
                  }}
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
            <p style={{ marginTop: '30px', color: 'rgba(255, 255, 255, 0.85)' }}>
              Stay updated with our latest projects
            </p>
            <div style={{ display: 'flex', marginTop: '15px' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{
                  flex: '1',
                  background: '#1a1a1a',
                  border: '1px solid #444',
                  padding: '12px 15px',
                  color: 'white',
                  borderRight: 'none',
                  fontSize: '0.95rem',
                  borderRadius: '4px 0 0 4px'
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const target = e.target as HTMLInputElement;
                    if (target.value && target.value.includes('@')) {
                      alert('Thank you for subscribing to our newsletter!');
                      target.value = '';
                    } else {
                      alert('Please enter a valid email address.');
                      target.focus();
                    }
                  }
                }}
              />
              <button 
                type="button" 
                style={{
                  background: '#9D2235',
                  color: 'white',
                  border: 'none',
                  padding: '0 20px',
                  cursor: 'pointer',
                  transition: '0.3s',
                  fontWeight: '500',
                  borderRadius: '0 4px 4px 0'
                }}
                onClick={() => {
                  const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
                  if (emailInput && emailInput.value && emailInput.value.includes('@')) {
                    alert('Thank you for subscribing to our newsletter!');
                    emailInput.value = '';
                  } else {
                    alert('Please enter a valid email address.');
                    emailInput?.focus();
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D14A5C';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#9D2235';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          paddingTop: '60px',
          marginTop: '60px',
          borderTop: '1px solid #444',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem'
        }}>
          <p>&copy; 2023 JACO General Constructor. All rights reserved. | Excellence in Construction Since 2003</p>
        </div>
      </footer>
    </div>
  );
}