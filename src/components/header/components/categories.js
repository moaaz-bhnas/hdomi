import React, { memo } from 'react';
import {
  StyledCategories, 
  Category,
  CategoryLink
} from '../style';

const categories = ['men', 'women', 'boys', 'girls'];

const Categories = () => {
  return (
    <StyledCategories>
      {categories.map((category, index) => (
        <Category key={index}>
          <CategoryLink to="/category" className="headerBottomBar__categoryLink">{category}</CategoryLink>
        </Category>
      ))}
    </StyledCategories>
  );
}

export default memo(Categories);