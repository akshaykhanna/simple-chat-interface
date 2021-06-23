import { OPEN_USER_DIALOG, CLOSE_USER_DIALOG } from '../action-types/settings';

export default function settings(state = { isUserDialogOpen: false }, action) {
  switch (action.type) {
    case OPEN_USER_DIALOG:
      return { ...state, isUserDialogOpen: true };
    case CLOSE_USER_DIALOG:
      return { ...state, isUserDialogOpen: false };
    default:
      return state;
  }
}
