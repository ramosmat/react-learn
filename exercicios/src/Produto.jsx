import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>Preço: R$ {dados.preco}</p>
      <picture>
        <img
          style={{ width: '100%', display: 'block', maxWidth: '300px' }}
          src={dados.fotos[0].src}
          alt=""
        />
      </picture>
    </div>
  );
};

export default Produto;
