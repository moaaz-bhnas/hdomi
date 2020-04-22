import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {  
  StyledSellerSidebar, 
  SellerSidebarList,
  SellerSidebarItem,
  SellerSidebarLink,
  RightArrow,
  SellerSidebarLinkText
} from '../style';
import SidebarToggler from './sidebarToggler';
import SvgDashboard from '../../../svgs/dashboard';
import SvgProducts from '../../../svgs/products';
import SvgSponsored from '../../../svgs/sponsored';
import rightArrow from '../../../img/right-arrow.svg';

const items = [ 
  { value: 'dashboard',          Icon: SvgDashboard },
  { value: 'products',           Icon: SvgProducts },
  { value: 'sponsored products', Icon: SvgSponsored }
];

const Item = ({ itemObject, index, activeIndex, setActiveIndex, expanded }) => {
  const { value, Icon } = itemObject;
  const href = (value === 'dashboard') ? '/seller' : `/seller/${value.split(' ').join('-')}`;
  
  const active = (index === activeIndex);
  // console.log(expanded);

  return (
    <SellerSidebarItem>
      <SellerSidebarLink 
        className={`sellerSidebar__${value.split(' ')[0]}Link`}
        to={href} 
        data-active={active} 
        onMouseDown={e => e.preventDefault()}
        onClick={() => setActiveIndex(index)}
        aria-label={value}
      >
        <Icon />
        {expanded && <SellerSidebarLinkText>{value}</SellerSidebarLinkText>}
        {expanded && !active && <RightArrow src={rightArrow} alt="" />}
      </SellerSidebarLink>
    </SellerSidebarItem>
  );
}

const SellerSidebar = () => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ expanded, setExpanded ] = useState(true);

  return (
    <StyledSellerSidebar>
      <SidebarToggler 
        size="1.2em"
        onClick={() => setExpanded(!expanded)}
      />

      <SellerSidebarList expanded={expanded}>
        {
          items.map((item, index) => (
            <Item 
              key={item.value} 
              itemObject={item} 
              index={index} 
              activeIndex={activeIndex} 
              setActiveIndex={setActiveIndex} 
              expanded={expanded}
            />
          ))
        }
      </SellerSidebarList>
    </StyledSellerSidebar>
  );
}

export default memo(SellerSidebar);