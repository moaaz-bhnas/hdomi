import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const rectButton = css`
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  background-color: ${theme.bg.accent};
  border-radius: ${measurements.borderRadius.input};
  border: none;
  align-self: flex-start;
  padding: 1em;
  cursor: pointer;
  transition: .1s opacity;

  &:hover,
  &:focus {
    opacity: .8;
  }
`;