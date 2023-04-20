import React from 'react';
import { Schema$Project } from '@/typings';
import { GatsbyImage } from 'gatsby-plugin-image';

type Props = Pick<Schema$Project['data'], 'title' | 'platform' | 'screenshot'>;

export function Screenshot({ platform, screenshot, title }: Props) {
  const image = screenshot.childImageSharp.gatsbyImageData;

  return (
    <div className={`screenshot ${platform}`} title={title}>
      <div
        className="img-wrapper"
        style={{
          height: 0,
          paddingBottom: (image.height / image.width) * 100 + '%'
        }}
      >
        <GatsbyImage image={image} alt="" />
      </div>
    </div>
  );
}
