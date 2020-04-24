import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import { Link } from 'react-router-dom';

export const rectButton = css`
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  background-color: ${theme.bg.accent};
  border-radius: ${measurements.borderRadius.input};
  border: none;
  padding: 1em;
  cursor: pointer;
  transition: .1s opacity;
  display: inline-flex;
  align-items: center;

  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export const AddProduct = styled(Link)`
  text-decoration: none;
  ${rectButton}
`;

export const AddIcon = styled.img`
  width: 1em;
  margin-right: .55em;
`;