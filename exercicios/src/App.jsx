import React from 'react';
import Button from './Button';
import Produto from './Produto';
import Header from './Header';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)

// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produtoNome, setProdutoNome] = React.useState(null);
  const [produtoFetch, setProdutoFetch] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');

    if (produtoLocal !== null) {
      setProdutoNome(
        produtoLocal.charAt(0).toUpperCase() + produtoLocal.slice(1),
      );
      setProdutoFetch(produtoLocal);
    }
  }, []);

  React.useEffect(() => {
    if (produtoFetch !== null) {
      window.localStorage.setItem('produto', produtoFetch);
    }
  }, [produtoFetch]);

  function handleClick(event) {
    const produto = event.target.innerText;

    setProdutoNome(produto);
    setProdutoFetch(produto.toLowerCase());
  }

  return (
    <>
      <Header produto={produtoNome} />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button handleClick={handleClick} texto={'Notebook'} />
        <Button handleClick={handleClick} texto={'Smartphone'} />
      </div>
      <Produto produto={produtoFetch} />
    </>
  );
};

export default App;
