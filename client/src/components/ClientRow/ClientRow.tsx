import React from 'react';
import { Client } from '../../typings/typings';
import { FaTrash } from 'react-icons/fa';

type Props = {
  client: Client;
};

const ClientRow: React.FC<Props> = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm'>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
