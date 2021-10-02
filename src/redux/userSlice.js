import { createSlice } from '@reduxjs/toolkit';
import cloneDeep from 'lodash-es/cloneDeep';

const CURRENT_USER_ID_MOCK = 777;

const initialState = {
  id: CURRENT_USER_ID_MOCK,
};

export const userSlicePath = 'user';

const userSlice = createSlice({
  name: userSlicePath,
  initialState: cloneDeep(initialState),
});

const stateSelector = (state) => state[userSlicePath];

export const userIdSelector = (state) =>
  stateSelector(state).id;

export default userSlice.reducer;
