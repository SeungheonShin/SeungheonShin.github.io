import React from 'react';
import { graphql } from 'gatsby';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Template from 'components/common/Template';
import PostHead from 'components/Post/PostHead';
import TableOfContents from 'components/Post/TableOfContents';
import PostContent from 'components/Post/PostContent';
import CommentWidget from 'components/Post/CommentWidget';

import { PostFrontmatterType } from 'types/PostItem.types';
import styled from '@emotion/styled';

export type PostPageItemType = {
  node: {
    html: string,
    tableOfContents: string,
    frontmatter: PostFrontmatterType,
  },
};

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[],
    },
  },
};

void deckDeckGoHighlightElement();

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 200px 0 260px;
`;

const PostTemplate: React.FC<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: {
        title,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = edges[0];

  return (
    <Template>
      <PostHead title={title} date={date} categories={categories} />
      <ContentWrapper>
        <TableOfContents content={tableOfContents} />
        <PostContent html={html} />
      </ContentWrapper>
      <CommentWidget />
    </Template>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
