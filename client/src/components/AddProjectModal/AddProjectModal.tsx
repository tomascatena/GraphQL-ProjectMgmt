import { ADD_PROJECT } from '../../mutations/projectMutations';
import { FaList } from 'react-icons/fa';
import { GET_PROJECTS } from '../../queries/projectQueries';
import { ProjectStatus, ProjectsData } from '../../typings/typings';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

type Props = {};

const AddProjectModal: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState<ProjectStatus>('NEW');

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const projects = cache.readQuery<ProjectsData>({ query: GET_PROJECTS })!.projects;

      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: [...projects, addProject],
        },
      });
    }
  }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !description || !clientId) {
      return alert('Please fill in all fields');
    }

    addProject();

    setName('');
    setDescription('');
    setClientId('');
    setStatus('NEW');
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#addProjectModal'
      >
        <div className='d-flex align-items-center'>
          <FaList className='icon' />

          <div>New Project</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addProjectModal'
        aria-labelledby='addProjectModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='addProjectModalLabel'
              >
                New Project
              </h5>

              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>

            <div className='modal-body'>
              <form
                className='mb-3'
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor='name'
                  className='form-label mt-2'
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

                <label
                  htmlFor='description'
                  className='form-label mt-2'
                >
                  Description
                </label>

                <textarea
                  className='form-control'
                  id='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <label
                  htmlFor='clientId'
                  className='form-label mt-2'
                >
                  Client Id
                </label>

                <input
                  type='text'
                  className='form-control'
                  id='clientId'
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                />

                <label
                  htmlFor='status'
                  className='form-label mt-2'
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

                <button
                  className='btn btn-primary mt-4'
                  type='submit'
                  data-bs-dismiss='modal'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
