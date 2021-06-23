import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GET_CHATS_LIMIT } from '../config';
import { getChats, postChat } from '../redux/actions/chats';
import './add-chat.css';
import { getYesterdayUnixTime } from '../utils';

const AddChat = ({ postMessage, getChats }) => {
  const [msg, setMsg] = useState('');
  const setText = (event) => {
    setMsg(event.target.value);
  };
  const sentMsgAndUpdateChats = () => {
    postMessage(msg);
    setMsg('');
    getChats(GET_CHATS_LIMIT, getYesterdayUnixTime());
  }
  return (
    <div className="add-chat">
      <input onChange={setText} className="text-box" placeholder="Message" value={msg}></input>
      <button onClick={sentMsgAndUpdateChats} className="send-btn">
        Send
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (msg) => dispatch(postChat(msg)),
    getChats: (limit, since) => dispatch(getChats(limit, since)),
  };
};

export default connect(null, mapDispatchToProps)(AddChat);
