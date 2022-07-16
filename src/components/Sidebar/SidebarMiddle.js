import React from "react";
import sidebarNavItems from "./SidebarNavItems"
import SidebarMiddleItem from "./SidebarMiddleItems";

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
