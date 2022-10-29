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
  idx: number,
} & CategoryItemProps;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  box-sizing: content-box;
  margin: 50px 30px;
  width: 200px;
  border-right: 1px solid #44475a;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, idx, ...props }: GatsbyLinkProps) => (
  <Link {...props} activeStyle={{ color: '#f8f8f2' }} />
))`
  font-size: 18px;
  color: ${({ active, idx }) => (active ? '#f8f8f2' : colors[idx % colors.length])};

  font-weight: 600;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    color: #f8f8f2;
  }
`;

const colors = ['#bd93f9', '#ff79c6', '#50fa7b', '#f1fa8c', '#ffb86c', '#8be9fd'];

const CategoryList: React.FC<CategoryListProps> = ({ selectedCategory, categoryList }) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count], idx) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
          // css={{ color: colors[idx % colors.length] }}
          idx={idx}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
