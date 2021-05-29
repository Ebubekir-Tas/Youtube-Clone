import { createSlice } from '@reduxjs/toolkit';

export const VideosStore = createSlice({
    name: 'videos',
    initialState: {
        // Search results
        searchedVideos: [],
        retrievedVideos: false,
        // Liked Videos
        likedVideos: []
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
        }}
    }
});

export const {
    getVideos,
    LikeVideo
} = VideosStore.actions;

export const videosStore = state => state.videos

export default VideosStore.reducer