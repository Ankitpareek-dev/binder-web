import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => action.payload,
    removeFeed: (state, action) =>
      state.filter((item) => {
        return item._id !== action.payload;
      }),
    emptyFeed: () => null,
  },
});

export const { addFeed, removeFeed, emptyFeed } = feedSlice.actions;
export default feedSlice.reducer;
