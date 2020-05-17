import React, { memo } from 'react'
import { Section, P, Title } from './style';
import { Container } from '../../components/container/style';

const Services = () => {
  return (
    <Container>
      <Title>Services</Title>
      <P>At Hdomi, we provide our customers with high quality 100% Egyptian cotton.</P>
      <P>We have a very helpful and friendly customer services. Our delivery is the fastest, and it's free.</P>
      <P>Out returns policy is very flexible too.</P>
    </Container>
  );
}

export default memo(Services);