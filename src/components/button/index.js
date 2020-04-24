import React, { memo } from 'react';
import {
  AddProduct, 
  AddIcon
} from './style';
import addIcon from '../../img/add.svg';

export const AddProductButton = () => {
  return (
    <AddProduct to={`/seller/add-product`}>
      <AddIcon src={addIcon} alt="" />
      Add product
    </AddProduct>
  );
}
