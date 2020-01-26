import React, { ReactNode, CSSProperties } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Meteors } from './Meteors';
import { ChildImageSharp } from '../../typings';
import Img from 'gatsby-image';

interface Props {
  text?: string[];
  children?: ReactNode;
  className?: string;
}

interface BackgroundQuery {
  background: {
    childImageSharp: ChildImageSharp;
  };
}

const style: CSSProperties = {
  position: 'absolute'
};

export function MeteorsPage({ text = [], children, className }: Props) {
  return (
    <StaticQuery
      query={backgroundQuery}
      render={(data: BackgroundQuery) => (
        <div className={`meteors-page ${className}`}>
          <Img
            className="background"
            fluid={data.background.childImageSharp.fluid}
            style={style}
          />
          <Meteors />
          <div className="container">
            <div className="text">
              {text.map(str => (
                <div key={str}>{str}</div>
              ))}
            </div>
            {children}
          </div>
        </div>
      )}
    />
  );
}

const backgroundQuery = graphql`
  query {
    background: file(relativePath: { eq: "background_2560.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`;
