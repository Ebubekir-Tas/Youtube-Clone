import React from "react";
import "./SideBarRow.css";
import { Link } from 'react-router-dom';

const SideBarRow = ({ selected, Icon, title, path }) => {
  return (
    <Link to={ path } style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className={`sidebarRow ${selected ? "selected" : ""}`}>
      <Icon className="sidebarRow-icon" />
      <h2 className="sidebarRow-title">{title}</h2>
    </div>
    </Link>
  );
};

export default SideBarRow;
