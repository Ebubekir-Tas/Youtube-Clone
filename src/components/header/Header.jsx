import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import YoutubeLogo from "./YoutubeLogo";
import MenuIcons from "./MenuIcons";

export default function Header(props) {
  return (
    <header className="header">
      <YoutubeLogo />
      <SearchBar
        search={props.search}
        list={props.list}
        setQuery={props.setQuery}
        searchYouTube={props.searchYouTube}
      />
      <MenuIcons />
    </header>
  );
}
