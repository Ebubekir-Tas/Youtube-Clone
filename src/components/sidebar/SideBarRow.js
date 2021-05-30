import React, { useState } from "react";
import "./SideBarRow.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function SideBarRow({ Icon, title, path }) {
  const currentPath = useLocation().pathname;
  return (
    <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={`sidebarRow ${currentPath === path ? 'selected' : ''}`}>
        {/* Panel bolds correspondingly to the route you're in */}
        <Icon className="sidebarRow-icon" />
        <h2 className="sidebarRow-title">{title}</h2>
      </div>
    </Link>
  );
};
