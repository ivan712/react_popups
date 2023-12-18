import React, { useState } from 'react';

const Table = ({
  className = '',
  propTableHeader = [''],
  propTableBody = [['']],
}) => {
  const [tableHeader, setTableHeader] = useState(propTableHeader);
  const [tableBody, setTableBody] = useState(propTableBody);

  return (
    <div className={`table ${className}`}>
      <div className='table__wrapper'>
        <div className='table__header'>
          {tableHeader &&
            tableHeader.map((caption) => (
              <div className='table__header-col'>{caption}</div>
            ))}
        </div>
        <div className='table__body'>
          {tableBody &&
            tableBody.map((arr) => (
              <div className='table__row'>
                {arr.map((value) => (
                  <div className='table__cell'>{value}</div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
