import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import axios from 'axios';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
import './style/Paises.css'
const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name {
        common
        official
      }
      flags {
        png
        svg
      }
      continents
      capital
      languages
      population
      currencies
    }
  }
`;

const Paises = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [images, setImages] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredContinents, setFilteredContinents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSelected, setIsSelected] = useState({});
  useEffect(() => {
    if (data && data.countries) {
      const fetchImages = async () => {
        const newImages = {};
        const requests = data.countries.map(async country => {
          const capital = country.capital && country.capital.length > 0 ? country.capital[0] : country.name.common;
          try {
            const response = await axios.get(
              `https://pixabay.com/api/?key=44553611-8dd218554ee8976ae696e8602&q=${encodeURIComponent(capital)}&image_type=photo&pretty=true`
            );
            newImages[country.name.common] = response.data.hits[0]?.webformatURL || null;
          } catch (error) {
            console.error(`Error fetching image for ${country.name.common}:`, error);
            newImages[country.name.common] = null;
          }
        });

        await Promise.all(requests);
        setImages(newImages);
      };
      fetchImages();
    }
  }, [data]);

  const handleCardClick = (country) => {
    if (selectedCountry && selectedCountry.name.common !== country.name.common) {
      setIsSelected((prevIsSelected) => ({ ...prevIsSelected, [selectedCountry.name.common]: false }));
    }
    setSelectedCountry(country);
    setModalVisible(true);
    setIsSelected((prevIsSelected) => ({ ...prevIsSelected, [country.name.common]: true }));
  };  

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedCountry(null);
    setIsSelected((prevIsSelected) => ({ ...prevIsSelected, [selectedCountry.name.common]: false }));
  };

  const handleFilterByContinent = (continents) => {
    const updatedContinents = continents.flatMap(continent => 
      continent === 'Americas' ? ['North America', 'South America'] : [continent]
    );
    setFilteredContinents(updatedContinents);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.countries) return <p>No countries data available</p>;

  const filteredCountries = data.countries.filter(country => {
    const matchesContinent = filteredContinents.length === 0 || 
      filteredContinents.some(continent => country.continents.includes(continent));
    const matchesSearch = searchTerm === '' || 
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <div className="country-list">
      <SearchBar onSearch={handleSearch} onFilterByContinent={handleFilterByContinent} />
      {filteredCountries.map(country => (
       <div
       key={country.name.common}
       className={`country-card ${isSelected[country.name.common] ? 'selected' : ''}`}
       onClick={() => handleCardClick(country)}
     >
    <div className='image-wrapper'>
      {images[country.name.common] ? (
        <img src={images[country.name.common]} alt={`${country.name.common} capital`} className='country-image' />
      ) : (
        <p>No image available</p>
      )}
    </div>
    <div className={`country-info ${isSelected[country.name.common] ? 'selected' : ''}`}>
      <img src={country.flags.png} alt={`${country.name.common} flag`} className='flag' />
      <div className='text-info'>
        <span className='country-name'>{country.name.common}</span>
        <span className='continent'>{country.continents.join(', ')}</span>
      </div>
    </div>
  </div>
))}

      {modalVisible && selectedCountry && (
        <Modal country={selectedCountry} images={images} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Paises;
