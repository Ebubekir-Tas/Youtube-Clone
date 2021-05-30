import React from 'react';
import {
  SearchResults,
  VideoRowTemplate,
  Card,
  VideoRow
} from '@components';
import './Home';

const thumbnails = [1, 2, 3, 4, 5, 6];
//number of sample videos to be rendered

export const HomePage = React.memo(function HomePage() {
  return (
    <div className="youtube-container">
      <div className="body-container">

        <div className="videos">
          <SearchResults />

          <VideoRowTemplate
            title={"Trending"}
            card={thumbnails.map((x) => { return <VideoRow key={x} imageURL={"https://picsum.photos/200/300?random=" + Math.floor(Math.random() * 10)} /> })} />
          <br></br>
          {/* All Videos in first Row */}

          <VideoRowTemplate
            title={"Recommended Videos"}
            card={thumbnails.map((x) => { return <VideoRow key={x} imageURL={"https://picsum.photos/200/300?random=" + Math.floor(Math.random() * 10)} /> })}

          />
          <br></br>
          {/* All Videos in second Row */}

          <VideoRowTemplate
            title={"Random Video"}
            card={<Card imageURL={"https://source.unsplash.com/user/erondu"} />}
          />
          {/* Third Row */}
        </div>
      </div>
    </div>
  )
});
