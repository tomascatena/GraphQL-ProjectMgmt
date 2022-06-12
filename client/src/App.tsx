import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';
import NotFound from './components/pages/NotFound/NotFound';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
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
      <BrowserRouter>
        <Header />

        <div className='container'>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/projects/:projectId"
              element={<ProjectPage />}
            />

            <Route
              path="*"
              element={<NotFound/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
