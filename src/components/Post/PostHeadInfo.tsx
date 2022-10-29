import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export type PostHeadInfoProps = {
  title: string,
  date: string,
  categories: string[],
};

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 768px;
  height: 200px;
  margin: 0 auto;
  padding: 60px 0 30px 0;
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 32px;
  font-weight: 800;
  color: #f8f8f2;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: rgba(248, 248, 242, 0.7);

  a:hover {
    color: #f8f8f2;
  }
`;

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #f8f8f2;
`;

const PostHeadInfo: React.FC<PostHeadInfoProps> = ({ title, date, categories }) => {
  return (
    <PostHeadInfoWrapper>
      <Title>{title}</Title>
      <PostData>
        <CategoryWrapper>
          {categories.map((category) => (
            <Link to={`/?category=${category}`} key={category}>
              {'#' + category}
            </Link>
          ))}
        </CategoryWrapper>
        <div>{date}</div>
      </PostData>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
