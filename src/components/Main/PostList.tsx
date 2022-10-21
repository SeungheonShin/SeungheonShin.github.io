import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import PostItem from './PostItem';

import { PostListItemType } from 'types/PostItem.types';

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

type PostListProps = {
  selectedCategory: string,
  posts: PostListItemType[],
};

const PostList: React.FC<PostListProps> = ({ posts, selectedCategory }) => {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) => (selectedCategory !== 'All' ? categories.includes(selectedCategory) : true),
      ),
    [selectedCategory],
  );

  return (
    <PostListWrapper>
      {postListData.map(
        ({
          node: {
            id,
            frontmatter,
            fields: { slug },
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  );
};

export default PostList;
