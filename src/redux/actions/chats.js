import { baseAPIUrl } from '../../config';
import { UPDATE_ALL_CHATS } from '../action-types/chats';
export const setAllChats = (chats = []) => ({
  type: UPDATE_ALL_CHATS,
  chats: chats,
});

export function getAllChats() {
  return (dispatch, getState) => {
    const token = getState().author.token;
    const url = `${baseAPIUrl}/?token=${token}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('res:', res);
        dispatch(setAllChats(res));
      });
  };
}
export function postChat(message) {
  return (dispatch, getState) => {
    const author = getState().author.name;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, author })
    };
    const token = getState().author.token;
    const url = `${baseAPIUrl}/?token=${token}`;
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log('res:', res);
      });
  };
}
