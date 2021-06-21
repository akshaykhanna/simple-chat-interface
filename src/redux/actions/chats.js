import { baseAPIUrl } from '../../config';
import { UPDATE_ALL_CHATS } from '../action-types/chats';
export const setAllChats = (chats = []) => ({
  type: UPDATE_ALL_CHATS,
  chats: chats,
});

export function getChats(limit = 0, since = 0) {
  let params = {};
  if (limit > 0) {
    params = { ...params, limit };
  }
  if (since > 0) {
    params = { ...params, since };
  }
  return getAllChats(baseAPIUrl, params);
}

const getQueryParams = (params) =>
  Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

export function getAllChats(url = baseAPIUrl, params = {}) {
  return (dispatch, getState) => {
    const token = getState().author.token;
    url = `${baseAPIUrl}/?${getQueryParams({ ...params, token })}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
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
      body: JSON.stringify({ message, author }),
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
