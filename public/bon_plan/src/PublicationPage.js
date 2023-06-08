// PublicationPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function PublicationPage() {
  const { id } = useParams();
  const [evaluation, setEvaluation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEvaluationChange = (e) => {
    setEvaluation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer l'évaluation au serveur ou effectuer toute autre action nécessaire
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Page de publication</h1>
      <h2>ID de la publication : {id}</h2>
      <h3>Évaluation de la publication</h3>
      {submitted ? (
        <p>Merci pour votre évaluation !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Entrez votre évaluation"
            value={evaluation}
            onChange={handleEvaluationChange}
            required
          />
          <button type="submit">Soumettre</button>
        </form>
      )}
    </div>
  );
}

export default PublicationPage;
