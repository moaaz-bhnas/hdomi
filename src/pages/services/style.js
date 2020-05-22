import styled from 'styled-components';
import { title } from '../../components/title/style';
import bg from '../../img/happy.jpg';

export const P = styled.p`
  
`;

export const Title = styled.h2`
  ${title}
`;

export const ServicesContainer = styled.div`
  max-width: 62rem;
  margin: 0 auto;

  &::after {
    content: '';
    position: fixed;
    top: 48px; left: 0; right: 0; bottom: 117px;
    background: url(${bg}) no-repeat 50% 50% / cover;
    opacity: .1;
    z-index: -1;
  }
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