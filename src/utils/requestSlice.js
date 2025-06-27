import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequests: (state, action) =>
      state.filter((item) => item.requestId !== action.payload),
    emptyRequests: () => null,
  },
});

export const { addRequests, removeRequests, emptyRequests } =
  requestSlice.actions;

export default requestSlice.reducer;
