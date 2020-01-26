import React from 'react';
import { Link } from 'gatsby';
import { Project } from '../Project';
import { Schema$Project } from '../../typings';
import { useMedia } from '../../hooks/useMedia';

interface Props {
  projects: Schema$Project[];
}

export function Projects({ projects }: Props) {
  const matches = useMedia('(min-width:768px)');

  return (
    <div className="projects">
      <div className="projects-body">
        {projects.map((project, index) => (
          <div className="row" key={project.data.slug}>
            <Project index={index} matches={!!matches} {...project} />
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
