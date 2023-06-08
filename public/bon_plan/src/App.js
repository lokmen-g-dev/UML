import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import './main.css';

const HomePage = lazy(() => import('./HomePage'));
const PublicationPage = lazy(() => import('./PublicationPage'));
const EntrepreneurPage = lazy(() => import('./EntrepreneurPage'));

const roleConfig = {
  user: {
    path: '/user',
    component: PublicationPage
  },
  entrepreneur: {
    path: '/entrepreneur',
    component: EntrepreneurPage
  }
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('normal');

  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType('normal');
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  roleConfig[userType]?.component || <HomePage />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />

            {Object.values(roleConfig).map(({ path, component }) => (
              <Route key={path} path={path} element={<component />} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
