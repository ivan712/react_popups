import React, { useState } from 'react';

const Textarea = ({ className = '', propMaxValue = 255 }) => {
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
      <textarea
        value={value}
        onChange={setInputValue}
        className={`textarea ${className}`}
      ></textarea>
      <span className='input-wrapper__counter'>
        {valueLength}/{maxValue}
      </span>
      <label className='input-wrapper__file-label'>
        <div className='input-wrapper__file-icon'>
          <svg
            enable-background='new 0 0 50 50'
            height='50px'
            id='Layer_1'
            version='1.1'
            viewBox='0 0 50 50'
            width='50px'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect fill='none' height='50' width='50' />
            <path
              d='M14.742,28.793  c-1.558,1.559-1.558,4.085,0,5.643c1.558,1.559,4.084,1.559,5.642,0l15.104-15.104'
              fill='none'
              stroke='#868686'
              stroke-linecap='round'
              stroke-miterlimit='10'
              stroke-width='2'
            />
            <path
              d='M27.025,10.869L7.336,30.557  c-3.115,3.115-3.115,8.17,0.001,11.285s8.169,3.115,11.284,0l24.627-24.626c2.336-2.336,2.336-6.126,0-8.463  c-2.338-2.338-6.129-2.337-8.465,0l-20.041,20.04'
              fill='none'
              stroke='#868686'
              stroke-linecap='round'
              stroke-miterlimit='10'
              stroke-width='2'
            />
          </svg>
        </div>
        <input type='file' style={{ display: 'none' }} />
      </label>
    </div>
  );
};

export default Textarea;
