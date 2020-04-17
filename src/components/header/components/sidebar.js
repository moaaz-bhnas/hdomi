import React, { memo } from 'react';
import {
  SidebarToggler,
  HamburgerIcon
} from '../style';
import hamburgerIcon from '../../../img/menu.svg';

const Sidebar = () => {
  return (
    <>
      <SidebarToggler>
        <HamburgerIcon className="sidebar__hamburgerIcon" src={hamburgerIcon} alt="Toggle sidebar" />
      </SidebarToggler>
    </>
  );
}

export default memo(Sidebar);