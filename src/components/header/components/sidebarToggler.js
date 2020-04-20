import React, { memo } from 'react'
import {
  StyledSidebarToggler,
  HamburgerIcon
} from '../style';
import hamburgerIcon from '../../../img/menu.svg';

const SidebarToggler = () => {
  return (
    <StyledSidebarToggler>
      <HamburgerIcon className="sidebar__hamburgerIcon" src={hamburgerIcon} alt="Toggle sidebar" />
    </StyledSidebarToggler>
  );
}

export default memo(SidebarToggler);