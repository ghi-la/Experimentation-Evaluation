'use client';

import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from '../store/actions';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: any) => state.app.notification);

  function handleClose() {
    dispatch(closeNotification());
  }

  return (
    <Snackbar open={notification.isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={notification.severity}
        variant="filled"
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
