import React from 'react';
import { pageStyles } from '@styles';

export function WatchLater() {
  const classes = pageStyles();
  return (
    <div className={classes.pageInnerContent}>
      Watch Later:
      <br />
      <br />
      <img src="/images/construction.png" alt="Coming Soon!" />
    </div>
  )
}