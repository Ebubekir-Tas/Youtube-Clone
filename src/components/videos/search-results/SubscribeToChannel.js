import React from 'react';
import { useDispatch } from 'react-redux';
import { SubscribeChannel } from '@redux';

export function SubscribeToChannel({ videoAuthor }) {
  const dispatch = useDispatch();
  return (
    <div 
      onClick={() => dispatch(SubscribeChannel(videoAuthor))}
      style={{ cursor: 'pointer' }}
    >
      SUBSCRIBE to {videoAuthor.name}
    </div>
  )
}