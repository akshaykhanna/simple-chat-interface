import { UPDATE_ALL_CHATS } from '../action-types/chats';

export default function chats(state = [], action) {
  switch (action.type) {
    case UPDATE_ALL_CHATS:
      return [ ...action.chats];
    default:
      return state;
  }
}
