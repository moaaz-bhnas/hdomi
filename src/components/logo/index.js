import React, { memo } from 'react';
import {
  LogoLink,
  LogoImg,
  LogoText
} from './style';
import logo from '../../img/logo.png';
import { title } from '../../shared/data';

const Logo = ({ fontSize, color, outline }) => {
  return (
    <LogoLink outline={outline} to="/">
      <LogoText fontSize={fontSize} color={color}>{title}</LogoText>
      {/* <LogoImg src={logo} alt="Logo" /> */}
    </LogoLink>
  );
}

export default memo(Logo);