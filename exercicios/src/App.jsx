import React from 'react';
import Button from './Button';
import Produto from './Produto';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function fetchApi(produto) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const result = await response.json();

    setDados(result);
    setCarregando(false);
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button fetchApi={fetchApi} nome="Tablet" />
        <Button fetchApi={fetchApi} nome="Smartphone" />
        <Button fetchApi={fetchApi} nome="Notebook" />
      </div>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
