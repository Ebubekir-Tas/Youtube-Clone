import React from "react";
import { Details } from "./Details";
import { Thumbnail } from "./Thumbnail";
import { videoStyles } from '@styles';

export function Card({ imageURL }) {
  const classes = videoStyles();
  return (
    <article className={classes.videoContainer}>
      <Thumbnail imageURL={imageURL} />
      <Details />
    </article>
  );
}
