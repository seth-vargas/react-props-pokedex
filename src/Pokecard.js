import React from 'react';

function Pokecard({ id, name, type, base_experience }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>Base Experience: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
