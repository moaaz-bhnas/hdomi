import React, { memo } from 'react';
import {
  NavList, 
  NavListItem, 
  NavListLink
} from '../style';

const list = ['services', 'about', 'contact us'];

const NavigationList = () => {
  return (
    <NavList>
      {
        list.map(item => (
        <NavListItem key={item}>
          <NavListLink 
            to={`/${(item === 'contact us') ? 'contact' : item}`}
            onMouseDown={e => e.preventDefault()}
          >{item}</NavListLink>
        </NavListItem>
        ))
      }
    </NavList>
  );
}

export default memo(NavigationList);