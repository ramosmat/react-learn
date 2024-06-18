import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [itens, setItens] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      setItens((itens) => [...itens, `Item ${contar + 1}`]);
      return contar + 1;
    });
  }

  return (
    <div>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
