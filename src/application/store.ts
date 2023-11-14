import { configureStore } from '@reduxjs/toolkit';

import OptionsReducer from './data/options/slice';
import UserReducer from './data/user/slice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    options: OptionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
