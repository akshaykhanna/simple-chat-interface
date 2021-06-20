import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postChat } from '../redux/actions/chats';
import './add-chat.css';
const AddChat = ({ postMessage }) => {
  const [msg, setMsg] = useState('');
  console.log(`msg: ${msg}`);
  const setText = (event) => {
    setMsg(event.target.value);
  };
  return (
    <div className="add-chat">
      <input onChange={setText} className="text-box" value={msg}></input>
      <button onClick={() => postMessage(msg)} className="send-btn">
        Send
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (msg) => dispatch(postChat(msg)),
  };
};

export default connect(null, mapDispatchToProps)(AddChat);
