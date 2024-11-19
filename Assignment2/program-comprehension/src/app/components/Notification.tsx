'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
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
    <Snackbar
      open={notification.isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={notification.severity}
        variant="filled"
        iconMapping={{
          info: <FavoriteIcon fontSize="inherit" />,
        }}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
