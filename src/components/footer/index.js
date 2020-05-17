import React, { memo } from 'react';
import {
  StyledFooter, 
  CopyRight,
  P,
  SocialList,
  SocialItem,
  SocialLink,
  Icon
} from './style';
import facebook from '../../img/facebook.svg';
import twitter from '../../img/twitter.svg';
import linkedIn from '../../img/in.svg';

class Social {
  constructor(name, icon, link) {
    Object.assign(this, { name, icon, link })
  }
}

const socialMedia = [
  new Social('Facebook', facebook, 'https://www.facebook.com/moaaz.bahnas'),
  new Social('Twitter', twitter, 'https://twitter.com/moaaz_bhnas'),
  new Social('LinkedIn', linkedIn, 'https://www.linkedin.com/in/moaaz-bhnas/')
];

const Footer = () => {
  return (
    <StyledFooter>
      <SocialList>
        {
          socialMedia.map(item => (
            <SocialItem>
              <SocialLink href={item.link}>
                <Icon src={item.icon} alt={item.name} />
              </SocialLink>
            </SocialItem>
          ))
        }
      </SocialList>
      <P>
        <CopyRight>
          ©2020 Hdomi all rights reserved
        </CopyRight>
      </P>
    </StyledFooter>
  );
}

export default memo(Footer);