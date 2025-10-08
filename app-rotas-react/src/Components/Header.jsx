import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Buscador de CEP
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
            >
              Profile Card
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;