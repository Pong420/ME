import React from 'react';
import { Schema$Project } from '@/typings';
import Img from 'gatsby-image';

type Props = Pick<Schema$Project['data'], 'title' | 'platform' | 'screenshot'>;

export function Screenshot({ platform, screenshot, title }: Props) {
  return (
    <div className={`screenshot ${platform}`} title={title}>
      <div
        className="img-wrapper"
        style={{
          height: 0,
          paddingBottom:
            (1 / screenshot.childImageSharp.fluid.aspectRatio) * 100 + '%'
        }}
      >
        <Img {...screenshot.childImageSharp} />
      </div>
    </div>
  );
}
