import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from './state';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
