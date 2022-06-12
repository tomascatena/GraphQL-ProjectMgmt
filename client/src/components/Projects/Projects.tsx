import { GET_PROJECTS } from '../../queries/projectQueries';
import { Project, ProjectsData } from '../../typings/typings';
import { useQuery } from '@apollo/client';
import ProjectCard from '../ProjectCard/ProjectCard';
import React from 'react';
import Spinner from '../Spinner/Spinner';

type Props = {}

const Projects:React.FC<Props> = () => {
  const { loading, error, data } = useQuery<ProjectsData, Project>(GET_PROJECTS);

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className='row mt-4'>
      {!loading && !error && data?.projects.length && (
        <div className="row">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Projects;
