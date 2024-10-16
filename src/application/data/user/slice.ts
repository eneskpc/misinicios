import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from './state';

import { Slices } from '@/src/application/data/slices';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: Slices.USER,
  initialState,
  reducers: {},
});

export default userSlice.reducer;
