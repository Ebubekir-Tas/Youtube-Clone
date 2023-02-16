import { createSlice } from '@reduxjs/toolkit';

export const UserStore = createSlice({
  name: 'users',
  initialState: {
    user: {
      email: '',
    }
  },
  reducers: {
    SetUserEmail: (state, action) => ({
      ...state,
      user: {
        email: action.payload,
      }
    })
  }
});

export const {
  SetUserEmail
} = UserStore.actions;

export const userStore = state => state.users

export default UserStore.reducer
