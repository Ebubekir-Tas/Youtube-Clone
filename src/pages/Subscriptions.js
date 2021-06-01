import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { pageStyles } from '@styles';

export function Subscriptions() {
  const { channelSubscriptions } = useSelector((state) => state.videos);

  const name = channelSubscriptions.map(e => e.name);
  const ref = channelSubscriptions.map(e => e.ref);
  const ownerBadge = channelSubscriptions.map(e => e.ownerBadges);
  const avatar = channelSubscriptions.map(e => e.bestAvatar);

  const classes = pageStyles();
  return (
    <div className={classes.pageInnerContent}>
      <Typography>
        Subscribed To:
      </Typography>

      {name.map((val, i) => 
        <Paper className={classes.subscriptionList}>
          <div>{name[i]}</div>
          <div>{ref[i]}</div>
          <div>{ownerBadge[i]}</div>
          <img src={avatar[i].url} />
        </Paper>
      )}
    </div>
  )
}
