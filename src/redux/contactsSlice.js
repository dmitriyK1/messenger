import { createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash-es/cloneDeep';

import { getContactsThunk } from './thunks';

const initialState = {
  items: [],
};

export const contactsSlicePath = 'contacts';

const contactsSlice = createSlice({
  name: contactsSlicePath,
  initialState: cloneDeep(initialState),
  extraReducers: {
    [getContactsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

const stateSelector = (state) => state[contactsSlicePath];

export const contactsSelector = (state) =>
  stateSelector(state).items;

export default contactsSlice.reducer;
