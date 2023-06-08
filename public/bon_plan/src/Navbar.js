// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
const isEntrepreneur = true;
function Navbar({ isAuthenticated, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li> 
        {isAuthenticated ? (
          <>
            {isEntrepreneur && (
              <li>
                <Link to="/entrepreneur">Espace Entrepreneur</Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout}>Déconnexion</button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
