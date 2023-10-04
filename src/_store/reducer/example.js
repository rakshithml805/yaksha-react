import { createSlice } from '@reduxjs/toolkit'
const initialState = {
};

export const exampleDetails = createSlice({
  name: 'example',
  initialState,
  reducers: {
    handleExampleDetail: (state, action) => {
      localStorage.setItem("exampleDetails", JSON.stringify(action.payload));
      state = action.payload;
      console.log(state);
    }
  },
})

export const { handleExampleDetail } = exampleDetails.actions

export default exampleDetails.reducer