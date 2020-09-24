/** @format */

import React from "react";
import "./SidebarOption.css";
function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {/*if it is active class then load sidebarOption--active class else only
      sidebarOption class*/}
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
