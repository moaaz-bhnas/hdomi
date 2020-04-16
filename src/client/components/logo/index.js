import { memo } from 'react';
import Link from 'next/link';
import {
  LogoLink,
  LogoImg,
  LogoText
} from './style';
import logo from '../../img/logo.png';
import { title } from '../../shared/data';

const Logo = ({ fontSize }) => {
  return (
    <Link passHref href="/">
      <LogoLink>
        <LogoText fontSize={fontSize}>{title}</LogoText>
        {/* <LogoImg src={logo} alt="Logo" /> */}
      </LogoLink>
    </Link>
  );
}

export default memo(Logo);