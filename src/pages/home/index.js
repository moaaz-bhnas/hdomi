import React from 'react'
import Banner from '../../components/banner';
import { Container } from '../../components/container/style';
import Products from '../../components/products';

const IndexPage = () => {
  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  );
}

export default IndexPage;