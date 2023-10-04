import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  msg: "",
  type: "success",
  isEnabled: false
};

export const responseMessage = createSlice({
  name: 'responseMessage',
  initialState,
  reducers: {
    handleResponse: (state, action) => {
      state.msg = action.payload.msg;
      state.type = action.payload.type;
      state.isEnabled = action.payload.isEnabled;
      state.status = action.payload.status;
    }
  },
})

export const { handleResponse } = responseMessage.actions

export default responseMessage.reducer