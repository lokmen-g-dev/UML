// PublicationCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function PublicationCard({ publication }) {
  return (
    <div className="publication-card">
      <div className="publication-header">
        <h2>{publication.titre}</h2>
        <p>Date : {publication.date}</p>
        <p>Évaluation : {publication.evaluation}</p>
      </div>
      <div className="publication-content">
        <img src={publication.photo} alt={publication.titre} />
        <p>{publication.description}</p>
      </div>
      <Link to={`/publication/${publication.id}`} className="evaluation-link">
        Évaluer cette publication
      </Link>
    </div>
  );
}

export default PublicationCard;
