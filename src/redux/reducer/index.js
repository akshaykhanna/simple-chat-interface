import { combineReducers } from 'redux'
import chats from './chats'
import count from './count'
import author from './author'

export default combineReducers({
  count:count,
  chats: chats,
  author
})
