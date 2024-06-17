import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const estiloVerde = {
  color: 'green',
};

const estiloVermelho = {
  color: 'red',
};

const App = () => {
  const dados = luana;

  const ativo = dados.ativa;
  const total = dados.compras
    .map((c) => +c.preco.replace('R$ ', ''))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={ativo ? estiloVerde : estiloVermelho}>
          {ativo ? ' Ativa' : ' Inativa'}
        </span>
      </p>

      <p>
        Total gasto: R$
        {total}
      </p>

      {total > 10000 && <p>Você está gastando de mais</p>}
    </>
  );
};

export default App;
