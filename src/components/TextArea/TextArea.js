import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

import styles from './TextArea.module.scss';
import { addMessage } from '../../redux/messagesSlice';
import { userIdSelector } from '../../redux/userSlice';

export const TextArea = (props) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(userIdSelector);
  const inputRef = useRef();

  const handleKeyDown = useCallback(ev => {
    const message = inputRef.current.value;

    if (ev.code === 'Enter') {
      ev.preventDefault();

      if (message.trim()) {
        dispatch(addMessage({
          recipientId: props.selectedContactId,
          body: message,
          userId: currentUserId,
        }));

        inputRef.current.value = '';
      }
    }
  }, [currentUserId, dispatch, props.selectedContactId]);

  return (
    <TextField
      multiline
      rows={5}
      inputRef={inputRef}
      className={styles.field}
      onKeyDown={handleKeyDown}
    />
  );
};

TextArea.propTypes = {
  selectedContactId: PropTypes.number,
};
