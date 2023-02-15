import { createSlice } from '@reduxjs/toolkit';

export const VideosStore = createSlice({
  name: 'videos',
  initialState: {
    searchedVideos: [],
    retrievedVideos: false,
    likedVideos: [],
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
      const isSubscribed = (e) => e.name === action.payload.name
      if (!state.channelSubscriptions.some(isSubscribed)){
        return {
          ...state,
          channelSubscriptions: [...state.channelSubscriptions, action.payload]
        }
       
      }

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
