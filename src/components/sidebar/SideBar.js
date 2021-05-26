import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import { Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <Link to={{ pathname: '/' }}>
        <SideBarRow selected Icon={Home} title="Home" />
      </Link>

      <SideBarRow Icon={Whatshot} title="Trending" />
      <SideBarRow Icon={Subscriptions} title="Subscription" />
      <hr className="break-line" />
      <SideBarRow Icon={VideoLibrary} title="Library" />
      <SideBarRow Icon={History} title="History" />
      <SideBarRow Icon={OndemandVideo} title="Your videos" />
      <SideBarRow Icon={WatchLater} title="Watch later" />
      
      <Link to={{ pathname: '/liked-videos' }}>
        <SideBarRow Icon={ThumbUp} title="Liked videos" />
      </Link>
      <hr className="break-line" />
    </aside>
  );
};

export default SideBar;
