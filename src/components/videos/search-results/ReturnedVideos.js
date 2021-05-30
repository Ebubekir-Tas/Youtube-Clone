import React from 'react';
import { LikeVideo } from '@redux';
import { useDispatch } from 'react-redux';
import { ThumbUp } from '@material-ui/icons';
import { IconButton, Typography, Box } from '@material-ui/core';
import YouTube from 'react-youtube';
import './SearchResults.css';

export function ReturnedVideos({ videoUrl, likedVideos }) {
  const dispatch = useDispatch();
  return (
    <div>
      <YouTube
        videoId={videoUrl}
        className="youtube-iframe"
      />
      {likedVideos.includes(videoUrl) ?
        <Box
          className="unlike-button"
          onClick={() => dispatch(LikeVideo(videoUrl))}>
          <IconButton >
            <ThumbUp className="thumbUp-icon-liked" />
          </IconButton>

          <Typography>
            Unlike Video
                </Typography>
        </Box>
        :
        <Box
          className="like-button"
          onClick={() => dispatch(LikeVideo(videoUrl))}>
          <IconButton >
            <ThumbUp className="thumbUp-icon-unliked" />
          </IconButton>

          <Typography>
            Like Video
                  </Typography>
        </Box>
      }

    </div>
  )
}