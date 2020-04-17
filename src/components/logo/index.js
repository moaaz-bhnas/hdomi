import React, { memo } from 'react';
import {
  LogoLink,
  LogoImg,
  LogoText
} from './style';
import logo from '../../img/logo.png';
import { title } from '../../shared/data';

const Logo = ({ fontSize }) => {
  return (
    <LogoLink to="/">
      <LogoText fontSize={fontSize}>{title}</LogoText>
      {/* <LogoImg src={logo} alt="Logo" /> */}
    </LogoLink>
  );
}

export default memo(Logo);