import {configureStore} from '@reduxjs/toolkit';
import profileReducer from '../store/slice/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});
