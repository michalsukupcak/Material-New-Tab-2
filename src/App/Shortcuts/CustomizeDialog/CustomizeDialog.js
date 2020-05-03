import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export const CustomizeDialog = ({ open, onClose }) => {
    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Customize Apps</DialogTitle>
                <DialogContent>
                    <div>Select and reorder app shortcuts:</div>
                </DialogContent>
                <DialogActions>
                    <Button>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
