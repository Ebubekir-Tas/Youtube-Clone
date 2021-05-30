import React from "react";
import "./SideBar.css";
import { SideBarRow } from "./SideBarRow";
import {
  Home,
  Whatshot,
  Subscriptions,
  History,
  WatchLater,
  ThumbUp
} from '@material-ui/icons';

export function SideBar() {
  return (
    <aside className="sidebar">
      <SideBarRow path='/' Icon={Home} title="Home" />
      <SideBarRow path='/trending' Icon={Whatshot} title="Trending" />
      <SideBarRow path='/subscriptions' Icon={Subscriptions} title="Subscriptions" />
      <hr className="break-line" />
      <SideBarRow path='/history' Icon={History} title="History" />
      <SideBarRow path='/watch-later' Icon={WatchLater} title="Watch later" />
      <SideBarRow path='/likes' Icon={ThumbUp} title="Liked videos" />
      <hr className="break-line" />
    </aside>
  );
};
