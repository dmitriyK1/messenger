import { contactsSlicePath, default as contactsReducer } from './contactsSlice';
import { messagesSlicePath, default as messagesReducer } from './messagesSlice';
import { userSlicePath, default as userReducer } from './userSlice';

export const rootReducer = {
  [contactsSlicePath]: contactsReducer,
  [messagesSlicePath]: messagesReducer,
  [userSlicePath]: userReducer,
};
