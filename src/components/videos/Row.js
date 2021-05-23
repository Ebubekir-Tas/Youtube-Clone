import React from "react";
import "./Row.css";

export default function Row({ title, card }) {
  return (
    <section className="video-section">
      {title && <h2 className="video-section-title">{title}</h2>}
      {/*Render if there is title prop*/}
      {card}
    </section>
  );
}
