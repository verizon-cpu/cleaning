{/* PRE-FOOTER */}
<section style={{
  padding: '100px 10%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginTop: '140px',
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
      Let's build something to be proud of.
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