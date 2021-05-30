import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { ReturnedVideos } from './ReturnedVideos';
import { VideoCards } from './VideoCards';
import './SearchResults.css';

export function SearchResults() {

  const { searchedVideos, retrievedVideos } = useSelector((state) => state.videos)
  const { likedVideos } = useSelector((state) => state.videos);
  const [videoUrl, setVideoUrl] = useState(null);
  console.log(likedVideos);
  return (
    <section className="search-results">
      {/* If there are no results from search and a search has been made, return "No results" */}
      {(searchedVideos.length === 0 && retrievedVideos ? (
        <p>No results</p>
      ) : retrievedVideos && (

        <div className="results-wrapper">
          <div className="video-section">
            {/* Videos returned from search */}
            {videoUrl &&
              <ReturnedVideos
                videoUrl={videoUrl}
                likedVideos={likedVideos} />
            }
            <h2 className="video-section-title">Search Results</h2>
            {searchedVideos.map((item) => (
              <VideoCards
                item={item}
                setVideoUrl={setVideoUrl}
              />
            ))}
          </div>
          <br></br>
        </div>
      ))}
    </section>
  );
}
