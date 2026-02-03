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