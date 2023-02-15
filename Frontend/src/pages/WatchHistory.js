import React from 'react';
import { pageStyles } from '@styles';

export function WatchHistory() {
  const classes = pageStyles();
  return (
    <div className={classes.pageInnerContent}>
      Watch History:
      <br />
      <br />
      <img src="/images/construction.png" alt="Coming Soon!" />
    </div>
  )
}