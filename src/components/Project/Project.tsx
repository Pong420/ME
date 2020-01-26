import React from 'react';
import { ProjectNav } from './ProjectNav';
import { Screenshot } from '../Screenshot';
import { Schema$Project } from '../../typings';

interface Props extends Schema$Project {
  index: number;
  matches: boolean;
}

export function Project({ content, data, index, matches }: Props) {
  const projectNav = <ProjectNav {...data} />;

  return (
    <div className="project">
      <div className="project-body">
        <div className="number">{padStart(index)}</div>

        <div className="project-head">
          <div className="project-title">{data.title}</div>
          <div className="project-date">{getDate(data.date)}</div>
        </div>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {matches && projectNav}
      </div>

      <div className="project-screenshot">
        <Screenshot {...data} />
      </div>

      {!matches && projectNav}
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
