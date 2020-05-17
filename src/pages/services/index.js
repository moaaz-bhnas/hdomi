import React, { memo } from 'react'
import { Section, P, Title, Content, Img, ServicesContainer } from './style';
import image from '../../img/happy.jpg'

const Services = () => {
  return (
    <ServicesContainer>
      <Img src={image} alt="" />
      <Content>
        <Title>Services</Title>
        <P>At Hdomi, we provide our customers with high quality 100% Egyptian cotton.</P>
        <P>We have a very helpful and friendly customer services. Our delivery is the fastest, and it's free.</P>
        <P>Out returns policy is very flexible too.</P>
      </Content>
    </ServicesContainer>
  );
}

export default memo(Services);