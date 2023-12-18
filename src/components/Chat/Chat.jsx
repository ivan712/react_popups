import React, { useState } from 'react';

const Chat = ({ className = '', propMessages = [] }) => {
  const [messages, setMessages] = useState(propMessages);

  return (
    <div className={`chat ${className}`}>
      <div className='chat__messages-list'>
        {messages &&
          messages.map((message) => (
            <div className='chat__message'>
              <span className='chat__message-date'>{message.timestamp}</span>
              <span
                className={`chat__message-author ${
                  message.isAdmin ? 'chat__message-author_main' : ''
                }`}
              >
                {message.author}:
              </span>
              <p className='chat__message-text'>
                {message.text}
                {message.files &&
                  message.files.map((file) => (
                    <a href={file.url}>{file.name}</a>
                  ))}
              </p>
            </div>
          ))}
      </div>
      <form className='chat__menu'>
        <div className='chat__menu-wrapper'>
          <p className='chat__menu-label-caption'>Введите комментарий</p>
          <div className='chat__input-wrapper'>
            <input type='text' className='chat__input' />
            <label className='chat__menu-label'>
              <div className='chat__menu-label-file-icon'>
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
        </div>
        <button type='submit' className='chat__submit-btn'>
          <svg
            height='512'
            viewBox='0 0 512 512'
            width='512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title />
            <path d='M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z' />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;
