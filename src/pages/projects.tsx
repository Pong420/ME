import React from 'react';
import { graphql } from 'gatsby';
import { Projects } from '@/components/Projects';
import { RouteComponentProps, Schema$Project } from '@/typings';

interface Data {
  allMarkdownRemark: {
    nodes: Schema$Project[];
  };
}

export default function ProjectsPage({ data }: RouteComponentProps<Data>) {
  return <Projects projects={data.allMarkdownRemark.nodes} />;
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
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
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
