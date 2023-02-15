import React from 'react';
import { videoStyles } from '@styles';

export function VideoCards({ item, setVideoUrl, setVideoAuthor }) {
  const classes = videoStyles();
  return (
    <article className={classes.videoContainer} key={item.id}>
      <a
        onClick={() => {setVideoUrl(item.id); setVideoAuthor(item.author)}}
        rel="noopener noreferrer"
        className={classes.bestThumbnail}
        style={{ cursor: 'pointer' }}
        data-duration={item.duration}
      >
        <img
          className={classes.thumbnailImage}
          src={item.thumbnails[0].url}
          alt={"Video Thumbnail"}
        />
      </a>

      <div className={classes.videoDetails}>
        <a
          className={classes.videoTitle}
        >
          {item.title}
        </a>
        <a
          className={classes.videoChannelName}
        >
          {item.author.name}
        </a>

        <div className={classes.videoMetadata}>
          <span>
            {item.views ? item.views
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : '999 views'}
          </span>
          {" views "}• <span>{item.uploaded_at}</span>
        </div>
      </div>
    </article>
  )
}