import React from 'react';

const Button = ({ handleClick, texto }) => {
  return <button onClick={handleClick}>{texto}</button>;
};

export default Button;
