import React from "react";
import "./Row.css";

export default function Row(props) {
  return (
    <section className="video-section">
      {props.title && <h2 className="video-section-title">{props.title}</h2>}
      {/*Render if there is title prop*/}
      {props.card}
    </section>
  );
}
