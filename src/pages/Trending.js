import React from 'react';
import { pageStyles } from '@styles';

export function Trending() {
  const classes = pageStyles();
  return (
    <div className={classes.pageInnerContent}>
      Trending Videos:
      <br />
      <br />
      <img src="/images/construction.png" alt="Coming Soon!" />
    </div>
  )
}