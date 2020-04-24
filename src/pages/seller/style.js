import styled from 'styled-components';
import measurements from '../../shared/measurements'

export const SellerPage = styled.div`
  padding-left: ${({ sidebarExpanded }) => sidebarExpanded ? 
  measurements.width.sidebar : 
  measurements.width.sidebarCollapsed};
`;

export const Container = styled.div`
  max-width: ${measurements.maxWidth.container};
  margin: 0 auto;
`;