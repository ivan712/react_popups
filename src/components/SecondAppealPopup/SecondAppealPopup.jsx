import React, { useState } from 'react';

import Table from '../UI/Table';
import Chat from '../Chat';

const SecondAppealPopup = ({
  active = false,
  closeFunc,
  propPopupNum = 255,
}) => {
  const [popupNum, setPopupNum] = useState(propPopupNum);

  return (
    <div className={`popup popup_secondAppeal ${active ? 'popup_active' : ''}`}>
      <button onClick={closeFunc} type='button' className='popup__close-btn'>
        <svg
          fill='none'
          height='24'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z'
            fill='currentColor'
          />
        </svg>
      </button>
      <p className='popup__heading'>
        Обращение №{' '}
        <span className='popup__heading popup__heading_blue'>{popupNum}</span>
      </p>
      <Table
        className={'popup__table'}
        propTableHeader={['Тема обращения', 'ФИО', 'Почта', 'Описание']}
        propTableBody={[
          ['Не начислены токены', 'Иванов И.И.', ' 123@abc.ru', 'Ла-ла-ла'],
          ['Не начислены токены', 'Иванов И.И.', ' 123@abc.ru', 'Ла-ла-ла'],
          ['Не начислены токены', 'Иванов И.И.', ' 123@abc.ru', 'Ла-ла-ла'],
          ['Не начислены токены', 'Иванов И.И.', ' 123@abc.ru', 'Ла-ла-ла'],
          ['Не начислены токены', 'Иванов И.И.', ' 123@abc.ru', 'Ла-ла-ла'],
          ['Не начислены токены', 'Иванов И.И.', ' 123@abc.ru', 'Ла-ла-ла'],
        ]}
      />
      <p className='popup__heading'>Комментарии</p>
      <Chat
        propMessages={[
          {
            id: 1,
            timestamp: '12.12.2023 12:14',
            author: 'Администратор',
            text: ' Добрый день! Пожалуйста, пришлите скрин.',
            isAdmin: true,
          },
          {
            id: 2,
            timestamp: '12.12.2023 12:15',
            author: 'Никита',
            text: 'Добрый день! Это будет длинное собщение, действительно, очень длинное сообщение, пример достаточно длинного сообщения, как вам это длинное сообщения, пример очень длинного очень-очень длинного сообщения, я думаю, вы понимаете насколько это длинное сообщение',
            files: [
              {
                url: 'https://ya.ru',
                name: 'Ошибка.png',
                type: 'png',
              },
            ],
          },
          {
            id: 3,
            timestamp: '12.12.2023 12:15',
            author: 'Никита Петрович',
            text: 'Добрый день! Это будет длинное собщение, действительно, очень длинное сообщение, пример достаточно длинного сообщения, как вам это длинное сообщения, пример очень длинного очень-очень длинного сообщения, я думаю, вы понимаете насколько это длинное сообщение',
          },
          {
            id: 4,
            timestamp: '12.12.2023 12:15',
            author: 'Никита Петрович',
            text: 'Добрый день!',
          },
        ]}
        className={'popup__chat'}
      />
    </div>
  );
};

export default SecondAppealPopup;
