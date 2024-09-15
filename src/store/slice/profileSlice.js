import {createSlice} from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userId: null,
    name: null,
  },
  reducers: {
    setProfileRedux: (state, action) => {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
    },
    clearProfileRedux: state => {
      state.userId = null;
      state.name = null;
    },
  },
});

export const {setProfileRedux, clearProfileRedux} = profileSlice.actions;
export default profileSlice.reducer;
