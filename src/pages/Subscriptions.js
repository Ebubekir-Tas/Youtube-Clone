import React from 'react';
import { Typography } from '@material-ui/core';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import './styles.css';

export function Subscriptions() {
  const { channelSubscriptions } = useSelector((state) => state.videos)
  console.log(channelSubscriptions);
  return (
    <div className="video-section">
      <div>
        <Typography className="liked-video-text">
          Subscribed To:
        </Typography>
        {channelSubscriptions.map((val, i) => (
          <div>
            {channelSubscriptions[i].name}
          </div>
        )
        )}
      </div>
    </div>
  )
}
