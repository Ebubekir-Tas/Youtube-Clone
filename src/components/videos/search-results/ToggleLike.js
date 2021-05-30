import React from 'react';
import { useDispatch } from 'react-redux';
import { LikeVideo } from '@redux';
import { Box, IconButton, Typography } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';

export function ToggleLike({ likeToggleText, iconStyle, buttonStyle, videoUrl }) {
  const dispatch = useDispatch();
  return (
    <Box
      className={buttonStyle}
      onClick={() => dispatch(LikeVideo(videoUrl))}>
      <IconButton >
        <ThumbUp className={iconStyle} />
      </IconButton>

      <Typography>
        {likeToggleText}
      </Typography>
    </Box>
  )
}