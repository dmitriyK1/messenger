import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import styles from './Message.module.scss';
import { userIdSelector } from '../../redux/userSlice';

export const Message = (props) => {
  const currentUserId = useSelector(userIdSelector);

  return <div className={cx(styles.message, {
    [styles.mine]: props.message.userId === currentUserId,
  })}>
    <span className={styles.text}>{props.message.body}</span>
  </div>;
};

Message.propTypes = {
  text: PropTypes.string,
};
