import { combineReducers } from 'redux'
import chat from './chats'
import count from './count'

export default combineReducers({
  count:count,
  chats: chat,
})
