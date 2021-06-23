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
      if (!state.likedVideos.includes(action.payload)) 
        return {
          ...state,
          likedVideos: [...state.likedVideos, action.payload]
        }

      // "Unlike" video
      return {
        ...state,
        likedVideos: state.likedVideos.filter(video => video !== action.payload)
      }
    },
    SubscribeChannel: (state, action) => {
      // Subscribe if not subscribed
      const isSubscribed = (e) => e.name === action.payload.name
      // If not subscribed
      if (!state.channelSubscriptions.some(isSubscribed)){
        return {
          ...state,
          channelSubscriptions: [...state.channelSubscriptions, action.payload]
        }
       
      }

      // Unsubscribe if already subscribed
      // If subscribed
      if (state.channelSubscriptions.some(isSubscribed)){
      return {
        ...state,
        channelSubscriptions: state.channelSubscriptions.filter(channel => channel.name !== action.payload.name)
      }
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
