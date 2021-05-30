import React from "react";
import "./YoutubeLogo.css";

export function YoutubeLogo() {
  let url = "#";
  return (
    <a href={url}>
      <img src={'/images/youtube-logo.png'} alt="YouTube Logo" className="youtube-logo" />
    </a>
  );
}
