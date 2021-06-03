import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { SubscribeChannel } from '@redux';
import { AddBox } from '@material-ui/icons';

export function SubscribeToChannel({ buttonStyle, iconStyle,subscribeToggleText, videoAuthor }) {
  const dispatch = useDispatch();
  return (
    <Box
      className={buttonStyle}
      onClick={() => dispatch(SubscribeChannel(videoAuthor))}
      style={{ cursor: 'pointer' }}
      border={1}
      borderLeft={.25}
      borderRight={.25}
    >
      <IconButton>
        <AddBox className={iconStyle} />
      </IconButton>
      <Typography>
        {subscribeToggleText}
      </Typography>
    </Box>
  )
}