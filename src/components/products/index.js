import React, { memo } from 'react';
import {
  Section,
  Title,
  Grid,
  StyledProduct,
  ProductContainer,
  Cover,
  ProductName,
  Price,
  Abbr
} from './style';
import product1 from '../../img/1.jpg';
import product2 from '../../img/2.jpg';
import product3 from '../../img/3.jpg';
import product4 from '../../img/4.jpg';
import product5 from '../../img/5.jpg';
import product6 from '../../img/6.jpg';
import product7 from '../../img/7.jpg';
import product8 from '../../img/8.jpg';

class Product {
  constructor(name, cover, price) {
    Object.assign(this, {name, cover, price});
  }
}

const products = [
  new Product('Black Cuffed Joggers', product1, 250),
  new Product('White Crew Neck T-Shirt', product2, 300),
  new Product('Navy Rinse Wash Slim Stretch Jeans', product3, 300),
  new Product('Red Check Long Sleeve Cotton Shirt', product4, 200),
  new Product('Stone Slim Fit Chinos', product5, 200),
  new Product('White Muscle Fit Organic Cotton T-Shirt', product6, 150),
  new Product('Navy Cuffed Joggers', product7, 280),
  new Product('Navy Long Sleeve Zip Up Hoodie', product8, 220),
];

console.log(products);

const Products = () => {
  return (
    <Section>
      <Title>Products</Title>

      <Grid>
        {
          products.map(product => (
            <StyledProduct>
              <Cover src={product.cover} alt="" />
              <ProductName>{product.name}</ProductName>
              <Price>{product.price} <Abbr title="Egyptian">EGP</Abbr></Price>
            </StyledProduct>
          ))
        }
      </Grid>
    </Section>
  );
}

export default memo(Products);