import React from 'react';
import SearchResults from '../videos/SearchResults';
import Row from '../videos/Row';
import Card from '../videos/Card';
import './Home.css'

const thumbnails = [1, 2, 3, 4, 5, 6];

  const FirstRow = ({pic}) => {
    return (
      <Card
        imageURL={pic}
        //random profile image URL
      />
    );
  };
  
  const SecondRow = ({pic}) => {
    return (
      <Card
        imageURL={pic}
      />
    );
  };

export default function HomePage(){

    return (
    <div className="youtube-container">
      <div className="body-container">


        <div className="videos">
          <SearchResults />


          <Row 
          title={"Trending"}
          card={thumbnails.map((x) => <FirstRow key={x} pic={"https://picsum.photos/200/300?random=" + Math.floor(Math.random()+x)}/>)}  />
          <br></br>
          {/* All Videos in first Row */}

          <Row
            title={"Recommended Videos"}
            card={thumbnails.map((x) => <SecondRow key={x} pic={"https://picsum.photos/200/300?random=" + Math.floor(Math.random()+x)} />)}
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

