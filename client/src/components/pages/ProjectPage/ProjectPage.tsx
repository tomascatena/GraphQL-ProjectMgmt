import { GET_PROJECT } from '../../../queries/projectQueries';
import { GetProject } from '../../../typings/typings';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ClientInfo from '../../ClientInfo/ClientInfo';
import DeleteProjectButton from '../../DeleteProjectButton/DeleteProjectButton';
import EditProjectForm from '../../EditProjectForm/EditProjectForm';
import React from 'react';
import Spinner from '../../Spinner/Spinner';

type Props = {}

const ProjectPage:React.FC<Props> = () => {
  const { projectId } = useParams();

  const { loading, error, data } = useQuery<GetProject>(GET_PROJECT, {
    variables: { id: projectId },
  });

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {!loading && !error && data?.project && (
        <div className="mx-auto w-75 card p-5">
          <Link
            to='/'
            className='btn btn-light btn-sm w-25 d-inline ms-auto'
          >
            Go Back
          </Link>

          <h1>{data.project.name}</h1>

          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>

          <p className="lead">{data.project.status}</p>

          {data.project.client && <ClientInfo client={data.project.client}/>}

          <EditProjectForm project={data.project}/>

          {projectId && <DeleteProjectButton projectId={projectId} />}
        </div>
      )}
    </>
  );
};

export default ProjectPage;
