import { combineReducers } from 'redux'
import chats from './chats'
import count from './count'

export default combineReducers({
  count:count,
  chats: chats,
})
