import React from "react";
import "./Thumbnail.css";

const Thumbnail = React.memo(({ imageURL }) => {
  let randomTime1 = Math.floor(Math.random() * 58) + 1;
  let randomTime2 = Math.floor(Math.random() * 58) + 1;
  //Video time length

  return (
    <a
      href={''}
      className="thumbnail"
      data-duration={
        randomTime2 < 10
          ? randomTime1.toString() + ":0" + randomTime2.toString()
          : randomTime1.toString() + ":" + randomTime2.toString()
      }
    >
      <img className="thumbnail-image" src={imageURL} alt='' />
    </a>
  );
});

export { Thumbnail };
