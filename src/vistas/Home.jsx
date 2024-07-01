import React from 'react'
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Paises from '../Paises.js'
import '../style/Countries.css';
function Home() {
    

    
    
  return (
    <div  className='flex-1 p-10'>
      
    <div className="app">
    
    
    {/* Aquí puedes renderizar los resultados de la búsqueda basándote en searchTerm <User></User> */}
    <Paises/>
    
  </div>
    </div>
  )
}

export default Home
