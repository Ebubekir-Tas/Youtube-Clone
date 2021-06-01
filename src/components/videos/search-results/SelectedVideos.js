import React from 'react';
import YouTube from 'react-youtube';
import { ToggleLike } from './ToggleLike';
import { SubscribeToChannel } from './SubscribeToChannel';
import { videoStyles } from '@styles';

export function SelectedVideos({ videoUrl, videoAuthor, likedVideos }) {
  const classes = videoStyles();
  return (
    <div>
      <YouTube
        videoId={videoUrl}
        className={classes.youtubeIframe}
      />

      {/* If the video is liked */}
      {likedVideos.includes(videoUrl) ?
        <ToggleLike
          buttonStyle="{classes.unlikeButton}"
          iconStyle="{classes.thumbUpIconLiked}"
          likeToggleText="Unlike Video"
          videoUrl={videoUrl}
        />
        :
        <ToggleLike
          buttonStyle="{classes.likeButton}"
          iconStyle="{classes.thumbUpIconUnliked}"
          likeToggleText="like Video"
          videoUrl={videoUrl}
        />
      }

      {/* If channel is already subscribed to */}
      <SubscribeToChannel 
        videoAuthor={videoAuthor}
      />
    </div>
  )
}