import React from "react";
import { videoStyles } from '@styles';

const Thumbnail = React.memo(({ imageURL }) => {
  const classes = videoStyles();

  let randomTime1 = Math.floor(Math.random() * 58) + 1;
  let randomTime2 = Math.floor(Math.random() * 58) + 1;
  //Video time length

  return (
    <a
      href={''}
      className={classes.thumbnail}
      data-duration={
        randomTime2 < 10
          ? randomTime1.toString() + ":0" + randomTime2.toString()
          : randomTime1.toString() + ":" + randomTime2.toString()
      }
    >
      <img className={classes.thumbnailImage} src={imageURL} alt='' />
    </a>
  );
});

export { Thumbnail };
