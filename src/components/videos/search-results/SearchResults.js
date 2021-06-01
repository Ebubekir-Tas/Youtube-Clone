import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { SelectedVideos } from './SelectedVideos';
import { VideoCards } from './VideoCards';
import { videoStyles } from '@styles';

export function SearchResults() {

  const { searchedVideos, retrievedVideos } = useSelector((state) => state.videos);
  const { likedVideos } = useSelector((state) => state.videos);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoAuthor, setVideoAuthor] = useState({})

  const classes = videoStyles();

  return (
    <section className={classes.SearchResults}>
      {/* If there are no results from search and a search has been made, return "No results" */}
      {(searchedVideos.length === 0 && retrievedVideos ? (
        <p>No results</p>
      ) : retrievedVideos && (

        <div>
          <div className={classes.videoSection}>
            {/* Video selected from search */}
            {videoUrl &&
              <SelectedVideos
                videoUrl={videoUrl}
                videoAuthor={videoAuthor}
                likedVideos={likedVideos} />
            }
            <h2 className={classes.videoSectionTitle}>Search Results</h2>
            {searchedVideos.map((item) => (
              <VideoCards
                item={item}
                setVideoUrl={setVideoUrl}
                setVideoAuthor={setVideoAuthor}
              />
            ))}
          </div>
          <br></br>
        </div>
      ))}
    </section>
  );
}
