import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAllChats, postChat } from '../redux/actions/chats';
import './add-chat.css';
const AddChat = ({ postMessage, getAllChats }) => {
  const [msg, setMsg] = useState('');
  const setText = (event) => {
    setMsg(event.target.value);
  };
  const sentMsgAndUpdateChats = () => {
    postMessage(msg);
    getAllChats();
  }
  return (
    <div className="add-chat">
      <input onChange={setText} className="text-box" value={msg}></input>
      <button onClick={sentMsgAndUpdateChats} className="send-btn">
        Send
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (msg) => dispatch(postChat(msg)),
    getAllChats: () => dispatch(getAllChats()),
  };
};

export default connect(null, mapDispatchToProps)(AddChat);
