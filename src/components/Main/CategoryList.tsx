import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export type CategoryListProps = {
  selectedCategory: string,
  categoryList: {
    [key: string]: number,
  },
};

type CategoryItemProps = {
  active: boolean,
};

type GatsbyLinkProps = {
  children: React.ReactNode,
  className?: string,
  to: string,
} & CategoryItemProps;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 30px auto 0;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => <Link {...props} />)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  color: rgba(248, 248, 242, 0.7);

  font-weight: ${(active) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: #f8f8f2;
  }
`;

const CategoryList: React.FC<CategoryListProps> = ({ selectedCategory, categoryList }) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem to={`/?category=${name}`} active={name === selectedCategory} key={name}>
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
