import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page">
      <div className="not-found">
        <h1>404</h1>
        <h2>Página Não Encontrada</h2>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <Link to="/" className="back-home">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;