import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import { Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUp } from '@material-ui/icons';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <SideBarRow path='/' Icon={Home} title="Home" />
      <SideBarRow path='/trending' Icon={Whatshot} title="Trending" />
      <SideBarRow path='/subscriptions' Icon={Subscriptions} title="Subscriptions" />
      <hr className="break-line" />
      <SideBarRow path='/library' Icon={VideoLibrary} title="Library" />
      <SideBarRow path='/history' Icon={History} title="History" />
      <SideBarRow path='/your-videos' Icon={OndemandVideo} title="Your videos" />
      <SideBarRow path='/watch-later' Icon={WatchLater} title="Watch later" />
      <SideBarRow path='/liked-videos' Icon={ThumbUp} title="Liked videos" />
      <hr className="break-line" />
    </aside>
  );
};

export default SideBar;
