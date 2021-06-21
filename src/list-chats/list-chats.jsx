import React, { useEffect } from 'react';
import ChatMessage from '../chat-message/chat-message';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from '../redux/actions/count';
import { getChats } from '../redux/actions/chats';
import { updateAuthor, updateAuthorToken } from '../redux/actions/author';
import { AUTHOR, TOKEN } from '../config';
import './list-chats.css';

const ListChats = ({
  chats,
  handleIncrementClick,
  handleDecrementClick,
  getChats,
  updateAuthor,
  updateAuthorToken,
}) => {
  useEffect(() => {
    updateAuthor(AUTHOR);
    updateAuthorToken(TOKEN);
    getChats();
  }, [getChats, updateAuthor, updateAuthorToken]);
  return (
    <div className="chat-list">
      {/* <h5>{JSON.stringify(chats)}</h5> */}
      <ChatMessage  className="incomming-msg" />
      <ChatMessage isOutgoing className="received-msg" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
    chats: state.chats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch(incrementAsync),
    handleDecrementClick: () => dispatch(decrementAsync),
    getChats: () => dispatch(getChats()),
    updateAuthor: (author) => dispatch(updateAuthor(author)),
    updateAuthorToken: (token) => dispatch(updateAuthorToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListChats);
