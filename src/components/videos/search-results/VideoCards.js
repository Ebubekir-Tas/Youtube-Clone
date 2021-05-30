import React from 'react';

export function VideoCards({ item, setVideoUrl, setVideoAuthor }) {
  console.log(item)
  return (
    <article className="video-container" key={item.id}>
      <a
        onClick={() => {setVideoUrl(item.id); setVideoAuthor(item.author)}}
        rel="noopener noreferrer"
        className="thumbnail"
        style={{ cursor: 'pointer' }}
        data-duration={item.duration}
      >
        <img
          className="thumbnail-image"
          src={item.thumbnail}
          alt={"Video Thumbnail"}
        />
      </a>

      <div className="video-details">
        <a
          className="video-title"
        >
          {item.title}
        </a>
        <a
          className="video-channel-name"
        >
          {item.author.name}
        </a>

        <div className="video-metadata">
          <span>
            {item.views ? item.views
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : '999 views'}
          </span>
          {/* Live videos that don't return views data default 999 views. */}
          {" views "}• <span>{item.uploaded_at}</span>
        </div>
      </div>
    </article>
  )
}