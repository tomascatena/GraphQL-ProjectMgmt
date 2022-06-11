import React from 'react'
import {gql, useQuery} from '@apollo/client'

type Props = {}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ClientsData {
  clients: Client[];
}

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`

const Clients:React.FC<Props> = () => {
const  {loading, error, data} =  useQuery<ClientsData, Client>(GET_CLIENTS)

if(loading){
  return <p>Loading...</p>
}

if(error){
  return <p>Something went wrong</p>
}


  return (
    <>
    {!loading && !error && data?.clients?.map(client => (
      <div key={client.id}>
        <h2>{client.name}</h2>
        <p>{client.email}</p>
        <p>{client.phone}</p>
      </div>
    ))}
    </>
  )
}

export default Clients