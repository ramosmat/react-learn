import React from 'react';

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((dados) => setDados(dados));
    }
  }, [produto]);

  if (dados == null) {
    return null;
  } else {
    return (
      <div>
        <h3>{dados.nome}</h3>
        <p>{dados.descricao}</p>
        <p>R$ {dados.preco}</p>
      </div>
    );
  }
};

export default Produto;
