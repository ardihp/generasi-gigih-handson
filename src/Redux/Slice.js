import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: []
  },
  reducers: {
    storeImage: (state, action) => {
      state.images = action.payload;
    }
  }
});

export const { storeImage } = imageSlice.actions;
export default imageSlice.reducer;
