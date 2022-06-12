import { GET_PROJECT } from '../../queries/projectQueries';
import { Project, ProjectStatus } from '../../typings/typings';
import { UPDATE_PROJECT } from '../../mutations/projectMutations';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

type Props = {
  project: Project
}

const EditProjectForm:React.FC<Props> = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState<ProjectStatus>('NEW');

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status
    },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }]
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !description || !status) {
      return alert('Please fill in all fields');
    }

    updateProject();
  };

  return (

    <div className='mt-5'>
      <h3>Update Project Details</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor='name'
            className='form-label'
          >
            Name
          </label>

          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor='description'
            className='form-label'
          >
            Description
          </label>

          <textarea
            className='form-control'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor='status'
            className='form-label'
          >
            Status
          </label>

          <select
            className='form-select'
            id='status'
            value={status}
            onChange={(e) => setStatus(e.target.value as ProjectStatus)}
          >
            <option value="NEW" >Not Started</option>
            <option value="PROGRESS">Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <button
          className='btn btn-primary mt-3'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>

  );
};

export default EditProjectForm;
