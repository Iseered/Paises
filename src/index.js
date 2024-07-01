import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ApolloProvider from './ApolloProvider';
import CountriesProvider from './CountriesProvider';
import './index.css'
ReactDOM.render(
  <CountriesProvider >
    <App  />
    
  </CountriesProvider>,
  document.getElementById('root')
);
