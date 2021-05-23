import React from 'react';
import SearchResults from '../videos/SearchResults';
import Row from '../videos/Row';
import Card from '../videos/Card';
import './Home.css'

const thumbnails = [
    {
      key: 1
    },
    {
      key: 2
    },
    {
      key: 3
    },
    {
      key: 4
    },
    {
      key: 5
    }
  ];

  const firstRow = (thumbnails) => {
    const newSig = thumbnails.id + 0;
    return (
      <Card
        imageURL={"https://picsum.photos/200/300?random=" + newSig}
        key={thumbnails.id}
      />
    );
  };
  
  const secondRow = (thumbnails) => {
    const newSig = thumbnails.id + 5;
    return (
      <Card
        imageURL={"https://picsum.photos/200/300?random=" + newSig}
        key={thumbnails.id}
      />
    );
  };

export default function HomePage(){

    return (
    <div className="youtube-container">
      <div className="body-container">


        <div className="videos">
          <SearchResults />


          <Row card={thumbnails.map(firstRow)} title={"Trending"} />
          <br></br>
          {/* All Videos in first Row */}

          <Row
            title={"Recommended Videos"}
            card={thumbnails.map(secondRow)}
          />
          <br></br>
          {/* All Videos in second Row */}

          <Row
            title={"Random Video"}
            card={<Card imageURL={"https://source.unsplash.com/user/erondu"} />}
          />
          {/* Third Row */}
        </div>
      </div>
     </div>
    )
}

