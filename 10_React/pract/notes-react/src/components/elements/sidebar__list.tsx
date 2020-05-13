import React from 'react';

const SidebarList: React.FC = ({ children }) => {
  return (
    <div id="sidebar-notes__list">
      {children}
    </div>
  )
}

export default SidebarList;
