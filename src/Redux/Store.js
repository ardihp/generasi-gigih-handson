import { configureStore } from '@reduxjs/toolkit'
import imageSlice from './Slice';

export default configureStore({
  reducer: {
      images: imageSlice
  },
})