import React from 'react';
import styled from '@emotion/styled';

import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo';
import NavBar from 'components/common/NavBar';

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #383a59;
`;

const PostHead: React.FC<PostHeadInfoProps> = ({ title, date, categories }) => {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
      <NavBar />
    </PostHeadWrapper>
  );
};

export default PostHead;
