import React from 'react';
import YouTube from 'react-youtube';
import { ToggleLike } from './ToggleLike';
import { SubscribeToChannel } from './SubscribeToChannel';
import { videoStyles } from '@styles';

export function SelectedVideos({ channelSubscriptions, likedVideos, videoUrl, videoAuthor }) {
  const classes = videoStyles();
  let isSubscribed
  const checkIfSubscribed = () => {
    channelSubscriptions.forEach(e => { if (e.name === videoAuthor.name) isSubscribed = true; })
  }

  checkIfSubscribed();
  return (
    <div>
      <YouTube
        videoId={videoUrl}
        className={classes.youtubeIframe}
      />

      {/* If the video is liked */}
      {likedVideos.includes(videoUrl) ?
        <ToggleLike
          buttonStyle={classes.unlikeButton}
          iconStyle={classes.thumbUpIconLiked}
          likeToggleText="Unlike Video"
          videoUrl={videoUrl}
        />
        :
        <ToggleLike
          buttonStyle={classes.likeButton}
          iconStyle={classes.thumbUpIconUnliked}
          likeToggleText="like Video"
          videoUrl={videoUrl}
        />
      }

      {/* If channel is already subscribed to */}
      {isSubscribed ?
        <SubscribeToChannel
          videoAuthor={videoAuthor}
          subscribeToggleText={'unsubscribe to ' + videoAuthor.name}
          buttonStyle={classes.unsubscribeButton}
          iconStyle={classes.unsubscribeIcon}
        />
        :
        <SubscribeToChannel
          videoAuthor={videoAuthor}
          subscribeToggleText={'subscribe to ' + videoAuthor.name}
          buttonStyle={classes.subscribeButton}
          iconStyle={classes.subscribeIcon}
        />
      }
    </div>
  )
}
