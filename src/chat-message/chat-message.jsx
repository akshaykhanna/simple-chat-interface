import React from 'react';
import { AUTHOR } from '../config';
import './chat-message.css';

const ChatMessage = ({
  chat,
}) => {
  const {author, message, timestamp, token, _id} = chat;
  const isOutgoing = author === AUTHOR;
  const getClassName = () => (!isOutgoing ? 'incomming-msg' : 'received-msg');
  return (
    <div key={_id} className={getClassName()}>
      <div className="author">{author}</div>
      <div className="message">{message}</div>
      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatMessage;
