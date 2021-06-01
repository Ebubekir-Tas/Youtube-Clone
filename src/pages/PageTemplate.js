import React, { useState } from 'react';
import { Header, SideBar } from '@components';
import { useDispatch } from 'react-redux';
import { getVideos } from '@redux';

const YOUTUBE_API_KEY = `${process.env.REACT_APP_YOUTUBE_API_KEY}`

export function PageTemplate(Page) {
  return function NewPage() {

    const dispatch = useDispatch();

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
      return body.items.filter((item) => item.type === "video");
    }
    const [query, setQuery] = useState("");

    const search = (e) => {
      e.preventDefault();
      searchYouTube(query).then((val) => dispatch(getVideos(val)));
    };

    return (
      <div className="youtube-container">
        <Header
          search={search}
          query={query}
          setQuery={setQuery}
          searchYouTube={searchYouTube}
        />
        <div className="body-container">
          <SideBar />
          <div className="page-content">
            <Page />
          </div>
        </div>
      </div>
    );
  };
}