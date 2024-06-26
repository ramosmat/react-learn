import React from 'react';
import Input from './Input';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const [formData, setFormData] = React.useState({});
  const [response, setResponse] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setStatus('Enviando...');
    console.log(status);

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(formData),
    }).then((response) => {
      setResponse(response);
    });
  }

  function onFormDataChange(id, value) {
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  return (
    <>
      {(response && response.ok && <p>Usuário Criado!</p>) || <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" onFormDataChange={onFormDataChange} />
        <Input label="Email" type="email" onFormDataChange={onFormDataChange} />
        <Input
          label="Senha"
          type="password"
          onFormDataChange={onFormDataChange}
        />
        <Input label="CEP" type="text" onFormDataChange={onFormDataChange} />
        <Input label="Rua" type="text" onFormDataChange={onFormDataChange} />
        <Input
          label="Numero"
          type="number"
          onFormDataChange={onFormDataChange}
        />
        <Input label="Bairro" type="text" onFormDataChange={onFormDataChange} />
        <Input label="Cidade" type="text" onFormDataChange={onFormDataChange} />
        <Input label="Estado" type="text" onFormDataChange={onFormDataChange} />

        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
