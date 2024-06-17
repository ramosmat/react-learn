import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <Input id="Nome" label="Nome" />
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />

      <Button />
    </form>
  );
};

export default Form;
