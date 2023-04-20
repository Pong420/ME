import React from 'react';
import { useBoolean } from '@/hooks/useBoolean';
import { Schema$Project } from '@/typings';
import { Player } from '../Player';

type Props = Pick<Schema$Project['data'], 'video' | 'github' | 'link'> & {
  title: string;
};

const ButtonLink = ({
  href,
  children
}: React.PropsWithChildren<{ href?: string }>) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button>{children}</button>
      </a>
    );
  }
  return null;
};

const VideoButton: React.FC<{ src?: string; title: string }> = ({
  title,
  src
}) => {
  const [playVideo, play, stop] = useBoolean();
  if (src) {
    return (
      <div>
        <button onClick={play}>Video</button>
        {playVideo && <Player title={title} src={src} onClose={stop} />}
      </div>
    );
  }
  return null;
};

export function ProjectNav({ title, github, link, video }: Props) {
  return (
    <div className="project-nav">
      <VideoButton title={title} src={video && video.publicURL} />
      <ButtonLink href={github}>Github</ButtonLink>
      <ButtonLink href={link}>Link</ButtonLink>
    </div>
  );
}
