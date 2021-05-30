import React from 'react';
import YouTube from 'react-youtube';
import { ToggleLike } from './ToggleLike';
import './SearchResults.css';

export function SelectedVideos({ videoUrl, likedVideos }) {
  return (
    <div>
      <YouTube
        videoId={videoUrl}
        className="youtube-iframe"
      />

      {/* If the video is liked */}
      {likedVideos.includes(videoUrl) ?
        <ToggleLike
          buttonStyle="unlike-button"
          iconStyle="thumbUp-icon-liked"
          likeToggleText="Unlike Video"
          videoUrl={videoUrl}
        />
        :
        <ToggleLike
          buttonStyle="like-button"
          iconStyle="thumbUp-icon-unliked"
          likeToggleText="like Video"
          videoUrl={videoUrl}
        />
      }
    </div>
  )
}