import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './styles.css';

export function Subscriptions() {
  const { channelSubscriptions } = useSelector((state) => state.videos);

  const name = channelSubscriptions.map(e => e.name);
  const ref = channelSubscriptions.map(e => e.ref);
  const ownerBadge = channelSubscriptions.map(e => e.ownerBadges);
  const avatar = channelSubscriptions.map(e => e.bestAvatar);

  return (
    <div className="subscriptions">
      <Typography className="liked-video-text">
        Subscribed To:
        </Typography>

      {name.map((val, i) => (
        <Paper className="subscription-list">
          <div>{name[i]}</div>
          <div>{ref[i]}</div>
          <div>{ownerBadge[i]}</div>
          <img src={avatar[i].url} />
        </Paper>
      )
      )}
    </div>
  )
}
