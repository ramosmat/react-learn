import React from 'react';

const Button = ({ nome, fetchApi }) => {
  function handleClick(event) {
    const produto = event.target.innerText.toLowerCase();

    fetchApi(produto);
  }

  // button that receives the name as an argument
  return <button onClick={handleClick}>{nome}</button>;
};

export default Button;
