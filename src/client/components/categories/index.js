import { memo } from 'react';
import {
  Section,
  Title,
  CategoriesList
} from './style';
import Category from './components/category';
import men from '../../img/men2.jpg';
import women from '../../img/women.jpeg';
import kids from '../../img/kids1.jpg';

const categories = [
  {
    id: 1,
    name: 'men',
    cover: men
  },
  {
    id: 2,
    name: 'women',
    cover: women
  },
  {
    id: 3,
    name: 'kids',
    cover: kids
  }
];

const Categories = () => {
  return (
    <Section>
      <Title>Categories</Title>

      <CategoriesList>
        {
          categories.map(category => (
            <Category key={category.id} category={category} />
          ))
        }
      </CategoriesList>
    </Section>
  );
}

export default memo(Categories);