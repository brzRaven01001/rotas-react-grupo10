import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && parseInt(id) > 100) {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <div className="page">
      <h1 className="page-title">Detalhes do Usuário</h1>
      <div className="user-detail">
        <div className="user-id">ID: {id}</div>
        <p className="user-message">
          {id && parseInt(id) <= 100 
            ? `Você está visualizando os detalhes do usuário com ID ${id}`
            : 'Redirecionando...'
          }
        </p>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default UserDetailPage;