import { configureStore } from '@reduxjs/toolkit';
import VideoStore from './VideosStore';

export default configureStore({
  reducer: {
    videos: VideoStore
  },
})