import React from 'react';

const Input = ({ label, type, onFormDataChange }) => {
  const labelInput = label.toLowerCase();

  const [value, setValue] = React.useState('');

  function handleChange(event) {
    const { id, value } = event.target;
    setValue(value);

    onFormDataChange(id, value);
  }

  return (
    <>
      <label htmlFor={labelInput}>{label}</label>
      <input
        type={type}
        id={labelInput}
        name={labelInput}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
