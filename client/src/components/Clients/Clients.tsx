import React from 'react';
import { useQuery } from '@apollo/client';
import ClientRow from '../ClientRow/ClientRow';
import { Client } from '../../typings/typings';
import { GET_CLIENTS } from '../../queries/clientQueries';
import Spinner from '../Spinner/Spinner';


export interface ClientsData {
  clients: Client[];
}

const Clients: React.FC = () => {
  const { loading, error, data } = useQuery<ClientsData, Client>(GET_CLIENTS);

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
