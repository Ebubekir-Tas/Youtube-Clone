import React from "react";
import { useSelector } from 'react-redux';

export default function SearchResults() {

  const { videos, retrievedVideos }= useSelector((state) => state.videos)

  let url = "#";
  return (
    <section className="search-results">
      {/* If there are no results from search and a search has been made, return "No results" */}
      {(videos.length === 0 && retrievedVideos ? (
          <p>No results</p>
        ) : retrievedVideos && (
          <div className="results-wrapper">
            <div className="video-section">
              <h2 className="video-section-title">Search Results</h2>
              {videos.map((item) => (
                <article className="video-container">
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    target={"_blank"}
                    className="thumbnail"
                    data-duration={item.duration}
                  >
                    <img
                      className="thumbnail-image"
                      href={item.link}
                      target="_blank"
                      src={item.thumbnail}
                      alt={url}
                    />
                  </a>

                  <div className="video-details">
                    <a href={url} className="video-title">
                      {item.title}
                    </a>
                    <a href={url} className="video-channel-name">
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
