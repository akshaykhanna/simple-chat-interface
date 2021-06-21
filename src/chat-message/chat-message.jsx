import React from 'react';
import { AUTHOR } from '../config';
import './chat-message.css';
import { unixToDateTime } from '../utils';

const ChatMessage = ({ chat }) => {
  const { author, message, timestamp, token, _id } = chat;
  const isOutgoing = author === AUTHOR;
  const getClassNames = () => {
    const prefix = 'chat-box';
    const suffix = !isOutgoing ? 'incomming-msg' : 'outgoing-msg';
    return `${prefix} ${suffix}`;
  };
  return (
    <div className={`${!isOutgoing ? 'container-left' : 'container-right'}`}>
      <div key={_id} className={getClassNames()}>
        {!isOutgoing && <div className="author">{author}</div>}
        <div className="message">{message}</div>
        <div className="timestamp">{unixToDateTime(timestamp)}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
