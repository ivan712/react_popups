import React from 'react';

const Overlay = ({ children, active }) => {
  return (
    <div className={`overlay ${active ? 'overlay_active' : ''}`}>
      {children}
    </div>
  );
};

export default Overlay;
