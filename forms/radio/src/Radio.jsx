import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label htmlFor="" key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
