import React from 'react';
import { Player } from '../Player';
import { Options } from '../../typings';
import { useBoolean } from '../../utils/useBoolean';

interface NavItemProps {
  title: string;
  type: string;
  value: string;
}

interface Props {
  title: string;
  options: Options;
}

const NavItem = React.memo<NavItemProps>(({ title, type, value }) => {
  const [playVideo, { on, off }] = useBoolean();

  if (type === 'video') {
    return (
      <>
        <button onClick={on}>Video</button>
        {playVideo && (
          <Player title={title} videoSource={value} onClose={off} />
        )}
      </>
    );
  }

  return (
    <a href={value} target="_blank" rel="noopener noreferrer">
      <button>{type}</button>
    </a>
  );
});

export const ProjectNav = React.memo<Props>(({ title, options }) => {
  return (
    <div className="project-nav">
      {Object.keys(options).map(type => {
        const value = options[type];
        return (
          <div className="project-nav-item" key={type}>
            <NavItem {...{ type, value, title }} />
          </div>
        );
      })}
    </div>
  );
});
