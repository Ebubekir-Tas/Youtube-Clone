import React from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import './styles.css';

export function LikedVideos() {
    const { likedVideos } = useSelector((state) => state.videos)

    return (
        <section className="video-section">
            <div>Liked Videos:
                {likedVideos && likedVideos.map((val, i) => <YouTube
                videoId={likedVideos[i]}
                className="youtube-iframe"
            />)}
            </div>
        </section>
    )
}