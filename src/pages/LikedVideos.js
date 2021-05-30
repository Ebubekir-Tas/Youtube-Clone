import React from 'react';
import { Typography } from '@material-ui/core';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import './styles.css';

export function LikedVideos() {
  const { likedVideos } = useSelector((state) => state.videos)

  return (
    <div className="video-section">
      <div>
        <Typography className="liked-video-text">
          Liked Videos:
                </Typography>
        {likedVideos && likedVideos.map((val, i) => <YouTube
          videoId={likedVideos[i]}
          className="youtube-iframe"
        />)}
      </div>
    </div>
  )
}