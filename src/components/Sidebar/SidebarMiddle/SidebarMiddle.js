import React from "react";
import sidebarNavItems from "../../../assets/SidebarNavItems/SidebarNavItems"
import SidebarMiddleItem from "./SidebarMiddleItems/SidebarMiddleItems";

function SidebarMiddle() {
  const itemNotLogout = sidebarNavItems.map((item) => item.display !== "Log out" ? 
      <SidebarMiddleItem display={item.display} icon={item.icon} /> : 
      false)

  return (
    <div className="sidebarMiddleBox">
      {itemNotLogout}
    </div>
  );
}

export default SidebarMiddle;
