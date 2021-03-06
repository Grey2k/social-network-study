import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AgreeDialog({ text, onAgree, onClose, user, open }) {

    return (
        <Dialog
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            open={open}>
            <DialogTitle id="alert-dialog-slide-title">{text}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {user && `${user.firstName} ${user.lastName}`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={onAgree} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}