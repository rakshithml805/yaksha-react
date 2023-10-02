import { createSlice } from '@reduxjs/toolkit';
export interface IResponseMessageStore {
  msg: string;
  type: "error" | "warning" | "info" | "success";
  isEnabled: boolean;
  status?: number;
}
const initialState: IResponseMessageStore = {
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