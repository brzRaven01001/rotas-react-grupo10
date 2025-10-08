import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import BuscadorDeCEPPage from './Pages/BuscadorDeCEPPage';
import ProfileCardPage from './Pages/ProfileCardPage';
import UserDetailPage from './Pages/UserDetailPage';
import NotFoundPage from './Pages/NotFoundPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BuscadorDeCEPPage />} />
            <Route path="/profile" element={<ProfileCardPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;