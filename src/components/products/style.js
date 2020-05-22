import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../shared/theme';
import fonts from '../../shared/fonts';
import texture from '../../img/texture.png';
import { title } from '../title/style';

export const Section = styled.section`
  margin-bottom: 2em;
`;

export const Title = styled.h2`
  ${title};
`;

export const Grid = styled.ul`
  list-style: none;
  margin: 0 -1em;
  padding-left: 0;

  display: flex;
  flex-wrap: wrap;
`;

export const StyledProduct = styled.li`
  flex: 0 0 25%;
  padding: 1em;
`;

export const Cover = styled.img`
  width: 100%;
  height: 14em;
  object-fit: cover;
  transition: .3s transform;

  &:hover {
    transform: rotate(-5deg);
  }
`;

export const ProductName = styled.p`
  
`;

export const Price = styled.p`
  color: ${theme.text.interactive};
`;

export const Abbr = styled.abbr`
  font-variant: all-small-caps;
  text-decoration: none;
`;