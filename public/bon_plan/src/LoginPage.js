// LoginPage.js
import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier les informations d'identification (exemple simplifié)
    if (username === 'user' && password === 'user') {
      onLogin('normal');
    } else if (username === 'entrepreneur' && password === 'entrepreneur') {
      onLogin('entrepreneur');
    } else {
      alert('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <div>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginPage;
