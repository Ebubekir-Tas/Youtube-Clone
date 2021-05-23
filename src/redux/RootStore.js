import { configureStore } from '@reduxjs/toolkit';
import VideoStore from './VideoStore';

export default configureStore({
  reducer: {
    combos: VideoStore
  },
})