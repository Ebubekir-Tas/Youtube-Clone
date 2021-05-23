import React from "react";
import "./Card.css";
import Details from "./Details";
import Thumbnail from "./Thumbnail";

export default function Card({ imageURL }) {
  return (
    <article className="video-container">
      <Thumbnail imageURL={imageURL} />
      <Details />
    </article>
  );
}
