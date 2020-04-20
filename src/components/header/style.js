import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import fonts from '../../shared/fonts';

export const StyledHeader = styled.header`
  margin-bottom: 1.5em;
  padding-top: 5.375em;

  &[data-topbar="false"] {
    padding-top: 3em;
  }

  &[data-seller-center="true"] {
    padding-top: 3em;
  }
`;

const unvisible = css`
  position: absolute;
  left: -100rem;
`;

export const Title = styled.h1`
  ${unvisible}
`;

export const Navigation = styled.nav``;

export const NavigationTitle = styled.h2`
  ${unvisible}
`;

const fixedStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const TopAndMiddleBarsContainer = styled.div`
  ${fixedStyles};
`;

export const StyledTopBar = styled.div`
  height: 2.375em;
  background-color: ${theme.bg.secondary};
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  transition: margin-top .2s;

  &[data-visible="false"] {
    margin-top: -2.375em;
  }
`;

export const Invitation = styled.p`
  color: #fff;
  margin: 0;
  align-self: stretch;
  display: flex;
  align-items: center;
`;

export const InvitationLink = styled(Link)`
  color: #fff;
  margin: 0 .5em;
  align-self: stretch;
  display: flex;
  align-items: center;

  &:focus {
    outline-color: #fff;
  }
`;

export const B = styled.b``;

export const StyledMiddleBar = styled.div`
  background-color: ${theme.bg.secondary};
  height: 3rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .15);
`;

export const Container = styled.div`
  max-width: ${measurements.maxWidth.container};
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSearchForm = styled.form`
  background-color: #fff;
  border-radius: .3rem;

  height: 2.3rem;
  display: flex;
  margin-right: auto;
`;

const buttonStyles = css`
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBtn = styled.button`
  ${buttonStyles}

  padding: 0;
  width: 2.4rem;
  border-radius: 0 .3rem .3rem 0;
  background-color: ${theme.bg.secondaryLight};

  &:hover,
  &:focus {
    background-color: #fff;
    outline-color: #fff;
  }
`;

export const SearchIcon = styled.img`
  width: 1rem;
`;

export const SearchInput = styled.input`
  border: none;
  width: 15rem;
  padding-left: .4rem;
  border-radius: .3rem 0 0 .3rem;
  background-color: ${theme.bg.secondaryLight};

  &:focus {
    background-color: #fff;
    outline-color: #fff;

    &::placeholder {
      color: #757575;
    }
  }

  &::placeholder {
    color: ${theme.text.secondaryLightOpposite};
  }
`;

export const FavoritesContainer = styled.div`
`;

const svgStyles = css`
  fill: transparent;
  stroke: #fff;
  stroke-width: 30;
  width: 1.3em;

  transition: fill .1s;
`;

export const FavoritesToggler = styled.button`
  ${buttonStyles}
  height: 3rem;
  padding: 0 .85em;
  // margin-right: 1em;

  &:hover,
  &:focus {
    outline-color: #fff;

    .heartSvg {
      fill: #fff;
    }
  }

  .heartSvg {
    ${svgStyles}
  }
`;

export const ChatContainer = styled.div``;

export const ChatToggler = styled.button`
  ${buttonStyles}
  height: 3rem;
  padding: 0 1.05em;
  margin-right: 1em;

  &:hover,
  &:focus {
    outline-color: #fff;

    .chatSvg {
      fill: #fff;
    }
  }

  .chatSvg {
    ${svgStyles}
  }
`;

export const StyledAuth = styled.p`
  margin: 0;
`;

export const AuthLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: .5rem 0;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: underline;
    outline-color: #fff;
  }
`;

export const Span = styled.span`
  margin: 0 .7em;
  color: #fff;
`;

export const StyledBottomBar = styled.div`
  padding: 2.5em 0;
`;

export const StyledSidebarToggler = styled.button`
  ${buttonStyles}
  height: 3rem;
  padding: 0 1em;
  margin-right: .5em;
  margin-left: -1.05em;

  &:hover,
  &:focus {
    .sidebar__hamburgerIcon {
      opacity: .6;
    }
  }

  &:focus {
    outline-color: #fff;
  }
`;

export const HamburgerIcon = styled.img`
  width: 1em;
  transition: opacity .1s;
`;

export const LogoLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-right: 1em;
  align-self: stretch;
  display: flex;
  align-items: center;
`;

// export const LogoImg = styled.img`
//   width: 8rem;
// `;

export const LogoText = styled.span`
  font-size: 2rem;
  font-family: ${fonts.serif};
`;

export const StyledCategories = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  display: flex;
`;

export const Category = styled.li`
  &:last-child {
    .headerBottomBar__categoryLink {
      padding-right: 0;
    }
  }
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1em 1.5em;
  letter-spacing: .05em;

  &:hover,
  &:focus {
    color: ${theme.text.interactive};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownToggler = styled.button`
  ${buttonStyles}
  font-weight: 600;
  color: #fff;
  height: 3rem;
  transition: .1s opacity;

  &:hover,
  &:focus {
    opacity: .6;
    outline-color: #fff;
  }
`;

export const DownArrow = styled.img`
  width: .85em;
  margin-left: .8em;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  background-color: #fff;
  width: 15em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: .8rem;
    height: .8rem;
    background-color: #fff;
  }
`;

export const MenuitemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: .5em;

  display: flex;
  align-items: center;

  transition-property: font-weight, background-color;
  transition-duration: .1s;

  &:hover,
  &:focus,
  &[tabindex="0"] {
    font-weight: 600;
    background-color: ${theme.bg.grey};
  }

  &:nth-last-child(2) {
    border-bottom: 2px solid ${theme.border.grey};
  }
`;

export const MenuitemButton = styled.button`
  ${buttonStyles};
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 600;
  color: ${theme.text.interactive};
  padding: 1.1em 0;

  &:hover,
  &:focus,
  &[tabindex="0"] {
    background-color: #fbf2f0;
  }
`;

export const MenuitemIcon = styled.img`
  width: 1.8em;
  margin-right: .9em;
`;

export const StyledSellerBar = styled.div`
  background-color: ${theme.bg.secondary};
  height: 3em;
  display: flex;
  padding: 0 1.05em;

  ${fixedStyles}
`;

export const StyledSellerSidebar = styled.div``;