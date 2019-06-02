import React, { CSSProperties } from 'react';
import { Link } from 'gatsby';
import { ProjectItem } from '../ProjectItem';
import { useMedia } from '../../utils/useMedia';
import { Schema$Project } from '../../typings';
import projects from '../../projects.json';

const textAlignCenter: CSSProperties = { textAlign: 'center' };

export function Projects() {
  const matches = useMedia('(min-width:768px)');

  return (
    <div className="projects">
      <div className="projects-content">
        {(projects as Schema$Project[]).map(item => (
          <div className="project-item-container" key={item.prefix}>
            <ProjectItem {...item} matches={!!matches} />
          </div>
        ))}
        <div style={textAlignCenter}>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
