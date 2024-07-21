import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </Router>
);

export default App;