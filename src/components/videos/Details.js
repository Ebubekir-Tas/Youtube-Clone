import React from "react";
import { Typography } from '@material-ui/core';
import { videoStyles } from '@styles';

const Details = React.memo(() => {
  const classes = videoStyles();

  let numOfViews = Math.floor(Math.random() * 300000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //Random up to 300K views with comma separation

  let weeks = Math.floor(Math.random() * 26) + 1;

  function time() {
    switch (true) {
      case weeks > 4 && weeks < 9:
        return " 1 month";
      case weeks > 4:
        return Math.floor(weeks / 4) + " months";
      case weeks > 9:
        return weeks + " months";
      case weeks === 1:
        return weeks + " week";
      case weeks < 5 && weeks !== 1:
        return weeks + " weeks";
      default:
        return weeks + " weeks";
    }
  }

  return (
    <div className={classes.videoDetails}>
      <Typography className={classes.videoTitle}>
        Video Title
      </Typography>
      <Typography className={classes.videoChannelName}>
        Channel Name
      </Typography>
      <div className={classes.videoMetadata}>
        <span>{numOfViews + " views "}</span> • <span> {time()} ago</span>
      </div>
    </div>
  );
});

export { Details }
