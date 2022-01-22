import {
  selectShowSnackbar,
  selectSnackbarAction,
  selectSnackbarActionText,
  selectSnackbarColor,
  selectSnackbarMessage,
} from '@src/redux/snackbar/snackbar.selectors';
import { hideSnackbar } from '@src/redux/snackbar/snackbar.slice';
import React from 'react';

import Snackbar from 'react-native-snackbar-component';
import { useDispatch, useSelector } from 'react-redux';

const timeout = 4000;

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const show = useSelector(selectShowSnackbar);
  const message = useSelector(selectSnackbarMessage);
  const color = useSelector(selectSnackbarColor);
  const actionLabel = useSelector(selectSnackbarActionText);
  const actionPress = useSelector(selectSnackbarAction);

  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(hideSnackbar());
      }, timeout);
    }
  }, [show]);

  return (
    <Snackbar
      visible={show}
      autoHidingTime={timeout}
      actionText={actionLabel || ''}
      actionHandler={actionPress}
      textMessage={message}
      backgroundColor={color}
    />
  );
};

export default ErrorHandler;
