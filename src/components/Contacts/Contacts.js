import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import { getContactsThunk } from '../../redux/thunks';
import { contactsSelector } from '../../redux/contactsSlice';
import variables from '../../styles/variables.module.scss';
import styles from './Contacts.module.scss';
import { stringAvatar } from '../../utils';

export const Contacts = (props) => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (<Drawer
    sx={{
      width: variables.drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {
        width: variables.drawerWidth, boxSizing: 'border-box',
      },
    }}
    variant='permanent'
    anchor='left'
  >
    <Toolbar />
    <Divider />
    <List>
      {contacts.map((contact) => (<ListItem selected={contact.id === props.currentUserId} button key={contact.name}
                                            onClick={() => props.onSelect(contact.id)}>
        <Avatar {...stringAvatar(contact.name)} />
        <ListItemText disableTypography className={styles.contactName} primary={contact.name} />
      </ListItem>))}
    </List>
  </Drawer>);
};

Contacts.propTypes = {
  currentUserId: PropTypes.number, onSelect: PropTypes.func.isRequired,
};
