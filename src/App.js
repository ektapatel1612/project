import React from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
