import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Detail />} />
    </Routes>
  );
};

export default App;
