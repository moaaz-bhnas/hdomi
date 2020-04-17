import React, { memo } from 'react';
import {
  StyledCategory,
  CategoryName,
  CoverContainer,
  CategoryCover,
  CategoryLink
} from '../style';

const Category = (props) => {
  const { category } = props;

  return (
    <StyledCategory>
      <CategoryLink to={`/category/${category.name}`}>
        <CoverContainer>
          <CategoryCover className="Category__cover" src={category.cover} alt="" />
        </CoverContainer>
        <CategoryName>{category.name}</CategoryName>
      </CategoryLink>
    </StyledCategory>
  );
}

export default memo(Category);