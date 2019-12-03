import React from 'react';
import { ScreenShot } from './ScreenShot';
import { ProjectNav } from './ProjectNav';
import { Schema$Project } from '../../typings';

interface Props extends Schema$Project {
  matches: boolean;
}

function getDate(d: string) {
  const date: any = new Date(d).toDateString();
  const arr = date.split(' ');
  return arr[1] + ' ' + arr[3];
}

export const ProjectItem = React.memo<Props>(
  ({ name, num, description, platform, thumbnail, options, matches, date }) => {
    return (
      <div className="project-item">
        <div className="project-info">
          <div className="number">{padStart(num)}</div>
          <div className="project-content">
            <div className="project-header">
              <div className="project-name">{name}</div>
              <div className="project-date">{getDate(date)}</div>
            </div>
            <div
              className="project-description"
              dangerouslySetInnerHTML={{
                __html: description.replace(
                  /<a\s+href=/g,
                  '<a target="_blank" href='
                )
              }}
            />
            {matches && <ProjectNav title={name} options={options} />}
          </div>
        </div>

        <div className="screenshot-container">
          <ScreenShot {...{ name, platform, thumbnail }} />
        </div>

        {!matches && <ProjectNav title={name} options={options} />}
      </div>
    );
  }
);

function padStart(num: number) {
  return String(num).length < 2 ? `0${num}` : num;
}
