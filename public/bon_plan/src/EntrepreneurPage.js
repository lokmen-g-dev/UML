// EntrepreneurPage.js
import React, { useState } from 'react';
import PublicationList from './PublicationList';
import PublicationForm from './PublicationForm';

function EntrepreneurPage() {
  const [state, setState] = useState({
    publications: [],
    showPopup: false
  });

  const { publications, showPopup } = state;

  const handlePublicationAdd = (newPublication) => {
    setState((prevState) => ({
      ...prevState,
      showPopup: false,
      publications: [...prevState.publications, newPublication]
    }));
  };

  const handlePublicationDelete = (publicationId) => {
    setState((prevState) => ({
      ...prevState,
      publications: prevState.publications.filter((publication) => publication.id !== publicationId)
    }));
  };

  const togglePopup = () => {
    setState((prevState) => ({
      ...prevState,
      showPopup: !prevState.showPopup
    }));
  };

  return (
    <div>
      <h1>Espace Entrepreneur</h1>
      <h2>Mes Publications</h2>
      <button onClick={togglePopup}>Ajouter une publication</button>
      <PublicationList publications={publications} onDelete={handlePublicationDelete} />
      {showPopup && <PublicationForm onAdd={handlePublicationAdd} onClose={togglePopup} />}
    </div>
  );
}

export default EntrepreneurPage;