import { createSlice } from '@reduxjs/toolkit';

export const VideosStore = createSlice({
  name: 'videos',
  initialState: {
    // Search results
    searchedVideos: [],
    retrievedVideos: false,
    // Liked Videos
    likedVideos: [],
    // Channels subscribed to
    channelSubscriptions: []
  },
  reducers: {
    getVideos: (state, action) => ({
      ...state,
      searchedVideos: action.payload,
      retrievedVideos: true
    }),
    LikeVideo: (state, action) => {
      // Disallows duplicate liked videos
      if (!state.likedVideos.includes(action.payload)) return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload]
      }

      // "Unlike" video
      return {
        ...state,
        likedVideos: state.likedVideos.filter(video => video !== action.payload),
      }
    },
    SubscribeChannel: (state, action) => {
      // Subscribe and unsubscribe to channel
      // if (!state.SubscribeChannel.includes(action.payload)) 
      return {
        ...state,
        channelSubscriptions: [...state.channelSubscriptions, action.payload]
      }
    }
  }
});

export const {
  getVideos,
  LikeVideo,
  SubscribeChannel
} = VideosStore.actions;

export const videosStore = state => state.videos

export default VideosStore.reducer
