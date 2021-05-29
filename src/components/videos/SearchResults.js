import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { LikeVideo } from '../../redux/VideosStore';
import { ThumbUp } from '@material-ui/icons';
import { IconButton, Typography, Box } from '@material-ui/core';
import YouTube from 'react-youtube';
import './SearchResults.css'

export default function SearchResults() {

  const { searchedVideos, retrievedVideos } = useSelector((state) => state.videos)
  const { likedVideos } = useSelector((state) => state.videos);
  const [videoUrl, setVideoUrl] = useState(null);
  const dispatch = useDispatch();
  console.log(likedVideos);
  return (
    <section className="search-results">
      {/* If there are no results from search and a search has been made, return "No results" */}
      {(searchedVideos.length === 0 && retrievedVideos ? (
        <p>No results</p>
      ) : retrievedVideos && (
        <div className="results-wrapper">
          <div className="video-section">
            {videoUrl && <div><YouTube
              videoId={videoUrl}
              className="youtube-iframe"
            />
              <Box
              className="like-button"
              onClick={() => dispatch(LikeVideo(videoUrl))}>
                <IconButton >
                  <ThumbUp className="thumbUp-icon" />
                </IconButton>
                <Typography>
                  {likedVideos.includes(videoUrl) ? "Unlike Video" : 'Like Video'}
                </Typography>
              </Box>
            </div>
            }
            <h2 className="video-section-title">Search Results</h2>
            {searchedVideos.map((item) => (
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
