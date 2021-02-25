import React from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Card from "./components/videos/Card";
import Row from "./components/videos/Row";
import SearchResults from "./components/videos/SearchResults";
import SideBar from "./components/sidebar/SideBar";

const YOUTUBE_API_KEY =`${process.env.REACT_APP_YOUTUBE_API_KEY}`

const thumbnails = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  }
];
/*This is to assure every generated image is different and will be mapped through
to generate each thumbnail.*/

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

export default function App() {
  async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch(
      "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
          "x-rapidapi-key": YOUTUBE_API_KEY
        }
      }
    );
    const body = await response.json();
    console.log(body);
    return body.items.filter((item) => item.type === "video");
  }
  const [query, setQuery] = React.useState("Search - This is Functional!");
  const [list, setList] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };

  return (
    <div className="youtube-container">
      <Header
        search={search}
        list={list}
        query={query}
        setQuery={setQuery}
        searchYouTube={searchYouTube}
      />
      <div className="body-container">
        <SideBar />

        <div className="videos">
          <SearchResults
            search={search}
            list={list}
            query={query}
            setQuery={setQuery}
            searchYouTube={searchYouTube}
          />

          <Row card={thumbnails.map(firstRow)} title={"Trending"} />
          <br></br>
          {/* All Videos in first Row */}

          <Row
            setList={setList}
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
  );
}
