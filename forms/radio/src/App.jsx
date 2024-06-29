import React from 'react';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [produto, setProduto] = React.useState('');

  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');

  return (
    <form>
      <h2>Cores</h2>
      <Radio
        options={['Azul', 'Vermelho', 'Verde']}
        value={cor}
        setValue={setCor}
      />
      <h2>Frutas</h2>
      <Radio
        options={['Uva', 'Morango', 'Banana']}
        value={frutas}
        setValue={setFrutas}
      />
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input label="Nome" id="nome" value={nome} setValue={setNome} />
      <Input
        label="Email"
        id="email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
