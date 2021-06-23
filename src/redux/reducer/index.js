import { combineReducers } from 'redux';
import chats from './chats';
import author from './author';
import settings from './settings';

export default combineReducers({
  chats: chats,
  author,
  settings,
});
