import { baseAPIUrl, token } from '../../config';
import { UPDATE_ALL_CHATS } from '../action-types/chats';
export const setAllChats = (chats = []) => ({
  type: UPDATE_ALL_CHATS,
  chats: chats,
});

export function getAllChats() {
  const url = `${baseAPIUrl}/?token=${token}`;
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('res:', res);
        dispatch(setAllChats(res));
      });
  };
}
export function postChat(message, author='akshay') {
  const url = `${baseAPIUrl}/?token=${token}`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, author })
};
  return (dispatch) => {
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log('res:', res);
      });
  };
}
