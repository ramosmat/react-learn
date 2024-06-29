import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      {...props}
    >
      <option value="" disabled selected>
        Selecione...
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
