import React, { useState } from 'react';

const Input = ({ classname = '', propMaxValue = 255 }) => {
  const [value, setValue] = useState('');
  const [maxValue, setMaxValue] = useState(propMaxValue);
  const [valueLength, setValueLength] = useState(value.length);

  const setInputValue = (e) => {
    if (e.target.value.length >= maxValue) return;
    setValue(e.target.value);
    setValueLength(e.target.value.length);
  };

  return (
    <div className='input-wrapper'>
      <input
        className={`input ${classname}`}
        type='text'
        value={value}
        onChange={setInputValue}
      />
      <span className='input-wrapper__counter'>
        {valueLength}/{maxValue}
      </span>
    </div>
  );
};

export default Input;
