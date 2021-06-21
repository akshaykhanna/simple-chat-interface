import React from 'react';
import './chat-message.css';

const ChatMessage = ({
  isOutgoing = false,
  author = 'Tom',
  message = 'Hello world',
  timestamp = 1624093945675,
  token = 'GEm3DtHyHYnC',
  id = '60cdb4f9b13b0d001ac5515a',
}) => {
  const getClassName = () => (!isOutgoing ? 'incomming-msg' : 'received-msg');
  return (
    <div key={id} className={getClassName()}>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatMessage;
