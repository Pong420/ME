import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Thumbnail } from '../../typings';
import Img from 'gatsby-image';

interface Props {
  name: string;
  platform: string;
  thumbnail: Thumbnail;
}

interface Edge {
  node: {
    relativePath: string;
    childImageSharp: ChildImageSharp;
  };
}

interface QueryProps {
  allFile: {
    edges: Edge[];
  };
}

export const ScreenShot = React.memo(({ name, platform, thumbnail }: Props) => {
  const {
    allFile: { edges }
  } = useStaticQuery<QueryProps>(query);

  const images = edges.reduce<Record<string, ChildImageSharp>>(
    (result, { node }) => {
      const src = node.relativePath.replace('project/', '');
      result[src] = node.childImageSharp;
      return result;
    },
    {}
  );

  const { width, height, src } = thumbnail;

  return (
    <div className={`screenshot ${platform}`} title={name}>
      <div
        className="img-wrapper"
        style={{
          height: 0,
          paddingBottom: (height / width) * 100 + '%'
        }}
      >
        <Img {...images[src]} />
      </div>
    </div>
  );
});

const query = graphql`
  query Screenshot {
    allFile(
      filter: {
        extension: { regex: "/(png|jpg)/" }
        relativeDirectory: { eq: "project" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
