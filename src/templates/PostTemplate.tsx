import React from 'react';
import { graphql } from 'gatsby';

import Template from 'components/common/Template';
import PostHead from 'components/Post/PostHead';
import PostContent from 'components/Post/PostContent';
import CommentWidget from 'components/Post/CommentWidget';

import { PostFrontmatterType } from 'types/PostItem.types';

export type PostPageItemType = {
  node: {
    html: string,
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

const PostTemplate: React.FC<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {
    node: {
      html,
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
      <PostContent html={html} />
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
