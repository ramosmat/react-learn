import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      <div>Produto: {global.cont}</div>
      <button onClick={global.contarUm}>Contar</button>
    </>
  );
};

export default Produto;
