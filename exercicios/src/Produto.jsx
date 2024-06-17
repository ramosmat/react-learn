import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      key={nome}
      style={{ border: '1px solid black', padding: '1rem', margin: '1rem' }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((prop, index) => (
          <li key={index}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
