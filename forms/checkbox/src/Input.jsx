import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        {...props}
      />
      {props.value}
    </>
  );
};

export default Input;
