import { createSlice } from '@reduxjs/toolkit';

export const VideosStore = createSlice ({
    name: 'videos',
    initialState: {
        videos: []
    },
    reducers: {
        getVideos: (state, action) => {
            return {
                ...state,
                videos: action.payload
            }
    }
    }
});

export const { 
    getVideos
} = VideoStore.actions;

export const VideoStore = state => state.videos

export default VideoStore.reducer