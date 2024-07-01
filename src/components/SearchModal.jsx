import React, { useState } from 'react';
import europaImage from '../recursos/europa.jpg';
import americaImage from '../recursos/america.jpg';
import asiaImage from '../recursos/asia.jpg';
import oceaniaImage from '../recursos/oceania.jpg';
import africaImage from '../recursos/africa.jpg';

const SearchModal = ({ isOpen, onClose, onSelectContinents }) => {
  const [selectedContinents, setSelectedContinents] = useState([]);

  if (!isOpen) return null;

  const continents = [
    { name: 'Europe', image: europaImage },
    { name: 'Americas', image: americaImage },
    { name: 'Asia', image: asiaImage },
    { name: 'Oceania', image: oceaniaImage },
    { name: 'Africa', image: africaImage },
  ];

  const toggleContinent = (continent) => {
    setSelectedContinents(prevSelected =>
      prevSelected.includes(continent)
        ? prevSelected.filter(c => c !== continent)
        : [...prevSelected, continent]
    );
  };

  const handleFilterClick = () => {
    onSelectContinents(selectedContinents);
    onClose();
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container move-down">
        <h2 className="text-xl font-bold mb-4">Filtrar por continentes</h2>
        <div className="grid grid-cols-3 gap-4"> {/* Cambia aquí a grid-cols-3 */}
          {continents.map(continent => (
            <button
              key={continent.name}
              onClick={() => toggleContinent(continent.name)}
              className={`p-2 ${selectedContinents.includes(continent.name) ? 'bg-blue-300' : 'bg-blue-100'} hover:bg-blue-200 rounded flex flex-col items-center`}
            >
              <img 
                src={continent.image} 
                alt={continent.name} 
                className="w-full h-24 object-cover mb-2 rounded"
              />
              <span>{continent.name}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
            Cerrar
          </button>
          <button onClick={handleFilterClick} className="px-4 py-2 bg-blue-500 text-white rounded">
            Filtrar
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
