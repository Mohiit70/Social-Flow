import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import TryItFree from './pages/TryItFree';
import ToneAnalyzerPage from './pages/ToneAnalyzerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/try-it-free" element={<TryItFree />} />
        <Route path="/tone-analyzer" element={<ToneAnalyzerPage />} />
      </Routes>
    </Router>
  );
};

export default App;