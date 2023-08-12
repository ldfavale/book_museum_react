import logo from './logo.svg';
import './App.css';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import SearchAuthors from './pages/SearchAuthors';
import Biography from './pages/Biography';
import Carrousell from './pages/Carrousell';


function App() {


  
  return (
    <Routes>
      <Route path='/' element={<Carrousell/>} />
      <Route path='/search' element={<SearchAuthors/>} />
      <Route path='/bio' element={<Biography/>} />
    </Routes>
  );
}

export default App;
