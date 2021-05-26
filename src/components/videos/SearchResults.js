import React, { useState } from "react";
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

export default function SearchResults() {

  const { videos, retrievedVideos } = useSelector((state) => state.videos)
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <section className="search-results">
      {/* If there are no results from search and a search has been made, return "No results" */}
      {(videos.length === 0 && retrievedVideos ? (
        <p>No results</p>
      ) : retrievedVideos && (
        <div className="results-wrapper">
          <div className="video-section">
            {videoUrl && <YouTube
              videoId={videoUrl}
            />
            }
            <h2 className="video-section-title">Search Results</h2>
            {videos.map((item) => (
              <article className="video-container" key={item.id}>
                <a
                  onClick={() => setVideoUrl(item.id)}
                  rel="noopener noreferrer"
                  className="thumbnail"
                  style={{ cursor: 'pointer' }}
                  data-duration={item.duration}
                >
                  <img
                    onClick={() => setVideoUrl(item.id)}
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
            ))}
          </div>
          <br></br>
        </div>
      ))}
    </section>
  );
}
