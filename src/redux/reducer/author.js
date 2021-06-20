import { UPDATE_AUTHOR, UPDATE_AUTHOR_TOKEN } from '../action-types/author';

export default function author(state = { name: '', token: '' }, action) {
  switch (action.type) {
    case UPDATE_AUTHOR:
      return { ...state, name: action.name };
    case UPDATE_AUTHOR_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}
