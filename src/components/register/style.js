import styled from 'styled-components';
import theme from '../../shared/theme';
import fonts from '../../shared/fonts';

export const Form = styled.form`
  max-width: 30em;
`;

export const Title = styled.h2`
  font-family: ${fonts.serif};
  font-size: 1.9rem;
  margin-bottom: 1.5em;
`;

export const PersonalInfo = styled.div`

`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  margin: .5em 0 1em;
  border: .5px solid ${theme.border.grey};
`;

export const ShopInfo = styled.div`
  
`;

export const WorkingHours = styled.div`
  
`;

export const InputContainer = styled.div`
  flex: 0 calc(50% - .5em);
`;

export const Label = styled.label`
  
`;