import React from "react";
import "./SearchBar.css";
import magnify from "../../images/magnify.svg";

export default function SearchBar(props) {
  return (
    <div>
      <form className="search-bar" onSubmit={props.search}>
        <input
          className="search-input"
          type="search"
          placeholder="Search with API"
          autoFocus
          onChange={(e) => props.setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <img src={magnify} alt="magnify" />
        </button>
      </form>
    </div>
  );
}
