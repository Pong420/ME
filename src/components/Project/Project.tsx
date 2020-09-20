import React from 'react';
import { Schema$Project } from '@/typings';
import { ProjectNav } from './ProjectNav';
import { Screenshot } from '../Screenshot';

interface Props extends Schema$Project {
  index: number;
  matches: boolean;
}

export function Project({ content, data, index }: Props) {
  const projectNav = <ProjectNav {...data} />;

  return (
    <div className="project">
      <div className="number">{padStart(index)}</div>

      <div className="project-header">
        <div className="project-title">{data.title}</div>
        <div className="project-date">{getDate(data.date)}</div>
      </div>

      <div className="project-screenshot">
        <Screenshot {...data} />
      </div>

      <div
        className="project-description"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {projectNav}
    </div>
  );
}

function padStart(num: number) {
  return String(num).length < 2 ? `0${num}` : num;
}

function getDate(d: string) {
  const date: any = new Date(d).toDateString();
  const arr = date.split(' ');
  return arr[1] + ' ' + arr[3];
}
