import React from 'react';

const App = () => {
  const titulo = <h1>Esse é o título da página</h1>;
  const ativo = true;

  const random = Math.random();

  function mostrarNome(sobrenome) {
    return 'Matheus ' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 1964,
  };

  const estiloP = {
    color: 'blue',
    backgroundColor: 'yellow',
    fontSize: '2rem',
    padding: '10px',
  };

  const produtos = ['Notebook', 'Tablet', 'Smartphone'];

  return (
    <>
      {titulo}
      <p>{ativo ? 'ativo' : 'inativo'}</p>

      <span className={ativo ? 'ativo' : 'inativo'}>
        {(random * 1000) / 50}
      </span>

      <p>{mostrarNome('Ramos')}</p>
      <p style={estiloP}>
        {carro.marca} {carro.modelo}, {carro.ano}
      </p>

      <ul>
        {produtos.map((produto) => (
          <li key={produto}>{produto}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
