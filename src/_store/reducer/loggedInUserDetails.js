import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: null
};
export const loggedInUserDetails = createSlice({
  name: 'loggedInUserDetails',
  initialState,
  reducers: {
    handleLoggedInUserData: (state, action) => {
      localStorage.setItem("loggedInUserDetails", JSON.stringify(action.payload));
      state.data = action.payload;
      state.loading = false;
    },
    handleClearLoginState: (state, action) => {
      localStorage.clear();
      sessionStorage.clear();
      state.data = null;
      state.loading = true;
    }
  },
})

export const { handleLoggedInUserData, handleClearLoginState } = loggedInUserDetails.actions

export default loggedInUserDetails.reducer