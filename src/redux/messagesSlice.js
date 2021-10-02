import { createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash-es/cloneDeep';

import { getMessagesThunk } from './thunks';
import { last } from 'lodash-es';

const initialState = {
  messagesByUserId: {},
};

export const messagesSlicePath = 'messages';

const messagesSlice = createSlice({
  name: messagesSlicePath,
  initialState: cloneDeep(initialState),
  reducers: {
    addMessage(state, action) {
      const { recipientId, ...message } = action.payload;
      const messages = state.messagesByUserId[recipientId];

      messages.push({ ...message, id: last(messages).id + 1 });
    },
  },
  extraReducers: {
    [getMessagesThunk.fulfilled]: (state, action) => {
      state.messagesByUserId = action.payload.reduce((acc, nextValue) => {
        const messagesByUserId = acc[nextValue.userId] || (acc[nextValue.userId] = []);

        messagesByUserId.push(nextValue);

        return acc;
      }, {});
    },
  },
});

const stateSelector = (state) => state[messagesSlicePath];

export const messagesSelector = (state) =>
  stateSelector(state).messagesByUserId;

export const { addMessage, removeMessage, editMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
