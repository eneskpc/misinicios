import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Menu } from '../models/menu';
import type { OptionsState } from './state';

const initialState: OptionsState = {
  breadcrumb: [],
};

const slice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setBreadcrumb: (state, action: PayloadAction<Menu[]>) => {
      state.breadcrumb = action.payload;
    },
  },
});

export const { setBreadcrumb } = slice.actions;

export default slice.reducer;
