import { Client, ClientsData } from '../../typings/typings';
import { DELETE_CLIENT } from '../../mutations/clientMutations';
import { FaTrash } from 'react-icons/fa';
import { GET_CLIENTS } from '../../queries/clientQueries';
import { useMutation } from '@apollo/client';
import React from 'react';

type Props = {
  client: Client;
};

const ClientRow: React.FC<Props> = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{query: GET_CLIENTS}],
    update(cache, { data: { deleteClient } }) {
      const clients = cache.readQuery<ClientsData>({ query: GET_CLIENTS })!.clients;

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id)
        },
      });
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => deleteClient()}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
