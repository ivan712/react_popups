import React, { useState } from 'react';

import './App.css';

import Overlay from './components/Overlay';

import AppealPopup from './components/AppealPopup';
import SecondAppealPopup from './components/SecondAppealPopup/SecondAppealPopup.jsx';

function App() {
  console.log('hello');
  const [isOverlayToggle, setIsOverlayToggle] = useState(false);
  const [isAppealPopupToggle, setIsAppealPopupToggle] = useState(false);
  const [isSecondAppealPopupToggle, setIsSecondAppealPopupToggle] =
    useState(false);

  const closeAppealPopup = () => {
    setIsOverlayToggle(false);
    setIsAppealPopupToggle(false);
  };
  const closeSecondAppealPopup = () => {
    setIsOverlayToggle(false);
    setIsSecondAppealPopupToggle(false);
  };

  return (
    <div className='App'>
      <button
        type='button'
        onClick={() => {
          setIsOverlayToggle(true);
          setIsAppealPopupToggle(true);
        }}
      >
        Включить попап обращение
      </button>
      <button
        type='button'
        onClick={() => {
          setIsOverlayToggle(true);
          setIsSecondAppealPopupToggle(true);
        }}
      >
        Включить второй попап обращение
      </button>
      <Overlay active={isOverlayToggle}>
        <AppealPopup
          active={isAppealPopupToggle}
          closeFunc={closeAppealPopup}
        />
        <SecondAppealPopup
          propPopupNum={'255'}
          active={isSecondAppealPopupToggle}
          closeFunc={closeSecondAppealPopup}
        />
      </Overlay>
    </div>
  );
}

export default App;
