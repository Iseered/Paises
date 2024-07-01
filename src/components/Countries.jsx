import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      flags {
        png
      }
      continent
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.countries.map(country => (
        <div key={country.name} className='flex items-center'>
          <img src={country.flags.png} alt={`${country.name} flag`} className='w-16 h-10 mr-4'/>
          <span>{country.name} - {country.continent}</span>
        </div>
      ))}
    </div>
  );
};

export default Countries;
