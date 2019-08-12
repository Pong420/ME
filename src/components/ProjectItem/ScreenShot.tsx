import React, { useMemo, CSSProperties } from 'react';
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

export function ScreenShot({ name, platform, thumbnail }: Props) {
  const {
    allFile: { edges }
  } = useStaticQuery<QueryProps>(query);

  const images = useMemo(
    () =>
      edges.reduce<Record<string, ChildImageSharp>>((result, { node }) => {
        const src = node.relativePath.replace('project/', '');
        result[src] = node.childImageSharp;
        return result;
      }, {}),
    []
  );

  const { width, height, src } = thumbnail;
  const style = useMemo<CSSProperties>(
    () => ({
      height: 0,
      paddingBottom: (height / width) * 100 + '%'
    }),
    [width, height]
  );

  return (
    <div className={`screenshot ${platform}`} title={name}>
      <div className="img-wrapper" style={style}>
        <Img {...images[src]} />
      </div>
    </div>
  );
}

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
