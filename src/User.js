
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="countries-container">
      {data.countries.map((country) => (
        <div className="country-card" key={country.code}>
          <h2>{country.name}</h2>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Currency:</strong> {country.currency}</p>
          <p><strong>Continent:</strong> {country.continent.name}</p>
          <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
};


export default Users;
