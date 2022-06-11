import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AddClientModal from './components/AddClientModal/AddClientModal';
import Clients from './components/Clients/Clients';
import Header from './components/Header/Header';
import React from 'react';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge: (existing: any, incoming: any) => incoming,
        },
        projects: {
          merge: (existing: any, incoming: any) => incoming,
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />

      <div className='container'>
        <AddClientModal/>

        <Clients/>
      </div>
    </ApolloProvider>
  );
};

export default App;
