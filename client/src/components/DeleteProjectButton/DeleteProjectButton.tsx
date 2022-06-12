import { DELETE_PROJECT } from '../../mutations/projectMutations';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Props = {
  projectId: string
}

const DeleteProjectButton:React.FC<Props> = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => {
      navigate('/');
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button
        onClick={() => deleteProject()}
        className='btn btn-danger m-2'
      >
        <FaTrash /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
