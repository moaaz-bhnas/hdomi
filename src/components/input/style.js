import styled from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const Input = styled.input`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  margin-bottom: 1em;
  padding: .7em .6em;
  max-width: 100%;
  border-radius: ${measurements.borderRadius.input};

  &::placeholder {
    font-size: 1rem;
  }
`;