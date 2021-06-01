import React from "react";
import { videoStyles } from '@styles';

export function VideoRowTemplate({ title, card }) {
  const classes = videoStyles();
  return (
    <section className={classes.videoSection}>
      {title && <h2 className={classes.videoSectionTitle}>{title}</h2>}
      {/*Render if there is title prop*/}
      {card}
    </section>
  );
}
