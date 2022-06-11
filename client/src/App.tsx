import React from 'react';
import Header from './components/Header/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Clients from './components/Clients/Clients';

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
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Header />

      <div className='container'>
        <Clients/>
      </div>
    </ApolloProvider>
  );
};

export default App;
