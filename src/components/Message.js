import React from 'react';
import ReactEmoji from 'react-emoji';
import botIcon from './botIcon.png';

import '../styles/Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundBlue">
            <p className="messageText colorBlack">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLightPink">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
        )
  );
}

export default Message;