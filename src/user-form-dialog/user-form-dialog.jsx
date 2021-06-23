import React from 'react';
import { connect } from 'react-redux';
import './user-form-dialog.css';
import { openUserDialog, closeUserDialog } from '../redux/actions/settings';
import { updateAuthor, updateAuthorToken } from '../redux/actions/author';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function UserFormDialog({ isOpen, openDialog, closeDialog }) {
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={openDialog}>
        Open
      </Button>
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Your Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name:"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your unique token:"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closeDialog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.settings.isUserDialogOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: () => dispatch(openUserDialog),
    closeDialog: () => dispatch(closeUserDialog),
    updateAuthor: (author) => dispatch(updateAuthor(author)),
    updateAuthorToken: (token) => dispatch(updateAuthorToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormDialog);
