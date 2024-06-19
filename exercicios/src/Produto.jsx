import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => {
          return response.json();
        })
        .then((dados) => setDados(dados));
    }
  }, [produto]);

  if (dados === null) {
    return null;
  } else {
    return (
      <div>
        <h2>{dados.nome}</h2>
        <p>{dados.descricao}</p>
        <p>Preço: R$ {dados.preco},00</p>
      </div>
    );
  }
};

export default Produto;
