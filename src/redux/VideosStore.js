import { createSlice } from '@reduxjs/toolkit';

export const VideosStore = createSlice ({
    name: 'videos',
    initialState: {
        videos: [],
        retrievedVideos: false
    },
    reducers: {
        getVideos: (state, action) => {
            return {
                ...state,
                videos: action.payload,
                retrievedVideos: true
            }
    }
    }
});

export const { 
    getVideos
} = VideosStore.actions;

export const videosStore = state => state.videos

export default VideosStore.reducer