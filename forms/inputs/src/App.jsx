import React from 'react';
import Input from './Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
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
