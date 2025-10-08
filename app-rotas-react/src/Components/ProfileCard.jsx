function ProfileCard() {
  const user = {
    name: 'Yeonjun Choi',
    title: 'Desenvolvedor Full Stack',
    email: 'yeonjun.choi@email.com',
    phone: '(11) 99999-9999',
    location: 'São Paulo, SP',
    bio: 'Desenvolvedor apaixonado por tecnologia e inovação. Especializado em React, Node.js e desenvolvimento de aplicações web modernas.',
    avatar: '/TXT_Yeonjun_at_Dior_Sauvage_campaign_event_(1).jpg'
  };

  return (
    <div className="component-container">
      <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Header com container redondo */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid white',
            margin: '0 auto 1rem auto',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa'
          }}>
            <img 
              src={user.avatar} 
              alt={user.name}
              style={{
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                minWidth: '100%',
                minHeight: '100%'
              }}
            />
          </div>
          
          <h3 style={{ color: 'white', margin: '0.5rem 0' }}>{user.name}</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>{user.title}</p>
        </div>

        {/* Body (mantém igual) */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Telefone:</strong> {user.phone}
            </p>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Localização:</strong> {user.location}
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Sobre</h4>
            <p style={{ color: '#666', lineHeight: '1.5' }}>
              {user.bio}
            </p>
          </div>
        </div>

        {/* Footer (mantém igual) */}
        <div style={{
          padding: '1rem 1.5rem',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #e9ecef',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <button className="btn btn-primary" style={{ flex: 1, marginRight: '0.5rem' }}>
            Contatar
          </button>
          <button className="btn" style={{ 
            flex: 1, 
            marginLeft: '0.5rem',
            backgroundColor: '#95a5a6',
            color: 'white'
          }}>
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;