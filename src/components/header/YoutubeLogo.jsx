import React from "react";
import "./YoutubeLogo.css";
import logo from "../../images/logo.png";

export default function YoutubeLogo() {
  let url = "#";
  return (
    <a href={url}>
      <img src={logo} alt="YouTube Logo" className="youtube-logo" />
    </a>
  );
}
