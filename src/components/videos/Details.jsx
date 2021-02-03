import React from "react";
import "./Details.css";

const Details = (props) => {
  let url = "#";

  let numOfViews = Math.floor(Math.random() * 300000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //Random up to 300K views with comma separation

  let weeks = Math.floor(Math.random() * 26) + 1;

  function time() {
    switch (true) {
      case weeks > 4 && weeks < 9:
        return " 1 month";
      case weeks > 4:
        return Math.floor(weeks / 4) + " months";
      case weeks > 9:
        return weeks + " months";
      case weeks === 1:
        return weeks + " week";
      case weeks < 5 && weeks !== 1:
        return weeks + " weeks";
      default:
        return weeks + " weeks";
      // code block
    }
  }

  return (
    <div className="video-details">
      <a href={url} className="video-title">
        Video Title
      </a>
      <a href={url} className="video-channel-name">
        Channel Name
      </a>
      <div className="video-metadata">
        <span>{numOfViews + " views "}</span> • <span> {time()} ago</span>
      </div>
    </div>
  );
};

export default React.memo(Details);
