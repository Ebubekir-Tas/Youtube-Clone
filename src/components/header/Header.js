import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import YoutubeLogo from "./YoutubeLogo";
import MenuIcons from "./MenuIcons";

export default function Header({ search, list, setQuery, searchYouTube }) {
  return (
    <header className="header">
      <YoutubeLogo />
      <SearchBar
        search={search}
        list={list}
        setQuery={setQuery}
        searchYouTube={searchYouTube}
      />
      <MenuIcons />
    </header>
  );
}
