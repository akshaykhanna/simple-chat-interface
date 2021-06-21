import React, { useEffect } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from '../redux/actions/count';
import { getChats } from '../redux/actions/chats';
import { updateAuthor, updateAuthorToken } from '../redux/actions/author';
import { AUTHOR, TOKEN } from '../config';

const ListChats = ({
  count,
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
    <>
      <h5>{JSON.stringify(chats)}</h5>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
      <ChatMessage />
    </>
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
