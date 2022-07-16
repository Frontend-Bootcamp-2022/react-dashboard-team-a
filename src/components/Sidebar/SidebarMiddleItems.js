function SidebarMiddleItem({ display, icon }) {

  return (
      <div className="sidebarContentItem" role="button">
        {icon}

        <span className="sidebarContentText">{display}</span>
      </div> 
  );
}

export default SidebarMiddleItem;