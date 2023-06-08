// HomePage.js
import React, { useState } from 'react';
import PublicationCard from './PublicationCard';
import publicationsData from './publicationsData';

function HomePage() {
  const [publications, setPublications] = useState(publicationsData);

  const handleEvaluationSubmit = (publicationId, newEvaluation) => {
    setPublications((prevPublications) =>
      prevPublications.map((publication) => {
        if (publication.id === publicationId) {
          return {
            ...publication,
            evaluations: [...publication.evaluations, newEvaluation],
          };
        }
        return publication;
      })
    );
  };

  return (
    <div>
      <h1>Page d'accueil - Utilisateur Normal</h1>
      <h2>Publications</h2>
      {publications.map((publication) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
          onEvaluationSubmit={handleEvaluationSubmit}
        />
      ))}
    </div>
  );
}

export default HomePage;
