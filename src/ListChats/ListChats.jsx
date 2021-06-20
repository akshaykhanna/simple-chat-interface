import React, { useEffect } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from '../redux/actions/count';
import { getAllChats } from '../redux/actions/chats';

const ListChats = ({
  count,
  chats,
  handleIncrementClick,
  handleDecrementClick,
  getAllChats,
}) => {
  useEffect(() => {
    getAllChats();
  }, [getAllChats]);
  return (
    <>
      <h1>ChatList Component {count} </h1>
      <h5>{JSON.stringify(chats)}</h5>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
      <ChatMessage />
    </>
  );
};
const mapStateToProps = (state) => {
  debugger;
  return {
    count: state.count,
    chats:  state.chats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch(incrementAsync),
    handleDecrementClick: () => dispatch(decrementAsync),
    getAllChats: () => dispatch(getAllChats()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListChats);
