import { configureStore } from '@reduxjs/toolkit';
import toolkitSlice from '../store/toolkitSlice';

export const store = configureStore({
  reducer: {
    toolkit: toolkitSlice,
  },
});
