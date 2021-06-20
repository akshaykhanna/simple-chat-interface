import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from '../redux/actions/count';
const ListChats = ({ count, handleIncrementClick, handleDecrementClick }) => {
  return (
    <>
      <h1>ChatList Component {count} </h1>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
      <ChatMessage />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch(incrementAsync),
    handleDecrementClick: () => dispatch(decrementAsync),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListChats);
