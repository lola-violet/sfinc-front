import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Static element imports
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';


import About from './components/pages/About';
import SoilFreezeAdvantage from './components/pages/SoilFreezeAdvantage';

// Project page & subpages
import Projects from './components/pages/Projects';
import TunnelsAndShafts from './components/pages/projectPages/TunnelsAndShafts';
import FoundationExcavations from './components/pages/projectPages/FoundationExcavations';
import UtilitiesAndPumpStations from './components/pages/projectPages/UtilitiesAndPumpStations';
import EnvironmentalSoilRemediation from './components/pages/projectPages/EnvironmentalSoilRemediation';
import Mining from './components/pages/projectPages/Mining';

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
          <Route path='/projects/tunnels-and-shafts' element={<TunnelsAndShafts />} />
          <Route path='/projects/foundation-excavations' element={<FoundationExcavations />} />
          <Route path='/projects/utilities-and-pump-stations' element={<UtilitiesAndPumpStations />} />
          <Route path='/projects/environmental-soil-remediation' element={<EnvironmentalSoilRemediation />} />
          <Route path='/projects/mining' element={<Mining />} />
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
