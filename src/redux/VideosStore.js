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
} = VideosStore.actions;

export const videosStore = state => state.videos

export default VideosStore.reducer