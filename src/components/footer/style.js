import styled from 'styled-components';
import theme from '../../shared/theme';

export const StyledFooter = styled.footer`
  background-color: ${theme.bg.secondary};
  padding: 1em 0;
  margin-top: auto;
`;

export const P = styled.p`
  margin: 0;
  text-align: center;
`;

export const CopyRight = styled.small`
  color: #fff;
  font-size: 1rem;
`;

export const SocialList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0 0 1em;
  display: flex;
  justify-content: center;
`;

export const SocialItem = styled.li`
  margin: 0 .2em;
`;

export const SocialLink = styled.a`
  display: block;
  width: 3em;
  height: 3em;
  padding: .6em;
  transition: .15s opacity;

  &:hover,
  &:focus {
    opacity: .7;
  }
`;

export const Icon = styled.img`
  width: 100%;
`;