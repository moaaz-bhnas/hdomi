import styled from 'styled-components';
import { title } from '../title/style';
import fonts from '../../shared/fonts';
import measurements from '../../shared/measurements';
import { rectButton } from '../button/style';

export const StyledForm = styled.form`
  max-width: 24em;
  margin-bottom: 2em;
`;

export const Title = styled.h3`
  font-family: ${fonts.serif};
  font-size: 1.5rem;
  margin-bottom: .8em;
`;

export const Button = styled.button`
  ${rectButton}
`;