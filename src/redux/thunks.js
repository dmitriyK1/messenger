import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  api.getContacts,
);

export const getMessagesThunk = createAsyncThunk(
  'messages/getMessages',
  api.getMessages,
);
