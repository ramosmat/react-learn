import React from 'react';
import Button from './Button';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)

// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [produtoUpper, setProdutoUpper] = React.useState(null);

  React.useEffect(() => {
    const produtoInicial = window.localStorage.getItem('produto');

    if (produtoInicial) {
      setProduto(produtoInicial);
    }
  }, []);

  React.useEffect(() => {
    if (produto) {
      window.localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button handleClick={handleClick} texto={'notebook'} />
        <Button handleClick={handleClick} texto={'smartphone'} />
      </div>
      <Produto produto={produto} />
    </>
  );
};

export default App;
