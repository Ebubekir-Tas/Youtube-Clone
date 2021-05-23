import React from "react";
import "./Thumbnail.css";

const Thumbnail = ({ imageURL }) => {
  let url = "#";
  let randomTime1 = Math.floor(Math.random() * 58) + 1;
  let randomTime2 = Math.floor(Math.random() * 58) + 1;
  //Video time length

  return (
    <a
      href={url}
      className="thumbnail"
      data-duration={
        randomTime2 < 10
          ? randomTime1.toString() + ":0" + randomTime2.toString()
          : randomTime1.toString() + ":" + randomTime2.toString()
      }
    >
      <img className="thumbnail-image" src={imageURL} alt={url} />
    </a>
  );
};
export default React.memo(Thumbnail);
