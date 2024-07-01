import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graph-ql-server-eight.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

const CountriesProvider = ({ children }) => (
  <Provider client={client}>{children}</Provider>
);

export default CountriesProvider;