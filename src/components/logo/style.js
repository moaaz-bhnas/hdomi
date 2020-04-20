import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../shared/fonts';

export const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: .2em 0;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    outline-color: ${props => props.outline};
  }
`;

// export const LogoImg = styled.img`
//   width: 8rem;
// `;

export const LogoText = styled.span`
  font-family: ${fonts.serif};
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.color};
`;