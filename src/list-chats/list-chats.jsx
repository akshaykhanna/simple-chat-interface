import React, { useEffect } from 'react';
import ChatMessage from '../chat-message/chat-message';
import { connect } from 'react-redux';
import { getChats } from '../redux/actions/chats';
import { updateAuthor, updateAuthorToken } from '../redux/actions/author';
import { AUTHOR, TOKEN } from '../config';
import './list-chats.css';

const ListChats = ({ chats, getChats, updateAuthor, updateAuthorToken }) => {
  useEffect(() => {
    updateAuthor(AUTHOR);
    updateAuthorToken(TOKEN);
    getChats();
  }, [getChats, updateAuthor, updateAuthorToken]);
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

const mapDispatchToProps = (dispatch) => {
  return {
    getChats: () => dispatch(getChats()),
    updateAuthor: (author) => dispatch(updateAuthor(author)),
    updateAuthorToken: (token) => dispatch(updateAuthorToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListChats);
