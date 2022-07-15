import React from "react";
import { LogoIconGreen, LogoIconBlue, IconHide } from "../../../assets/icons";

function SidebarTop({ isOpen, handleTrigger }) {
  return (
    <div className={` ${isOpen ? "sidebarTopBox" : "sidebarTopClose"}`}>
      <div className="sidebarContentItem">
        <div className="sidebarLogoBox">
          <LogoIconBlue />
          <LogoIconGreen />
        </div>
        <span className="sidebarContentText"> Chirkuut</span>
      </div>
      <div className="sidebarContentItem">
        <div className="trigger" onClick={handleTrigger}>
          {isOpen ? <IconHide /> : <IconHide />}
        </div>
      </div>
    </div>
  );
}

export default SidebarTop;
