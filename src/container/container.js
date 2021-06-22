import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AUTHOR, TOKEN } from '../config';
import './container.css';
import { updateAuthor, updateAuthorToken } from '../redux/actions/author';
import { getChats } from '../redux/actions/chats';

const Container = ({ children, updateAuthor, updateAuthorToken, getChats }) => {
  useEffect(() => {
    updateAuthor(AUTHOR);
    updateAuthorToken(TOKEN);
    getChats();
  }, [updateAuthor, updateAuthorToken, getChats]);

  return <div className="conatiner">{children}</div>;
};

const mapStateToProps = (state) => {
  return {
    author: state.author,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChats: () => dispatch(getChats()),
    updateAuthor: (author) => dispatch(updateAuthor(author)),
    updateAuthorToken: (token) => dispatch(updateAuthorToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
