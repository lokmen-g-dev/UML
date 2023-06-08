// PublicationList.js
import React from 'react';

function PublicationList({ publications, onDelete }) {
  return (
    <ul>
      {publications.map((publication) => (
        <li key={publication.id}>
          <h3>{publication.titre}</h3>
          <p>{publication.description}</p>
          <button onClick={() => onDelete(publication.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default PublicationList;
