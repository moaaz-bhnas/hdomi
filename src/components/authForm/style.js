import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../shared/fonts';
import theme from '../../shared/theme';
import { rectButton } from '../button/style';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 25em;
`;

export const Title = styled.h2`
  font-family: ${fonts.serif};
  font-size: 1.9rem;
  margin-bottom: 1.5em;
`;

const linkStyles = css`
  color: ${theme.text.interactive};
  text-decoration: none;
  align-self: flex-start;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const PasswordRecoveryLink = styled(Link)`
  ${linkStyles}
  margin-bottom: 1em;
`;

export const SubmitButton = styled.button`
  ${rectButton}
`;

export const P = styled.p``;

export const AuthLink = styled(Link)`
  ${linkStyles}
`;