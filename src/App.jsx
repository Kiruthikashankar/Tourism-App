import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import KLCC from './pages/KLCC';
import Itinerary from './pages/Itinerary';
import Food from './pages/Food';
import CurrencyExchange from './pages/CurrencyExchange';
import Trending from './pages/Trending';
import Navigation from './pages/navigation'; // 🚀 Added map/navigation page

<Route path="/navigation" element={<Navigation />} />

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/klcc" element={<KLCC />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/food" element={<Food />} />
          <Route path="/currency-exchange" element={<CurrencyExchange />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/navigation" element={<Navigation />} /> {/* 👈 new */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
