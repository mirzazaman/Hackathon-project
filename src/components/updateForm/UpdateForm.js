import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import useUpdateForm from './useUpdateForm';


export default function UpdateForm({ item }) {
    const [enterHandle, open, handleClickOpen, handleClose, updateHandler, updateTask, setUpdateTask] = useUpdateForm()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Button color="primary" onClick={() => { handleClickOpen(item) }}>
                Update
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Update"}</DialogTitle>
                <DialogContent>

                    <TextField
                    placeholder="Updated Task"
                    value={updateTask}
                    autoFocus
                    onChange={(e) => { setUpdateTask(e.target.value) }}
                    onKeyPress={(e) => { enterHandle(e, item) }}
                    />

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => { updateHandler(item) }} color="primary" autoFocus>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}