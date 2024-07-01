import React from 'react';
import '../style/Modals.css'

const Modal = ({ country, images, onClose }) => {
  return (
    <div className='fixed bottom-4 right-4 bg-white rounded-lg shadow-lg w-96 h-[32rem] overflow-hidden'>
      <button className='absolute top-2 right-2 text-gray-600 z-10' onClick={onClose}>X</button>
      <div className='h-full overflow-y-auto p-6'>
        <div className='flex items-center mb-4'>
          <img src={country.flags.png} alt={`${country.name.common} flag`} className='w-12 h-8 mr-2' />
          <div>
            <h2 className='text-2xl font-bold'>{country.name.common}</h2>
            <p className='text-sm text-gray-500'>{country.continents.join(', ')}</p>
          </div>
        </div>
        <img src={images[country.name.common]} alt={`${country.name.common} capital`} className='w-full h-48 object-cover rounded-md mb-4' />
        <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
        <p><strong>Language:</strong> {Object.values(country.languages).join(', ')}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()} people</p>
        <p><strong>Currency:</strong> {Object.values(country.currencies).map(curr => curr.name).join(', ')}</p>
        <p><strong>Region:</strong> {country.region}</p>
      </div>
    </div>
  );
};

export default Modal;