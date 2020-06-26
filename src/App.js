import React from 'react';
import { Routes, Route, Router} from 'react-router'
import Ordenes from './components/paginas/Ordenes'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ordenes />} />
        <Route path="/" element={<Ordenes />} />
        <Route path="/" element={<Ordenes />} />
      </Routes>
    </div>
  );
}

export default App;
