import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Image = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {countries.map(country => (
        <div key={country.cca3} className='flex items-center'>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} className='w-16 h-10 mr-4'/>
          <span>{country.name.common}</span>
        </div>
      ))}
    </div>
  );
};
export default Image;
