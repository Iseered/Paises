import React, { useState } from 'react';
import '../App.css';
import SearchModal from './SearchModal';

const SearchBar = ({ onSearch, onFilterByContinent }) => {
  const [term, setTerm] = useState('');
  const [isContinentModalOpen, setIsContinentModalOpen] = useState(false);

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value); // Filtrar en tiempo real
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  const handleContinentClick = () => {
    setIsContinentModalOpen(true);
  };

  const handleCloseContinentClick = () => {
    setIsContinentModalOpen(false);
  };

  const handleSelectContinent = (continent) => {
    onFilterByContinent(continent);
    setIsContinentModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='search-bar'>
        <div className='search-container'>
          <div className='search-input-container'>
            <label htmlFor='search-input' className='search-label'>
              País
            </label>
            <input
              id='search-input'
              type='text'
              placeholder='Escribe el país que deseas ver'
              value={term}
              onChange={handleChange}
              className='search-input'
              onClick={handleContinentClick}
            />
          </div>
          <button type='submit' className='search-button'>
            <span className='search-icon'>🔍</span> Buscar
          </button>
        </div>
      </form>

      <SearchModal
        isOpen={isContinentModalOpen}
        onClose={handleCloseContinentClick}
        onSelectContinents={handleSelectContinent}
      />
    </>
  );
};

export default SearchBar;
