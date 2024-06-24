import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  if (global.dados == null) {
    return null;
  } else {
    return (
      <>
        <div>Produtos:</div>
        <div>
          {global.dados.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </div>
      </>
    );
  }
};

export default Produto;
