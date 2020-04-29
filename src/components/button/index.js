import React, { memo } from 'react';
import {
  AddProduct, 
  AddIcon,
  Button,
  NextIcon,
  PreviousIcon
} from './style';
import addIcon from '../../img/add.svg';
import nextIcon from '../../img/next.svg';
import previousIcon from '../../img/previous.svg';

export const AddProductButton = () => {
  return (
    <AddProduct to={`/seller/add-product`}>
      <AddIcon src={addIcon} alt="" />
      Add product
    </AddProduct>
  );
}

export const NextButton = ({ onClick }) => {
  return (
    <Button 
      type="submit"
      onClick={onClick}
    >
      Next
      <NextIcon src={nextIcon} alt="" />
    </Button>
  );
}

export const PreviousButton = ({ onClick }) => {
  return (
    <Button 
      type="submit"
      onClick={onClick}
    >
      <PreviousIcon src={previousIcon} alt="" />
      Previous
    </Button>
  );
}
