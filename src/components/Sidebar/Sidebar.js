import React, { useState } from "react";
import SidebarBottom from "./SidebarBottom/SidebarBottom";
import SidebarMiddle from "./SidebarMiddle/SidebarMiddle";

import "./Sidebar.css";
import SidebarTop from "./SidebarTop/SidebarTop";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">
        <div className={`sidebar ${isOpen ? "sidebarOpen" : ""}`}>
          <SidebarTop isOpen={isOpen} handleTrigger={handleTrigger} />
          <SidebarMiddle />
          <SidebarBottom isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
