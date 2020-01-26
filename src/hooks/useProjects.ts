import { graphql, useStaticQuery } from 'gatsby';
import { ChildImageSharp } from '../typings';

interface Node {
  content: string;
  data: {
    slug: string;
    date: string;
    title: string;
    platform: 'web' | 'desktop';
    screenshot: {
      childImageSharp: ChildImageSharp;
    };
    link?: string;
    video?: {
      publicURL: string;
    };
  };
}

interface Response {
  allMarkdownRemark: {
    nodes: Node[];
  };
}

export function useProjects() {
  return useStaticQuery<Response>(query).allMarkdownRemark.nodes;
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        content: html
        data: frontmatter {
          slug
          date
          title
          platform
          screenshot {
            childImageSharp {
              fluid(maxWidth: 1000) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
          link
          video {
            publicURL
          }
        }
      }
    }
  }
`;
