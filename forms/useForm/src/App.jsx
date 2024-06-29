import React from 'react';
import Input from './Input';
import useForm from './hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('nome');
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="Nome" type="text" label="Nome" {...nome} />
      <Input id="Sobrenome" type="text" label="Sobrenome" {...sobrenome} />
      <Input
        id="cep"
        type="text"
        label="CEP"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        id="Email"
        type="text"
        label="Email"
        placeholder="email@example.email"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
