import React from "react";
import SidebarBottom from "./SidebarBottom/SidebarBottom";
import SidebarMiddle from "./SidebarMiddle/SidebarMiddle";

import "./Sidebar.css";
import SidebarTop from "./SidebarTop/SidebarTop";

function Sidebar({isOpen,handleTrigger}) {
 

  return (
  
   
        <div className={`sidebar ${isOpen ? "sidebarOpen" : ""}`}>
          <SidebarTop isOpen={isOpen} handleTrigger={handleTrigger} />
          <SidebarMiddle />
          <SidebarBottom isOpen={isOpen} />
        </div>
    
  
  );
}

export default Sidebar;
