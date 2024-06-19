import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);

  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao(`Produto adicionado. Carrinho: ${carrinho + 1}`);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 3000);
  }

  return (
    <div>
      <button onClick={handleClick}>Adicionar ao Carrinho</button>
      <p>{notificacao}</p>
    </div>
  );
};

export default App;
