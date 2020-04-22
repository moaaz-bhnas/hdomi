import React, { memo } from 'react'
import {
  StyledSidebarToggler,
  HamburgerIcon
} from '../style';
import hamburgerIcon from '../../../img/menu.svg';

const SidebarToggler = ({ size, onClick }) => {
  return (
    <StyledSidebarToggler
      onClick={onClick}
    >
      <HamburgerIcon className="sidebar__hamburgerIcon" size={size} src={hamburgerIcon} alt="Toggle sidebar" />
    </StyledSidebarToggler>
  );
}

export default memo(SidebarToggler);