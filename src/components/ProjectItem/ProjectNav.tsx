import React, { useState, ReactNode, ButtonHTMLAttributes } from 'react';
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

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} onMouseUp={evt => evt.currentTarget.blur()}>
      {children}
    </button>
  );
};

function NavItem({ title, type, value }: NavItemProps) {
  const [playVideo, { on, off }] = useBoolean();

  if (type === 'video') {
    return (
      <>
        <Button onClick={on}>Video</Button>
        {playVideo && (
          <Player title={title} videoSource={value} onClose={off} />
        )}
      </>
    );
  }

  return (
    <a href={value} target="_blank">
      <Button>{type}</Button>
    </a>
  );
}

export function ProjectNav({ title, options }: Props) {
  return (
    <div className="project-nav">
      {Object.keys(options).map(type => {
        const value = options[type];
        return (
          <div className="project-nav-item" key={type}>
            <NavItem type={type} value={value} title={title} />
          </div>
        );
      })}
    </div>
  );
}
