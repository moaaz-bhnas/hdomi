import React, { memo } from 'react'
import { Section, P, Title, Content, Img, ServicesContainer, List, Item, Service, Icon } from './style';
import image from '../../img/happy.jpg';
import delivery from '../../img/delivery.svg';
import cs from '../../img/customer.svg';
import returns from '../../img/return.svg';

const services = [
  { name: 'Free Delivery', img: delivery },
  { name: 'Free Returns', img: returns },
  { name: 'Responsive Customer Services', img: cs }
];

const Services = () => {
  return (
    <ServicesContainer>
      <Img src={image} alt="" />
      <Content>
        <Title>Services</Title>
        <P>At Hdomi, we provide our customers with high quality 100% Egyptian cotton.</P>
        <P>We have a very helpful and friendly customer services. Our delivery is the fastest, and it's free.</P>
        <P>Out returns policy is very flexible too.</P>

        <List>
          {
            services.map(service => (
              <Item>
                <Icon src={service.img} alt="" />
                <Service>{service.name}</Service>
              </Item>
            ))
          }
        </List>
      </Content>
    </ServicesContainer>
  );
}

export default memo(Services);