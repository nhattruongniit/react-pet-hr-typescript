import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// components
import TypographyBase from '../atoms/TypographyBase';

type IProps = DialogProps & {
  dialogTitle: string;
  children?: React.ReactNode;
  textButton?: string;
  handleClose: () => void;
};

export default function DialogAlert({ dialogTitle, children, textButton = 'Agree', handleClose, ...props }: IProps) {
  return (
    <div>
      <Dialog onClose={handleClose} fullWidth {...props}>
        <DialogTitle>
          <TypographyBase variant="h4" text={dialogTitle} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            {textButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
