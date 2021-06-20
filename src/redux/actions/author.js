import { UPDATE_AUTHOR, UPDATE_AUTHOR_TOKEN } from '../action-types/author';
export const updateAuthor = (name) => ({
  type: UPDATE_AUTHOR,
  name,
});

export const updateAuthorToken = (token) => ({
  type: UPDATE_AUTHOR_TOKEN,
  token,
});
