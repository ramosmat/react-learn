import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChange(event) {
    if (event.target.checked) {
      setValue([...value, event.target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== event.target.value));
    }
  }

  return (
    <div>
      {options.map((option) => (
        <label htmlFor="" key={option}>
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
            checked={value.includes(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
