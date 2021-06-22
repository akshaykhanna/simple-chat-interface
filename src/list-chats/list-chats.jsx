import React from 'react';
import ChatMessage from '../chat-message/chat-message';
import { connect } from 'react-redux';
import './list-chats.css';

const ListChats = ({ chats }) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <ChatMessage key={chat._id} chat={chat} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    chats: state.chats,
  };
};

export default connect(mapStateToProps, null)(ListChats);
