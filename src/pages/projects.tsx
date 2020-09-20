import React from 'react';
import { graphql } from 'gatsby';
import { Projects } from '@/components/Projects';
import { RouteComponentProps, Schema$Project } from '@/typings';

interface Data {
  allMarkdownRemark: {
    nodes: Schema$Project[];
  };
}

export default function ({ data }: RouteComponentProps<Data>) {
  return <Projects projects={data.allMarkdownRemark.nodes} />;
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date }
      filter: { frontmatter: { slug: { ne: "schema" } } }
    ) {
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
          video {
            publicURL
          }
          github
          link
        }
      }
    }
  }
`;
