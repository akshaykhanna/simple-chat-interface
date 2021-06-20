import React from 'react';
import './chat-message.css';

const ChatMessage = ({
  author= 'Tom',
  message= 'Hello world',
    timestamp= 1624093945675,
    token= 'GEm3DtHyHYnC',
    id= '60cdb4f9b13b0d001ac5515a',
}) => {
  return (
    <div key={id} className="chat-box">
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatMessage;
