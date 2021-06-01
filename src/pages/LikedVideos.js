import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import { pageStyles } from '@styles';

export function LikedVideos() {
  const { likedVideos } = useSelector((state) => state.videos)
  
  const classes = pageStyles();
  return (
    <div className={classes.pageInnerContent}>
        <Typography>
          Liked Videos:
        </Typography>

        {likedVideos && likedVideos.map((val, i) =>
          <Paper className={classes.subscriptionList}>
            <YouTube
              videoId={likedVideos[i]}
              className="youtube-iframe"
            />
          </Paper>
        )}
    </div>
  )
}
