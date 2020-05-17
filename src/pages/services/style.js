import styled from 'styled-components';
import { title } from '../../components/title/style'

export const Section = styled.section`
  
`;

export const Content = styled.div`
  
`;

export const P = styled.p`
  
`;

export const Title = styled.h2`
  ${title}
`;

export const Img = styled.img`
  width: 12em;
  margin: 1.8em 2em 0 0;
`;

export const ServicesContainer = styled.div`
  max-width: 62rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 3em;

  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  flex: 0 0 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Service = styled.p`
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 5em;
`;