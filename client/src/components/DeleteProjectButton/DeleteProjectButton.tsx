import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Props = {
  projectId: string
}

const DeleteProjectButton:React.FC<Props> = ({ projectId }) => {
  return (
    <div>{projectId}</div>
  );
};

export default DeleteProjectButton;
