import React from 'react'
import Banner from '../../components/banner';
import Categories from '../../components/categories';
import {
  Container
} from './style';

const IndexPage = () => {
  return (
    <Container>
      <Banner />
      <Categories />
    </Container>
  );
}

export default IndexPage;