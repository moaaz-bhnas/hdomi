import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../shared/theme';
import fonts from '../../shared/fonts';
import texture from '../../img/texture.png';

export const Section = styled.section``;

export const Title = styled.h2`
  font-family: ${fonts.serif};
  font-size: 2rem;
  margin: 0 0 1.25em 0;
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