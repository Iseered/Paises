

import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './User';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';


import Vista1 from './vistas/Vista1';
import Vista2 from './vistas/Vista2';
import Home from './vistas/Home'
function App() {
 
  return (
    
      <Router>
      <div  className='flex min-h-screen'>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        <div className='flex-1 p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vista1" element={<Vista1 />} />
            <Route path="/vista2" element={<Vista2 />} />
          </Routes>
        </div>
      </div>
    </Router>
   
  );
}

export default App;
