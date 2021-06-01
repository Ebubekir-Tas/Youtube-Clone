import React from "react";
import "./VideoRowTemplate.css";
import { pageStyles } from '@styles';

export function VideoRowTemplate({ title, card }) {
  const classes = pageStyles();
  return (
    <section className={classes.videoSection}>
      {title && <h2 className="video-section-title">{title}</h2>}
      {/*Render if there is title prop*/}
      {card}
    </section>
  );
}
