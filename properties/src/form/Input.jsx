import React from 'react';

const Input = ({ id, label, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </>
  );
};

export default Input;
