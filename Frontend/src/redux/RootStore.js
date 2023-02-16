import { configureStore } from '@reduxjs/toolkit';
import VideoStore from './VideosStore';
import UserStore from './UserStore';


export default configureStore({
  reducer: {
    videos: VideoStore,
    user: UserStore,
  },
})