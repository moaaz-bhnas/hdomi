import React, { memo } from 'react'
import { P, Title } from './style';
import { Container } from '../../components/container/style';

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <P>We are team of three developers who are passionate about fashion.</P>
      <P>We follow different brands and trends. We've always been wondering why there aren't any Egyptian brands that are up-to-date .. We have a very good material.</P>
      <P>So we decided to start by a small shop "Hdomi" where we sell few local-made products of our design.</P>
    </Container>
  );
}

export default memo(About);