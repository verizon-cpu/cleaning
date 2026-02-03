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