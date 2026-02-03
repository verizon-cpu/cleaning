export default function CapabilitiesPage() {
  return (
    <div className="capabilities-page">
      {/* Hero Section */}
      <section className="capabilities-hero">
        <div className="hero-content">
          <h1>Our Capabilities</h1>
          <p>Comprehensive construction solutions tailored to the hospitality industry</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="capabilities-container">
        {/* Service Categories */}
        <section className="service-categories">
          <h2>Core Service Areas</h2>
          <div className="categories-grid">
            {serviceCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul className="service-list">
                  {category.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section className="specializations">
          <h2>Specialized Expertise</h2>
          <div className="specializations-grid">
            {specializations.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
                <div className="specialty-features">
                  {specialty.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="process-section">
          <h2>Our Process</h2>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">0{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="capabilities-cta">
          <h2>Ready to Discuss Your Project?</h2>
          <p>Contact us to learn how our capabilities can serve your hospitality construction needs.</p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-button">Contact Us</a>
            <a href="/projects" className="secondary-button">View Projects</a>
          </div>
        </section>
      </div>
    </div>
  );
}

// Data
const serviceCategories = [
  {
    icon: '🏨',
    title: 'Hotel Construction',
    description: 'Full-service hotel development from ground-up to completion',
    services: [
      'New Hotel Construction',
      'Hotel Renovations',
      'Brand Conversions',
      'Lobby & Public Space Redesign'
    ]
  },
  {
    icon: '🍽️',
    title: 'Restaurant & Dining',
    description: 'Specialized construction for dining establishments',
    services: [
      'Restaurant Build-outs',
      'Commercial Kitchens',
      'Bar & Lounge Construction',
      'Outdoor Dining Spaces'
    ]
  },
  {
    icon: '🏖️',
    title: 'Resort Development',
    description: 'Luxury resort and destination properties',
    services: [
      'Resort Master Planning',
      'Amenity Construction',
      'Spa & Wellness Facilities',
      'Pool & Water Features'
    ]
  },
  {
    icon: '🏢',
    title: 'Commercial Hospitality',
    description: 'Multi-use hospitality developments',
    services: [
      'Conference Centers',
      'Event Spaces',
      'Mixed-Use Developments',
      'Hospitality Retail'
    ]
  }
];

const specializations = [
  {
    title: 'Brand Compliance',
    description: 'Ensuring every project meets exact brand standards and requirements',
    features: ['Brand Prototype Adherence', 'FF&E Compliance', 'Design Standardization']
  },
  {
    title: 'Fast-Track Construction',
    description: 'Accelerated timelines without compromising quality',
    features: ['Phased Construction', '24/7 Operations', 'Critical Path Optimization']
  },
  {
    title: 'Sustainable Building',
    description: 'Eco-friendly construction practices and materials',
    features: ['LEED Certification', 'Energy Efficiency', 'Sustainable Materials']
  },
  {
    title: 'Historic Preservation',
    description: 'Sensitive restoration and adaptive reuse of historic properties',
    features: ['Historical Compliance', 'Preservation Techniques', 'Modern Integration']
  }
];

const processSteps = [
  {
    title: 'Discovery & Planning',
    description: 'Comprehensive analysis of project requirements, site conditions, and brand specifications.'
  },
  {
    title: 'Design Development',
    description: 'Collaborative design process integrating architectural, engineering, and brand elements.'
  },
  {
    title: 'Preconstruction',
    description: 'Detailed budgeting, scheduling, and procurement to ensure project readiness.'
  },
  {
    title: 'Construction Execution',
    description: 'Managed construction with quality control, safety protocols, and regular client updates.'
  },
  {
    title: 'Commissioning',
    description: 'System testing, staff training, and final preparations for operations.'
  },
  {
    title: 'Project Closeout',
    description: 'Final documentation, warranty transfer, and ongoing support relationship.'
  }
];