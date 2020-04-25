import styled from 'styled-components';
import { title } from '../title/style';
import theme from '../../shared/theme';

export const Form = styled.form`
  
`;

export const Title = styled.h2`
  ${title}
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48em;
`;

export const Step = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepIconContainer = styled.div`
  width: 3em;
  height: 3em;
  padding: .6em;
  border-radius: 50%;
  // background-color: #ddd;
  border: 1px solid ${theme.bg.secondary};

  .svg {
    width: 100%;
  }
`;

export const StepText = styled.p`
  
`;