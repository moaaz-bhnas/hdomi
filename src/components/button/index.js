import React, { memo } from 'react';
import {
  AddProduct, 
  AddIcon,
  Button,
  NextIcon
} from './style';
import addIcon from '../../img/add.svg';
import nextIcon from '../../img/next.svg';

export const AddProductButton = () => {
  return (
    <AddProduct to={`/seller/add-product`}>
      <AddIcon src={addIcon} alt="" />
      Add product
    </AddProduct>
  );
}

export const NextButton = ({ disabled }) => {
  console.log('disabled: ', disabled);
  return (
    <Button type="submit" disabled={disabled}>
      Next
      <NextIcon src={nextIcon} alt="" />
    </Button>
  );
}
