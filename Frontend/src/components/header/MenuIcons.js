import React from "react";
import "./MenuIcons.css";

export function MenuIcons() {
  let url = "#";
  return (
    <div className="menu-icons">
      <img src='/images/video-plus.svg' alt="Upload Video" />
      <img src='/images/apps.svg' alt="Apps" />
      <img src='/images/bell.svg' alt="Notifications" />
      <img
        className="menu-channel-icon"
        src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
        alt="Your Channel"
      />
    </div>
  );
}
