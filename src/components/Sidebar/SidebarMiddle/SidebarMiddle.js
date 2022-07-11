import React from "react";
import {
  IconDashboard,
  IconMembers,
  IconModules,
  IconProjects,
  IconReports,
  IconSprint,
} from "../../../assets/icons";

function SidebarMiddle() {
  return (
    <div className="sidebarMiddleBox">
      <div className="sidebarContentItem" role="button">
        <IconDashboard />

        <span className="sidebarContentText"> Dashboard</span>
      </div>

      <div className="sidebarContentItem" role="button">
        <IconProjects className="sidebar-icon" />

        <span className="sidebarContentText">Project</span>
      </div>
      <div className="sidebarContentItem" role="button">
        <IconModules />

        <span className="sidebarContentText">Modules</span>
      </div>
      <div className="sidebarContentItem" role="button">
        <IconSprint />

        <span className="sidebarContentText">Sprint</span>
      </div>

      <div className="sidebarContentItem" role="button">
        <IconMembers />

        <span className="sidebarContentText">Members</span>
      </div>

      <div className="sidebarContentItem" role="button">
        <IconReports />

        <span className="sidebarContentText"> Peports</span>
      </div>
    </div>
  );
}

export default SidebarMiddle;
