// PublicationForm.js
import React, { useState } from 'react';

function PublicationForm({ onAdd, onClose }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  const handleTitreChange = (e) => {
    setTitre(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPublication = {
      id: Date.now(),
      titre,
      description,
    };
    onAdd(newPublication);
    setTitre('');
    setDescription('');
  };

  return (
    <div>
      <h2>Ajouter une publication</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={handleTitreChange}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        <button type="submit">Ajouter</button>
        <button type="button" onClick={onClose}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default PublicationForm;
