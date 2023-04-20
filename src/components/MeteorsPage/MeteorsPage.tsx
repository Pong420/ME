import React, { ReactNode, CSSProperties } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ChildImageSharp } from '@/typings';
import { Meteors } from './Meteors';
import { GatsbyImage } from 'gatsby-plugin-image';

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
          <GatsbyImage
            image={data.background.childImageSharp.gatsbyImageData}
            className="background"
            style={style}
            alt=""
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
  {
    background: file(relativePath: { eq: "background_2560.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
