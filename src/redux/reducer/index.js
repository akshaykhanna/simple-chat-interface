import { combineReducers } from 'redux'
import chats from './chats'
import author from './author'

export default combineReducers({
  chats: chats,
  author
})
