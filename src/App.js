import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap';
import './App.css'

// Static element imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';


import About from './components/pages/About';
import SoilFreezeAdvantage from './components/pages/SoilFreezeAdvantage';

// Project page & subpages
import Projects from './components/pages/Projects';
import ShaCroPassPage from './components/pages/projectPages/ShaCroPassPage';
import FoundaExcaPage from './components/pages/projectPages/FoundaExcaPage';
import UtilPumpStaPage from './components/pages/projectPages/UtilPumpStaPage';
import EnviroSoilPage from './components/pages/projectPages/EnviroSoilPage';
import HorizFreezePage from './components/pages/projectPages/HorizFreezePage';

import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Careers from './components/pages/Careers';
import Terms from './components/pages/Terms';


function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advantage" element={<SoilFreezeAdvantage />} />
        <Route path="/projects" element={<Projects />} />
          <Route path='/projects/shafts-and-cross-passages' element={<ShaCroPassPage />} />
          <Route path='/projects/foundation-excavations' element={<FoundaExcaPage />} />
          <Route path='/projects/utilities-and-pump-stations' element={<UtilPumpStaPage />} />
          <Route path='/projects/environmental-soil-remediation' element={<EnviroSoilPage />} />
          <Route path='/projects/horizontal-freezing' element={<HorizFreezePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
