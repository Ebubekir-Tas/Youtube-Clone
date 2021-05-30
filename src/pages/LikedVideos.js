import React from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import './styles.css';

export default function LikedVideos() {
    const { likedVideos } = useSelector((state) => state.videos)

    console.log(likedVideos)

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