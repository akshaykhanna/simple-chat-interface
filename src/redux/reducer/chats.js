import { UPDATE_ALL_CHATS } from '../action-types/chat';

export default function chats(state = [], action) {
  switch (action.type) {
    case UPDATE_ALL_CHATS:
      return [ ...action.chats];
    default:
      return state;
  }
}
