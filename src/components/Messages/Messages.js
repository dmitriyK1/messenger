import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getMessagesThunk } from '../../redux/thunks';
import { messagesSelector } from '../../redux/messagesSlice';
import { Message } from '../Message';
import styles from './Messages.module.scss';
import { usePrevious } from '../../hooks/usePrevious';

const useMessagesScroll = (selectedContactId, messagesRef) => {
  const messages = useSelector(messagesSelector);
  const prevMessages = usePrevious(messages[selectedContactId]);

  useEffect(() => {
    if (prevMessages?.length < messages[selectedContactId]?.length) {
      const messagesList = messagesRef.current;
      messagesList.scrollTo({ top: messagesList.scrollHeight });
    }
  }, [messages, messages.length, messagesRef, prevMessages?.length, selectedContactId]);
}

export const Messages = (props) => {
  const messagesRef = useRef();
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector);

  useMessagesScroll(props.selectedContactId, messagesRef);

  useEffect(() => {
    dispatch(getMessagesThunk());
  }, [dispatch]);

  return messages[props.selectedContactId]
    ? <div
      ref={messagesRef}
      className={styles.messages}
    >
      {messages[props.selectedContactId].map(message => <Message key={message.id} message={message} />)}
    </div>
    : null;
};

Messages.propTypes = {
  selectedContactId: PropTypes.number,
};
