import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
export const loggedInUserDetails = createSlice({
  name: 'loggedInUserDetails',
  initialState,
  reducers: {
    handleLoggedInUserData: (state, action) => {
      localStorage.setItem("loggedInUserDetails", JSON.stringify(action.payload));
      state = {...action.payload};
    }
  },
})

export const { handleLoggedInUserData } = loggedInUserDetails.actions

export default loggedInUserDetails.reducer