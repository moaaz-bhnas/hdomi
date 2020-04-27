import styled from 'styled-components';
import { title } from '../title/style';
import theme from '../../shared/theme';

export const Form = styled.form`
  
`;

export const FormContainer = styled.div`
  max-width: 25em;
`;

export const Title = styled.h2`
  ${title}
`;

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48em;
  margin-bottom: 2.5em;
`;

export const Step = styled.div`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    .progressbar__iconContainer::after {
      display: none;
    }
  }
  
  &[data-active="true"] {
    .progressbar__iconContainer {
      border-color: ${theme.bg.success};
      // background-color: #c2d9c1;
    }
  }

  &[data-finished="true"] {
    .progressbar__iconContainer {
      border-color: ${theme.bg.success};
      background-color: ${theme.bg.success};

      &::after {
        background-color: ${theme.border.success};
      }

      .svg {
        fill: #fff;
      }
    }
  }
  `;

const borderColor = '#afaead';

export const StepIconContainer = styled.div`
  width: 3em;
  height: 3em;
  padding: .6em;
  border-radius: 50%;
  background-color: #f0f0ef;
  border: 2px solid ${borderColor};
  position: relative;
  transition-property: border-color, background-color;
  transition-duration: .2s;

  .svg {
    width: 100%;
    fill: #646463;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 10em;
    height: 2px;
    background-color: ${borderColor};
    top: 50%;
    left: 2.5em;
    transform: translate(0, -50%);
    transition: background-color .2s;
  }
`;

export const StepText = styled.p`
  text-transform: capitalize;
`;

export const SubTitle = styled.h3`
  font-size: 1.3rem;
`;

export const DataList = styled.datalist``;

export const Option = styled.option``