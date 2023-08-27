import { configureStore } from '@reduxjs/toolkit';
import giaySlice from './slice/giaySlice';

export const store = configureStore({
  reducer: {
    giay: giaySlice,
  },
});
