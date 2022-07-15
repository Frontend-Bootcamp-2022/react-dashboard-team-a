import React from "react";
import { IconLogOut } from "../../../assets/icons";
function SidebarBottom({ isOpen }) {
  return (
    <div className={` ${isOpen ? "sidebarBottomBox" : "sidebarBottomClose"}`}>
      <div className="sidebarContentItem" role="button">
        <IconLogOut className="sidebarContentIcon" />
        <span className="sidebarContentText">Log out</span>
      </div>
    </div>
  );
}

export default SidebarBottom;
